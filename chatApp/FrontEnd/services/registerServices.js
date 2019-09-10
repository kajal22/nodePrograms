app.service("registerService", function ($http, $location) {
    this.registerServicesUser = function (data, $scope) {

        console.log("into register service !");
        
        $http(
            {
                method: 'POST',
                url: 'http://localhost:4000/registration',
                data: data
            }).then(
                function (response) {
                    console.log("registration successfully");
                    console.log(response);

                    $scope.registration = function () {
                        alert("Registration done Successfully...")
                    }
                    $location.path('/#/login');

                }).catch(function (error) {
                    $scope.registration = function () {
                        alert("Registration failed...")
                    }
                    console.log("Registration failed..", error)
                });
    }
});