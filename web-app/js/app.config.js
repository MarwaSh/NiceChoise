'use strict';

angular.
  module('niceChoice').
  config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/', {
          template: 'home page'
        }).
        when('/:topicId', {
          template: '<phone-detail></phone-detail>'
        }).
        otherwise('/');
    }
  ]);
