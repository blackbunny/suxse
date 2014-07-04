'use strict';

module.exports = {
	db: process.env.MONGOHQ_URL || process.env.MONGOLAB_URI || 'mongodb://localhost/suxse',
	assets: {
		lib: {
			css: [
				'public/lib/bootstrap/dist/css/bootstrap.min.css',
				'public/lib/bootstrap/dist/css/bootstrap-theme.min.css',
			],
			js: [
				'public/lib/angular/angular.min.js',
				'public/lib/angular-resource/angular-resource.min.js',
				'public/lib/angular-animate/angular-animate.min.js',
				'public/lib/angular-ui-router/release/angular-ui-router.min.js',
				'public/lib/angular-ui-utils/ui-utils.min.js',
				'public/lib/angular-bootstrap/ui-bootstrap-tpls.min.js'
			]
		},
		css: 'public/dist/application.min.css',
		js: 'public/dist/application.min.js'
	},
	facebook: {
		clientID: process.env.FACEBOOK_ID || '711674055562675',
		clientSecret: process.env.FACEBOOK_SECRET || 'b78d810c3d64ecaad4b8dbaec69f58fe',
		callbackURL: 'http://www.suxse.com/auth/facebook/callback'
	},
	twitter: {
		clientID: process.env.TWITTER_KEY || '17uTyTPZtrRtyvbWfS8RxRWX7',
		clientSecret: process.env.TWITTER_SECRET || '91TF7wWrDHrYw3YfFQfdM2Ozz8UWtVipUztLBLlQ9lmLzTiuBy',
		callbackURL: 'http://www.suxse.com/auth/twitter/callback'
	},
	google: {
		clientID: process.env.GOOGLE_ID || '56355999030-7adltda7s27ef4ddc93mvadul9u87d6r.apps.googleusercontent.com',
		clientSecret: process.env.GOOGLE_SECRET || 'XApEjXLYBxXkZaSMVPmSLLKB',
		callbackURL: 'http://www.suxse.com/auth/facebook/callback'
	},
	linkedin: {
		clientID: process.env.LINKEDIN_ID || '75y6fdfulfraek',
		clientSecret: process.env.LINKEDIN_SECRET || 'Mm4pGvEnZQ5xxecw',
		callbackURL: 'http://www.suxse.com/auth/linkedin/callback'
	}
};
