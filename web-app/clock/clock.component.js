angular.
module('niceChoice').
component('clock', {
    templateUrl: 'clock/daily-counter-countdown.html',
    controller: 'clockController',
    bindings: {
        startTime: '=',
    },
});