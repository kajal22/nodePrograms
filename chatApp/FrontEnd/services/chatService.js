
app.service('chatService', function($http,$location) 
{
    this.chatServiceUser=function($scope)
     {

        console.log("into chat service !");
        
        $http(
            {
                method: 'GET',
                url: 'http://localhost:4000/getUserData'
               
            }).then(
                function (response) {
                    console.log("added successfully");
               
                    $scope.getUserData=response.data
                    console.log($scope.getUserData);
                   
       
                }).catch(function(error) {
                    console.log("failed")
                });
    }
});