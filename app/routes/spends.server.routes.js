'use strict';

module.exports = function(app) {
	var users = require('../../app/controllers/users');
	var spends = require('../../app/controllers/spends');

	// Spends Routes
	app.route('/spends')
		.get(spends.list)
		.post(users.requiresLogin, spends.create);

	app.route('/spends/:spendId')
		.get(spends.read)
		.put(users.requiresLogin, spends.hasAuthorization, spends.update)
		.delete(users.requiresLogin, spends.hasAuthorization, spends.delete);

	// Finish by binding the Spend middleware
	app.param('spendId', spends.spendByID);
};