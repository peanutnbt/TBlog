var express = require('express');
var router = express.Router();
const controller = require('./idea.controller');

//NEU DUNG THI KO DEN /random
// router.get('/:record',controller.getIdeaByRecord, function(req, res, next) {
//     var idea = res.locals.idea;
//     res.json({idea: idea});
// });

router.get('/', controller.getAllIdeas, function(req, res, next) {
    var ideas = res.locals.allIdeas;
	res.json({ideas: ideas});
});



router.post('/', controller.createIdea, function(req, res, next) {
    var createIdea = res.locals.createIdea
	res.json({createIdea: createIdea})
});




//get random
// router.get('/random', controller.getIdeaRandom, function(req, res, next) {
//     var idea = res.locals.idea;
// 	res.json({idea: idea});
// });

module.exports = router;