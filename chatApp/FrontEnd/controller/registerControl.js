app.controller('registrationCtrl',function($scope,registrationService){

    console.log("registration called");
    
    $scope.registration=function(){
        let registrationData={
            'firstName':$scope.firstName,
            'lastName':$scope.lastName,
            'email':$scope.email,
            'password':$scope.password
        }
        console.log("registration data",registrationData);
    
    registrationService.registerServicesUser(registrationData,$scope);
    }
    
    
})