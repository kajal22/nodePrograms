

app.controller('chatControl', function ($scope,chatService) {

 
    
      $scope.getUserData = function(){
       
        }
        chatService.chatServiceUser($scope);  



        /*****GET MESSAGE****/
        $scope.getMessage = function(user){
            const messageArray=[]
            const message=""
            console.log("userdata",user.firstName)
             
              $scope.user=localStorage.getItem('recieverId')
             console.log("hhhh")
           
    if((localStorage.getItem('recieverId')==message.senderId) || (localStorage.getItem('recieverId')==message.recieverId))
       $scope.messageArray=message;
       console.log( $scope.messageArray)
            chatService.getMessageUser($scope);
          }
    
      

       
     
});