

app.service('serviceLogin', function ($http, $location) {
    this.login = function (data, $scope) {
        console.log(" login client service called");

        console.log("data on login service---", data);
        $http
            ({
                method: 'POST',
                url: 'http://13.59.67.17:4000/login',
                data: data

            }).then(function (response) {

                if (response.data.content == false) {
                    console.log("login failed");
                    console.log(response);
                    alert("Login failed !!")
                }
                else {

                    //token,firstname and id stored locally which is created in model of loginobject newone
                    localStorage.setItem('token', response.data.content.token)
                    localStorage.setItem('loginId', response.data.content.userId)
                    localStorage.setItem('loginName', response.data.content.name)

                    console.log("login successfully");
                    console.log(response);
                    alert("login done Successfully...")

                    $location.path('/dashboard');

                }
            }).catch(function (error) {
                $scope.registration = function () {
                    alert("login failed...")
                }
                console.log("login failed..in catch", error)
            });

    }



});
