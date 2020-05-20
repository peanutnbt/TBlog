var controller = {};
const ideaService = require('./idea.service');

controller.createIdea = async function(req, res, next) {
	var dataIdea = {};
	if(req.body.content == "" ||  req.body.content.trim() == ""){
		return next({status:500, message: "Idea content cannot be blank"});
	}
	else{
		dataIdea.content = req.body.content;
	}
	
	try{
		var processCreateIdea = ideaService.createIdea(dataIdea);
		res.locals.createIdea = await  processCreateIdea;
		next();
	}catch(error){
		next(error);
	}
}
controller.getNLastIdeas = async function(req, res, next) {
	var numberOfIdea = 6;
	try{
		res.locals.allIdeas = await ideaService.getNLastIdeas(numberOfIdea);
		next();
	}catch(error){
		next(error);
	}
}
controller.getAllIdeas = async function(req, res, next) {
	try{
		res.locals.allIdeas = await ideaService.getAllIdeas();
		next();
	}catch(error){
		next(error);
	}
}


// controller.getIdeaRandom = async function(req, res, next) {
// 	try{
// 		res.locals.count = await ideaService.getCount();
// 		var random = Math.floor(Math.random() * res.locals.count)
// 		res.locals.idea = await ideaService.getIdeaRandom(random);
// 		next();
// 	}catch(error){
// 		next(error);
// 	}
// }

 
module.exports = controller;