'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Spend Schema
 */
var SpendSchema = new Schema({
	name: {
		type: String,
		default: '',
		required: 'Please fill Spend name',
		trim: true
	},
  cost: {
    type: Number,
    default: '',
    required: 'Please fill Spend cost',
    trim: true
  },
	created: {
		type: Date,
		default: Date.now
	},
	user: {
		type: Schema.ObjectId,
		ref: 'User'
	}
});

mongoose.model('Spend', SpendSchema);
