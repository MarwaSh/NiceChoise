app.controller("clockController", function($scope, $http) {
    var self = this;

debugger;
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

        clock.setTime(220880);
        clock.setCountdown(true);
        clock.start();

    });

})