'use strict';

module.exports = {
	db: 'mongodb://localhost/suxse',
	app: {
		title: 'Suxse | keep your wallet'
	},
	facebook: {
		clientID: process.env.FACEBOOK_ID || '711674055562675',
		clientSecret: process.env.FACEBOOK_SECRET || 'b78d810c3d64ecaad4b8dbaec69f58fe',
		callbackURL: 'http://localhost:3000/auth/facebook/callback'
	},
	twitter: {
		clientID: process.env.TWITTER_KEY || '17uTyTPZtrRtyvbWfS8RxRWX7',
		clientSecret: process.env.TWITTER_SECRET || '91TF7wWrDHrYw3YfFQfdM2Ozz8UWtVipUztLBLlQ9lmLzTiuBy',
		callbackURL: 'http://localhost:3000/auth/twitter/callback'
	},
	google: {
		clientID: process.env.GOOGLE_ID || '56355999030-7adltda7s27ef4ddc93mvadul9u87d6r.apps.googleusercontent.com',
		clientSecret: process.env.GOOGLE_SECRET || 'XApEjXLYBxXkZaSMVPmSLLKB',
		callbackURL: 'http://localhost:3000/auth/google/callback'
	},
	linkedin: {
		clientID: process.env.LINKEDIN_ID || '75y6fdfulfraek',
		clientSecret: process.env.LINKEDIN_SECRET || 'Mm4pGvEnZQ5xxecw',
		callbackURL: 'http://localhost:3000/auth/linkedin/callback'
	}
};
