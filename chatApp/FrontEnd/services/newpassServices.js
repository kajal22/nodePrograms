app.service("newpasswordService", function ($http, $location) {
    this.newpasswordServiceUser = function (data, $scope) {
        $http(
            {
                method: 'POST',
                url: 'http://13.59.67.17:4000/resetPassword',
                data: data
            }).then(
                function (response) {
                    console.log("created password successfully");
                    console.log(response)
                    alert(" reset password Successfully...")
                    $location.path('/#/login')
                    
             
                }).catch(function (error) {
                    $scope.resetPassword = function () {
                        alert(" failed...")
                    }
        
                });
    }
});