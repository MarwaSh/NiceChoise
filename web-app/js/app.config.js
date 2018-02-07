'use strict';

angular.
  module('niceChoice').
  config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/', {
          template: '<phone-list></phone-list>'
        }).
        when('/:topicId', {
          template: '<phone-detail></phone-detail>'
        }).
        otherwise('/');
    }
  ]);
