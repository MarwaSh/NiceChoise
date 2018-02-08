app.controller("clockController", function($scope, $http) {
    var self = this;

    $(document).ready(function() {
        var clock;

        clock = $('.clock').FlipClock({
            clockFace: 'DailyCounter',
            autoStart: false,
            callbacks: {
                stop: function() {
                    $('.message').html('The clock has stopped!')
                    var url = "/" + $scope.topic + "/votes/"; //todo: ask Lior...
                    // TODO: get results from server according to topic
                    $http.get(url).success(function(response) {
                        alert('the result for ' + $scope.topic + " is: " + response.data);
                    }).error(function(response) {
                        console.log("fail to get the result from the server");
                    });
                }
            }
        });

        clock.setTime(self.startTime);
        clock.setCountdown(true);
        clock.start();

    });

})