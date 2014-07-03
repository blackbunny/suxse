'use strict';

module.exports = {
	db: 'mongodb://localhost/mean-test',
	port: 3001,
	app: {
		title: 'Atlasam Gitsem'
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
