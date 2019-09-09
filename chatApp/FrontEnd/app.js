let app = angular.module('chatApp', ['ui.router']);

app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    console.log(" app .js ");



    $stateProvider

        .state('login', {
            url: '/login',
            templateUrl: 'templates/login.html',
            controller: 'controlLogin'
        })

        .state('registration', {
            url: '/registration',
            templateUrl: 'templates/register.html',
            controller: 'registrationCtrl'
        })

        .state('forgetPassword', {
            url: '/forgetPassword',
            templateUrl: 'templates/forget.html',
            controller: 'forgetCtrl'

        })
        .state('newpassword', {
            url: '/newpassword',
            templateUrl: 'templates/createNewPass.html',
            controller: 'newpasswordCtrl'

        })
    $urlRouterProvider.otherwise('/login');
}])

