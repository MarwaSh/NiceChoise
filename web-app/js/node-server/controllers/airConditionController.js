var votes = [];
var coolCount = 0;
var heatCount = 0;

exports.addNewVote = function (req, res) {
    var mode = req.body['mode'];
    var temp = req.body['temperature'];

    if(mode === "heat"){
        heatCount++;
    } else {
        coolCount++;
    }

    votes.push(temp);

    res.send('Your vote added successfully');
};

exports.getDesiredAirConds = function (req, res) {
   var votesCount = coolCount + heatCount;
   var sumTemps = 0;
    votes.forEach(function (vote) {
       sumTemps += vote;
    });

    console.log("sum: " +sumTemps);
    var desiredTemp = sumTemps/votesCount;
    console.log("temp: " +desiredTemp);
    var desiredMode = coolCount < heatCount ? "heat" : "cool";
    var responseBody = {
      mode : desiredMode,
        temp : desiredTemp
    };
    res.json(responseBody);
};