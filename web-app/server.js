var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var port = process.env.PORT || 8080;
var routes = require('./js/node-server/server.routing');

app.use(express.static(__dirname));
app.use(bodyParser.json());
app.use('/', routes);

app.listen(port, function(){
	console.log("started listening on: " + port);
});