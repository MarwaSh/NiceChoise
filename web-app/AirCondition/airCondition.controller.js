app.controller("airConditionController", function($scope, $http) {
    var self = this;
    $scope.currTemperature = 25;
    $scope.temperature = 16;
    $scope.mode = 'cool';

    $scope.decreaseTemperature = function () {
        if($scope.temperature > 16) {
            $scope.temperature--;
        } else {
            alert("You can't choose temprature less then 16 degrees, it is too cold!");
        }
    };

    $scope.raiseTemperature = function () {
        if($scope.temperature < 30) {
            $scope.temperature++;
        }else {
            alert("You can't choose temprature higher then 30 degrees, it is too hot!");
        }
    };

    $scope.vote = function () {
        alert($scope.mode);
    }
});



// angular.module('niceChoice')
//     .controller('airConditionController', airConditionController);
// function airConditionController($scope) {
//     var self = this;
//     ctrl.temperature = 25;
//
//     ctrl.decreaseTemperature = function () {
//         ctrl.temperature--;
//     };
//
//     ctrl.raiseTemperature = function () {
//         ctrl.temperature++;
//     };
// }
