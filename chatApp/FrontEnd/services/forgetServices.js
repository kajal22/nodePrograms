
app.service("forgetService", function ($http, $location) {
    this.forgetServiceUser = function (data,$scope) {

       
        $http(
            {
                method: 'POST',
                url: 'http://localhost:4000/forgetPassword',
                data: data
            }).then(function (response) {

                    if(response.data.success==true)
                    {
                        alert("Sent mail successfully..")
                        $location.path('/newpassword');
                    }
                    


                }).catch(function (error) {
                    $scope.forgetPassword = function () {
                        alert("Sending mail fail..")
                    }
        
                });
    }
});