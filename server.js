var express = require('express');
var app = express();

var port = process.env.PORT || 8080;
var routes = require('node/js/routing');

app.use(express.static(__dirname));
app.use('/', routes);

app.listen(port, function(){
	console.log("started" + port);
});