


app.controller('controlLogin', function ($scope, serviceLogin) {


     //for email validation
    $scope.emailValidation = function (email) {
        let pattern = /^([a-zA-Z0-9_\.])+\@(([gmail\yahoo\hotmail\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        let res = email.match(pattern);
        if (res) {
            $scope.emailVal = false;
        }
        else {
            $scope.emailVal = true;
        }
    }

    $scope.login = function () {
        var data = {
            'email': $scope.email,
            'password': $scope.password
        }
        console.log("data", data)


        serviceLogin.login(data, $scope);

    }

});