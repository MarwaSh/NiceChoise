var express = require('express');
var router  = express.Router();
var lunchController = require('./controllers/lunchController');
var airConditionController = require('./controllers/airConditionController');

router.get('/', function (req, res) {
    res.sendFile(__dirname + '/web-app/index.html');
});

router.get('/lunch/options', lunchController.getLunchOptions);
router.post('/air-condition/votes', airConditionController.addNewVote);
router.get('/air-condition/votes/', airConditionController.getDesiredAirConds);

module.exports = router;