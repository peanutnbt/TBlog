const ideaModel = require('./idea.model');
var service = {};

service.createIdea = async function(dataIdea) {
	var result;
	var newIdea = new ideaModel();
	Object.assign(newIdea, dataIdea);

	await newIdea.save().then(idea => {
		result = {
			'newIdea': idea,
			'message': 'create successfuly'
		};
	}).catch(err => {
		next(err)
		// middlewareCommon.error(req, res, next, errorConfigs.SERVER_EXCEPTION);
	})

	return result;
}

service.getNLastIdeas = async function(numberOfIdea){
	var result;
	try{
		await ideaModel.find({})
		.sort({_id:-1})
		.limit(numberOfIdea)
		.then(ideas => {
			result = ideas
			}
		)
	}
	catch(err){
		throw err
	}
	
	return result
}

service.getAllIdeas = async function(recordNumber){
	var result;
	try{
		await ideaModel.find({})
		.then(ideas => {
			result = ideas
			}
		)
	}
	catch(err){
		throw err
	}
	
	return result
}

service.getCount = async()=>{
	var result;
	try {
		await ideaModel.count()
		.then(count => {
			result = count
		})
	} catch (error) {
		throw err
	}
	return result
}

// service.getIdeaRandom = async function(randomNumber){
// 	var result;
// 	try{
// 		await ideaModel.findOne()
// 		.skip(randomNumber)
// 		.then(idea => {
// 			result = idea
// 			}
// 		)
// 	}
// 	catch(err){
// 		throw err
// 	}
	
// 	return result
// }


module.exports = service;