
app.service('chatService', function ($http, $location) {
    this.chatServiceUser = function ($scope) {
    let loginUserToken=localStorage.getItem('token')
if(loginUserToken){


        $http(
            {
                method: 'GET',
                url: 'http://localhost:4000/getUserData'

            }).then(
                function (response) {
                    $scope.getUserData = response.data
                    $scope.loginUser=localStorage.getItem('loginId')
                    
                    console.log($scope.getUserData);


                }).catch(function (error) {
                    console.log("failed")
                });
    }
    }

    /***GET MESSAGE****/

    this.getMessageUser = function ($scope) {
        $http(
            {
                method: 'GET',
                url: 'http://localhost:4000/getChatDetails'

            })
            .then(
                function (response) {
                    console.log("added successfully");

                    // $scope.getMessage=response.data
                    console.log("-----> in then chat service", $scope.getMessage);
                    let messageList = response.data
                    let message = []


                    let loginId = localStorage.getItem("loginId");
                    let receiverId = localStorage.getItem('receiverId')

                    //  $scope.receiverId = x.loginId;
                    //  $scope.receiverId = x.recieverId;
                    //  console.log("login id",loginId)
                    //  console.log("receiver id",receiverId);


                    for (let i = 0; i < messageList.length; i++) {

                        /** separate all message and stored on scope */
                        if ((loginId == messageList[i].senderId && receiverId == messageList[i].recieverId) ||
                            (loginId == messageList[i].recieverId && receiverId == messageList[i].senderId)) {
                            console.log("in if data")
                            message.push(messageList[i])

                            //  $scope.currentuser=localStorage.getItem('loginName')
                        } else {
                            console.log("no match found");
                        }
                    }

                    console.log("separeted data", message);


                    $scope.allMessage = message;

                }).catch(function (error) {
                    console.log("failed")
                });
    }
});