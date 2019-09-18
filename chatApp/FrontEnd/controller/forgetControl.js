app.controller('forgetCtrl',function($scope,forgetService){
    // email validation
    $scope.emailValidation = function (email) {
        let pattern = /^([a-zA-Z0-9_\.])+\@(([gmail\yahoo\hotmail\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        let res = email.match(pattern);
        if (res) {
            $scope.emailVal = false;
        }
        else {
            $scope.emailVal = true;
        }
    }
    $scope.forgetPassword=function(){
    let forgetData={
        'email':$scope.email,
        
    }
    console.log("login data",forgetData);
    forgetService.forgetServiceUser(forgetData,$scope)
    } 

  

})