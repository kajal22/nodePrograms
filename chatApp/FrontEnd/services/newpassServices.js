app.service("newpasswordService", function ($http, $location) {
    this.newpasswordServiceUser = function (data, $scope) {
        $http(
            {
                method: 'POST',
                url: 'http://localhost:4001/resetPassword',
                data: data
            }).then(
                function (response) {
                    console.log("created successfully");
                    console.log(response);

                    $scope.newpassword = function () {
                        alert(" done Successfully...")
                    }
                    $location.path('/newpassword');
                }).catch(function (error) {
                    $scope.newpassword = function () {
                        alert(" failed...")
                    }
                    console.log(" failed..", error)
                });
    }
});