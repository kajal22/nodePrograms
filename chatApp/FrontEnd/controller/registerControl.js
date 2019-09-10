app.controller("registrationCtrl",function($scope,registerService){

    console.log("in to registration controller .... ");
    
    $scope.registration=function(){
        
        let registrationData={
            'firstName':$scope.firstName,
            'lastName':$scope.lastName,
            'email':$scope.email,
            'password':$scope.password
        }
        console.log("registration data",registrationData);
    
    registerService.registerServicesUser(registrationData,$scope);
    }
    
    
})