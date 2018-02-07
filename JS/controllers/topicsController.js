var topicsList = require('../../assets/topics.json');

exports.getTopics = function (req, res) {
    res.json(topicsList);
}