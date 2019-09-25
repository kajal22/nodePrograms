app.service("registerService", function ($http, $location) {
    this.registerServicesUser = function (data, $scope) {

        console.log("into register service !");
        
        $http(
            {
                method: 'POST',
                url: 'http://13.59.67.17:4000/registration',
                data: data
            }).then(function(response)
                {
                    
                  if(response.data.success==false){
                  console.log("Registration failed");
                  console.log(response);
                  alert("Email already exist...")
                  }
                  else if(response.data.success==true){
                  console.log("registration successfully");
                  console.log(response);
                  alert("Registration done Successfully...")
                  
                       $location.path('/#/login');
              } 
                  
                
            
                  
                }).catch(function (error) {
                    $scope.registration = function () {
                        alert("Registration failed...")
                    }
                    console.log("Registration failed..", error)
                });
    }
});