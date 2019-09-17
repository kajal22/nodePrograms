app.service("newpasswordService", function ($http, $location) {
    this.newpasswordServiceUser = function (data, $scope) {
        $http(
            {
                method: 'POST',
                url: 'http://localhost:4000/resetPassword',
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