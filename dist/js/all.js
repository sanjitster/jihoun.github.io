'use strict';
/* global angular */

(function () {
    //declare the module
    angular.module('giift-developer', ['ngRoute']).config(function ($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'templates/index.html'
        }). // controller: 'SigninController',
        // controllerAs: 'signinCtrl'
        when('/404', {
            templateUrl: 'templates/404.html'
        }).when('/:product', {
            templateUrl: 'templates/index.html'
        }). // controller: 'SigninController',
        // controllerAs: 'signinCtrl'
        when('/:product/:platform', {
            templateUrl: 'templates/index.html'
        }).when('/:product/:platform/:tab', {
            templateUrl: 'templates/index.html'
        }).when('/:product/:platform/:tab/:article', {
            templateUrl: 'templates/index.html'
        }).otherwise({ redirectTo: '/404' });
    });
})();