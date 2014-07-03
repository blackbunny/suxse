'use strict';

module.exports = {
	db: process.env.MONGOHQ_URL || process.env.MONGOLAB_URI || 'mongodb://localhost/letsflyto',
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
		clientID: process.env.FACEBOOK_ID || '541539029285192',
		clientSecret: process.env.FACEBOOK_SECRET || 'f4638be7762d513d033a2d74f305aa9a',
		callbackURL: 'http://localhost:3000/auth/facebook/callback'
	},
	twitter: {
		clientID: process.env.TWITTER_KEY || 'qx072CF50YJt6D2iVmuLZ8nfX',
		clientSecret: process.env.TWITTER_SECRET || 'PkqKnVewe8kULznjouYW2HNPxHq7qdVsxWtvdWSFj7DlRDbZeK',
		callbackURL: 'http://localhost:3000/auth/twitter/callback'
	},
	google: {
		clientID: process.env.GOOGLE_ID || '1061241536422-lq10ppt1ou48lcmd6r5kp1efer7s0ho4.apps.googleusercontent.com',
		clientSecret: process.env.GOOGLE_SECRET || 'P442zZQ-Ww6Oqz7Wta9ku6Db',
		callbackURL: 'http://localhost:3000/auth/google/callback'
	},
	linkedin: {
		clientID: process.env.LINKEDIN_ID || '91598a91-7a7e-4f55-8167-7f84b3d09aed',
		clientSecret: process.env.LINKEDIN_SECRET || 'c4b7c27c-de4b-4321-8420-ece30cc1ddac',
		callbackURL: 'http://localhost:3000/auth/linkedin/callback'
	}
};
