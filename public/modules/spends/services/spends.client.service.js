'use strict';

//Spends service used to communicate Spends REST endpoints
angular.module('spends').factory('Spends', ['$resource',
	function($resource) {
		return $resource('spends/:spendId', { spendId: '@_id'
		}, {
			update: {
				method: 'PUT'
			}
		});
	}
]);