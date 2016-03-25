var router = require('express').Router();
var bodyparser = require('body-parser').json();

module.exports = function (server) {
	router.get(
		'/',
		server.actions.category.get
		);
	return router;
};