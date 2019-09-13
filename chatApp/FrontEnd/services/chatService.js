
app.service('chatService', function($http,$location) 
{
    this.chatServiceUser=function($scope)
     {

      
        
        $http(
            {
                method: 'GET',
                url: 'http://localhost:4000/getUserData'
               
            }).then(
                function (response) {
                    $scope.getUserData=response.data
                    console.log($scope.getUserData);
                   
       
                }).catch(function(error) {
                    console.log("failed")
                });
    }


/***GET MESSAGE****/

    this.getMessageUser=function($scope)
     {

        console.log("into chat MSG service !");
        
        $http(
            {
                method: 'GET',
                url: 'http://localhost:4000/getChatDetails'
               
            })
            .then(
                function (response) {
                    console.log("added successfully");
               
                    $scope.getMessage=response.data
                    console.log($scope.getMessage);
                   
       
            }).catch(function(error) {
                    console.log("failed")
                });
    }
});