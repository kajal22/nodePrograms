
app.service("forgetService", function ($http, $location) {
    this.forgetServiceUser = function (data, $scope) {

        console.log("into forget service !");
        $http(
            {
                method: 'POST',
                url: 'http://localhost:4000/forgetPassword',
                data: data
            }).then(
                function (response) {
                    console.log("successfully");
                    console.log(response);

                    $scope.forgetPassword = function () {
                        alert(" done Successfully...")
                    }
                    $location.path('/newpassword');
                }).catch(function (error) {
                    $scope.forgetPassword = function () {
                        alert(" failed...")
                    }
                    console.log(" failed..", error)
                });
    }
});