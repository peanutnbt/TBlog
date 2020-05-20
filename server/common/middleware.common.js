// route middleware to ensure user is logged in
const errorConfigs = require('../configs/error.configs');
var common = {};

common.error = function(req, res, next, error) {
	res.status(200);
	next({
		code: error.code,
		message: error.message,
	});
}
module.exports = common;