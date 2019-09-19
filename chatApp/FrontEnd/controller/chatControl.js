


app.controller('chatControl', function ($scope, chatService, SocketService) {

  console.log("chat control here")
  $scope.messageResult = true;

  $scope.allMessage = [];

  $scope.getUserData = function () {
    $scope.loginName = localStorage.getItem('loginName')
    $scope.loginId = localStorage.getItem('loginId')
    // console.log("login name ",$scope.loginName);
    // console.log("login ID ",$scope.loginId);

    chatService.chatServiceUser($scope);
  }

  $scope.getUserData()


  /*****GET MESSAGE****/
  console.log("msgs control")

  $scope.getMessage = function (x) {

    console.log("get all message ", x)

    //** set receiver id and name  */
    localStorage.setItem("receiverId", x._id)
    localStorage.setItem("receiverName", x.firstName)

    $scope.receiverName = x.firstName;
    $scope.receiverId = x._id;

    // console.log("receiver name",$scope.receiverName);
    // console.log("receiver id",$scope.receiverId);

    chatService.getMessageUser($scope);

  }



  $scope.sendMessage = function () {
    sendObject = {
      "senderId": localStorage.getItem('loginId'),
      "senderName": localStorage.getItem('loginName'),
      "recieverId": localStorage.getItem('receiverId'),
      "recieverName": localStorage.getItem('receiverName'),
      "message": $scope.message
    }


    SocketService.emit("messageStore", sendObject)
    try{
    console.log("msgobject", sendObject)

    if ($scope.messageResult) {
      $scope.messageResult = false;
      console.log("AFTER SAVE MESSAGE");

      SocketService.on("messageResponse", (message) => {

        if (localStorage.getItem('loginId') == message.senderId || localStorage.getItem('receiverId') == message.receiverId) {

          if ($scope.allMessage == undefined) {
            $scope.allMessage = message
            console.log('$scope.allMessage is undefined');

          } else {
            console.log('$scope.allMessage is found');
            $scope.allMessage.push(message)
          }

        }

      })

      // $scope.allMessage.push(sendObject)
    }
  }catch(e)
  {
    console.log(e)
  }
  }


  // to remove item after logout
  $scope.logout=function(){
    localStorage.removeItem('token')
    localStorage.removeItem('receiverName')
    localStorage.removeItem('loginId')
    localStorage.removeItem('loginName')
}
});
