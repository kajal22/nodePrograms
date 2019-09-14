

app.controller('chatControl', function ($scope,chatService) {

      console.log("chat control here")
    
      $scope.allMessage=[];
   
      $scope.getUserData = function(){
      console.log("hii")
      $scope.loginName = localStorage.getItem('loginName')
      $scope.loginId=localStorage.getItem('loginId')
      console.log("login name ",$scope.loginName);
      console.log("login ID ",$scope.loginId);

      chatService.chatServiceUser($scope); 

    }

    $scope.getUserData()
        

        /*****GET MESSAGE****/
        console.log("msgs control")

          $scope.getMessage = function(x){
            
          console.log("get all message ", x)

          //** set receiver id and name  */
           localStorage.setItem("receiverId", x._id)
           localStorage.setItem("receiverName", x.firstName)

          $scope.receiverName = x.firstName;
          $scope.receiverId = x._id;

        console.log("receiver name",$scope.receiverName);
        console.log("receiver id",$scope.receiverId)

        chatService.getMessageUser($scope);


      }    
     
});
