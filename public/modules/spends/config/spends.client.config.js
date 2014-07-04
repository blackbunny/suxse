'use strict';

// Configuring the Articles module
angular.module('spends').run(['Menus',
	function(Menus) {
		// Set top bar menu items
		Menus.addMenuItem('topbar', 'Spends', 'spends', 'dropdown', '/spends(/create)?');
		Menus.addSubMenuItem('topbar', 'spends', 'List Spends', 'spends');
		Menus.addSubMenuItem('topbar', 'spends', 'New Spend', 'spends/create');
	}
]);