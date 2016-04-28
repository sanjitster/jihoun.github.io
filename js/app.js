'use strict';
/* global angular */
(function () {
    //declare the module
    angular.module('giift-developer', ['ngRoute'])
        .config(function ($routeProvider) {
            $routeProvider
                .when('/', {
                    templateUrl: 'templates/index.html',
                    // controller: 'SigninController',
                    // controllerAs: 'signinCtrl'
                })
                .when('/:product', {
                    templateUrl: 'templates/coming_soon.html',
                    // controller: 'SigninController',
                    // controllerAs: 'signinCtrl'
                })
                .when('/:product/:platform', {
                    templateUrl: 'templates/coming_soon.html',
                })
                .when('/:product/:platform/:tab', {
                    templateUrl: 'templates/coming_soon.html',
                })
                .when('/:product/:platform/:tab/:article', {
                    templateUrl: 'templates/coming_soon.html',
                })
                .otherwise({ redirectTo:'/coming_soon'});
        });
})();