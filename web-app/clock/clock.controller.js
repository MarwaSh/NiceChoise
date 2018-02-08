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
                }
            }
        });

        clock.setTime(self.startTime);
        clock.setCountdown(true);
        clock.start();

    });

})