'use strict';

//Setting up route
angular.module('spends').config(['$stateProvider',
	function($stateProvider) {
		// Spends state routing
		$stateProvider.
		state('listSpends', {
			url: '/spends',
			templateUrl: 'modules/spends/views/list-spends.client.view.html'
		}).
		state('createSpend', {
			url: '/spends/create',
			templateUrl: 'modules/spends/views/create-spend.client.view.html'
		}).
		state('viewSpend', {
			url: '/spends/:spendId',
			templateUrl: 'modules/spends/views/view-spend.client.view.html'
		}).
		state('editSpend', {
			url: '/spends/:spendId/edit',
			templateUrl: 'modules/spends/views/edit-spend.client.view.html'
		});
	}
]);