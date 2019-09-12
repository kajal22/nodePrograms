

app.controller('chatControl', function ($scope,chatService) {

    console.log(" chat controllrer called ");
    
     $scope.getUserData = function(){
         
        }
        chatService.chatServiceUser($scope);
        // $scope.getUserData()
        // console.log($scope.getUserData)
     
});