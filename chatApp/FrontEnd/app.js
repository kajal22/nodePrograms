let app = angular.module('chatApp', ['ui.router','btford.socket-io']);

app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    console.log(" in app .js ");



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
        .state('resetPassword', {
            url: '/resetPassword/:token',
            templateUrl: 'templates/createNewPass.html',
            controller: 'newpasswordCtrl'

        })

        .state('dashboard', {
            url: '/dashboard',
            templateUrl: 'templates/dashboard.html',
            controller: 'chatControl'
        })   
    $urlRouterProvider.otherwise('/login');

    /******/

}])

app.service('SocketService', ['socketFactory', function SocketService(socketFactory) {
    return socketFactory({
    ioSocket: io.connect('http://localhost:4000')
    });
    }]);



    