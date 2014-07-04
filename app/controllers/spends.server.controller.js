'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Spend = mongoose.model('Spend'),
	_ = require('lodash');

/**
 * Get the error message from error object
 */
var getErrorMessage = function(err) {
	var message = '';

	if (err.code) {
		switch (err.code) {
			case 11000:
			case 11001:
				message = 'Spend already exists';
				break;
			default:
				message = 'Something went wrong';
		}
	} else {
		for (var errName in err.errors) {
			if (err.errors[errName].message) message = err.errors[errName].message;
		}
	}

	return message;
};

/**
 * Create a Spend
 */
exports.create = function(req, res) {
	var spend = new Spend(req.body);
	spend.user = req.user;

	spend.save(function(err) {
		if (err) {
			return res.send(400, {
				message: getErrorMessage(err)
			});
		} else {
			res.jsonp(spend);
		}
	});
};

/**
 * Show the current Spend
 */
exports.read = function(req, res) {
	res.jsonp(req.spend);
};

/**
 * Update a Spend
 */
exports.update = function(req, res) {
	var spend = req.spend ;

	spend = _.extend(spend , req.body);

	spend.save(function(err) {
		if (err) {
			return res.send(400, {
				message: getErrorMessage(err)
			});
		} else {
			res.jsonp(spend);
		}
	});
};

/**
 * Delete an Spend
 */
exports.delete = function(req, res) {
	var spend = req.spend ;

	spend.remove(function(err) {
		if (err) {
			return res.send(400, {
				message: getErrorMessage(err)
			});
		} else {
			res.jsonp(spend);
		}
	});
};

/**
 * List of Spends
 */
exports.list = function(req, res) { Spend.find({user: req.user.id}).sort('-created').populate('user', 'displayName').exec(function(err, spends) {
		if (err) {
			return res.send(400, {
				message: getErrorMessage(err)
			});
		} else {
			res.jsonp(spends);
		}
	});
};

/**
 * Spend middleware
 */
exports.spendByID = function(req, res, next, id) { Spend.findById(id).populate('user', 'displayName').exec(function(err, spend) {
		if (err) return next(err);
		if (! spend) return next(new Error('Failed to load Spend ' + id));
		req.spend = spend ;
		next();
	});
};

/**
 * Spend authorization middleware
 */
exports.hasAuthorization = function(req, res, next) {
	if (req.spend.user.id !== req.user.id) {
		return res.send(403, 'User is not authorized');
	}
	next();
};
