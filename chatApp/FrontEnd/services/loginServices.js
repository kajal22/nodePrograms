

app.service('serviceLogin', function ($http, $location) {
    this.login = function (data, $scope) {
        console.log(" login client service called");

        console.log("data on login service---", data);
        $http
        ({
            method: 'POST',
            url: 'http://localhost:4000/login',
            data: data
        }).then(

            function successCallback(response) {

                console.log("login successful at servicelogin in client side");
              
                $scope.login=function(){
                    alert("LOGIN SUCCESFULL !")
                }
                $location.path('/#/login')
            },
            
        );
    }
});
