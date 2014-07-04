'use strict';

// Spends controller
angular.module('spends').controller('SpendsController', ['$scope', '$stateParams', '$location', 'Authentication', 'Spends',
	function($scope, $stateParams, $location, Authentication, Spends ) {
		$scope.authentication = Authentication;

		// Create new Spend
		$scope.create = function() {
			// Create new Spend object
			var spend = new Spends ({
				name: this.name,
				cost: this.cost
			});

			// Redirect after save
			spend.$save(function(response) {
				$location.path('spends/' + response._id);
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});

			// Clear form fields
			this.name = '';
			this.cost = '';
		};

		// Remove existing Spend
		$scope.remove = function( spend ) {
			if ( spend ) { spend.$remove();

				for (var i in $scope.spends ) {
					if ($scope.spends [i] === spend ) {
						$scope.spends.splice(i, 1);
					}
				}
			} else {
				$scope.spend.$remove(function() {
					$location.path('spends');
				});
			}
		};

		// Update existing Spend
		$scope.update = function() {
			var spend = $scope.spend ;
			var cost = $scope.cost ;

			spend.$update(function() {
				$location.path('spends/' + spend._id);
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Find a list of Spends
		$scope.find = function() {
			$scope.spends = Spends.query();
		};

		// Find existing Spend
		$scope.findOne = function() {
			$scope.spend = Spends.get({
				spendId: $stateParams.spendId
			});
		};

		$scope.getTotal = function(){
    var total = 0;
    for(var i = 0; i < $scope.spends.length; i++){
        var spend = $scope.spends[i];
				console.log(spend);
        total += spend.cost;
    }
    return total;
};
	}
]);
