app.controller('newpasswordCtrl', function ($scope, $stateParams, newpasswordService) {

    console.log("newpassword control called");

    console.log("token" + $stateParams.token)

    $scope.resetPassword = function () {
        let newpasswordData = {
            'password': $scope.password,
            'token': $stateParams.token

        }
        console.log("newpassword data", newpasswordData);

        newpasswordService.newpasswordServiceUser(newpasswordData, $scope)
    }




})