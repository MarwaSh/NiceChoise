var express = require('express');
var router  = express.Router();

var topicsController = require('controllers/topicsController');

router.get("/topics", topicsController.getTopics());

module.exports = router;