app.controller('forgetCtrl',function($scope,forgetService){

    console.log("forget called");
    
    $scope.forgetPassword=function(){
    let forgetData={
        'email':$scope.email,
        
    }
    } 

    console.log("login data",forgetData);
    
    forgetService.forgetServiceUser(forgetData)
    

})