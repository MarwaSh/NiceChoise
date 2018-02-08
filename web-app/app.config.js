var app = angular.module("niceChoice", [ 'ngRoute' ]);

app.config(function($routeProvider) {
    $routeProvider.when("/", {
        templateUrl : "AirCondition/airCondition.template.html",
        controller : "airConditionController"
    }).when("/airCondition", {
        templateUrl : "AirCondition/airCondition.template.html",
        controller : "airConditionController"
    }).when("/lunch", {
        templateUrl: "Lunch/lunch.template.html"
    }).otherwise({
            redirectTo : "/"
        });
});




// 'use strict';
//
// angular.
//   module('niceChoice', ['ngRoute']).
//   config(['$locationProvider' ,'$routeProvider',
//     function config($locationProvider, $routeProvider) {
//       // $locationProvider.hashPrefix('!');
//
//       $routeProvider.
//         when('/', {
//           templateUrl: './AirCondition/airCondition.template.html',
//           controller: 'airConditionController'
//         }).
//         when('/airCondition', {
//           templateUrl: './AirCondition/airCondition.template.html',
//           controller: 'airConditionController'
//       }).
//       when('/lunch', {
//           templateUrl: './Lunch/lunch.template.html',
//           controller: 'lunchController'
//       }).
//         otherwise('/');
//     }
//   ]);
