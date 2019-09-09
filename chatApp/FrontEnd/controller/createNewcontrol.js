app.controller('newpasswordCtrl',function($scope,newpasswordService){

    console.log("newpassword called");
    
    $scope.newpassword=function(){
    let newpasswordData={
        'password':$scope.password
        
    }
    console.log("newpassword data",newpasswordData);
    
    newpasswordService.newpasswordServiceUser(newpasswordData)
    } 

    
    

})