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
        var url = '/air-condition/votes';
        var data = {
                mode: $scope.mode,
                temperature: $scope.temperature
        };
        var config = {
            headers : {
                'Content-Type': 'application/json'
            }
        };

        $http.post(url, data, config).then(function (response) {
            alert(response);
        });
    }

});