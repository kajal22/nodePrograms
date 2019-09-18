app.controller("registrationCtrl", function ($scope, registerService) {

    console.log("in to registration controller .... ");
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
    $scope.registration = function () {

        let registrationData = {
            'firstName': $scope.firstName,
            'lastName': $scope.lastName,
            'email': $scope.email,
            'password': $scope.password
        }
        console.log("registration data", registrationData);

        registerService.registerServicesUser(registrationData, $scope);
    }


})