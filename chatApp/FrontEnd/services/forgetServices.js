
app.service("forgetService", function ($http, $location) {
    this.forgetServiceUser = function (data, $scope) {
        $http(
            {
                method: 'POST',
                url: 'http://localhost:4001/forgetPassword',
                data: data
            }).then(
                function (response) {
                    console.log("successfully");
                    console.log(response);

                    $scope.forgetPassword = function () {
                        alert(" done Successfully...")
                    }
                    $location.path('/#/Login');
                }).catch(function (error) {
                    $scope.forgetPassword = function () {
                        alert(" failed...")
                    }
                    console.log(" failed..", error)
                });
    }
});