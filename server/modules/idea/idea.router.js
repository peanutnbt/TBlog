var express = require('express');
var router = express.Router();
const controller = require('./idea.controller');


router.get('/', controller.getNLastIdeas, function(req, res, next) {
	var ideas = res.locals.allIdeas;
	// var temp =  ideas[10]?.content || "dm";
	// next({status: 404, message: 'dm'})
	res.render("index",{ideas: ideas});
});
router.post('/', controller.createIdea, function(req, res, next) {
	res.redirect("/")
});

module.exports = router;