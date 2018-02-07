'use strict';

angular.
  module('niceChoice').
  config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/', {
          templateUrl: './AirCondition/airCondition.template.html',
          controller: './AirCondition/airCondition.controller'
        }).
        when('/:airCondition', {
          templateUrl: './AirCondition/airCondition.template.html',
          controller: './AirCondition/airCondition.controller'
        }).
        otherwise('/');
    }
  ]);
