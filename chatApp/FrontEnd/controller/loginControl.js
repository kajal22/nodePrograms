// app.controller('loginCtrl',function($scope,loginService){

//     console.log("login called");
    
//     $scope.login=function(){
//     let loginData={
//         'email':$scope.email,
//         'password':$scope.password
//     }
//     console.log("login data",loginData);
    
//     loginService.loginServiceUser(loginData)
//     } 

// })



app.controller('controlLogin', function ($scope,$location,serviceLogin) {

    console.log(" login controllrer called ");
    
    $scope.login = function () {
        var data = {
            'email': $scope.email,
            'password': $scope.password
        }
        console.log("data", data)

        serviceLogin.login(data, $scope);

    }
    $scope.register=function () {
        console.log('in register m');
        
        $location.path('/register')
    }
});