app.service("newpasswordService", function ($http, $location) {
    this.newpasswordServiceUser = function (data, $scope) {
        $http(
            {
                method: 'POST',
                url: 'http://localhost:4000/resetPassword',
                data: data
            }).then(
                function (response) {
                    console.log("created successfully");
                    console.log(response);

                    $scope.resetPassword = function () {
                        alert(" done Successfully...")
                        $location.path('/#/login')
                    }
                    $location.path('/resetPassword');
                }).catch(function (error) {
                    $scope.resetPassword = function () {
                        alert(" failed...")
                    }
                    console.log(" failed..", error)
                });
    }
});