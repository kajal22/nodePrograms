// app.service(" loginService", function ($http, $location) {
//     this.loginServiceUser = function (data, $scope) {
//         $http(
//             {
//                 method: 'POST',
//                 url: 'http://localhost:4001/login',
//                 data: data
//             }).then(
//                 function (response) {
//                     console.log("login successfully");
//                     console.log(response);

//                     $scope.login = function () {
//                         alert("login done Successfully...")
//                     }
//                     $location.path('/login');
//                 }).catch(function (error) {
//                     $scope.login = function () {
//                         alert("login failed...")
//                     }
//                     console.log("login failed..", error)
//                 });
//     }
// })



app.service('serviceLogin', function ($http, $location) {
    this.login = function (data, $scope) {
        console.log(" login client service called");

        console.log("data on service register---", data);
        $http({
            method: 'POST',
            url: 'http://localhost:4001/login',
            data: data,
        }).then(

            function successCallback(response) {

                console.log("login successful at servicelogin in client side");
              

            },
            function errorCallback(error) {
              
            }
        );
    }
});
