
var lunch_options = require('../../../assets/lunch-options.json');
serverConfig = require('../../../assets/server-config.json');
var apiKey = serverConfig["google-places-api-key"];
var outputFormat = serverConfig["google-places-output-format"];
var GooglePlaces = require('../../../node_modules/googleplaces/index');
var googlePlaces = new GooglePlaces(apiKey, outputFormat);

exports.getLunchOptions = function () {
    console.log("Started performing: getLunchOptions");
    var parameters;
    for(var option in lunch_options){
        if(option["place-id"] === ""){
            console.log("searching for: " + option["title"]);
            var queryText = option["title"] +" " + option["address"];
            parameters = {
                query: queryText
            };

            googlePlaces.textSearch(parameters, function (error, res) {
                option["place-id"] = res["place_id"];
            });
        }
    }
    return function (req, res) {
        res.json(lunch_options);
    }
};

