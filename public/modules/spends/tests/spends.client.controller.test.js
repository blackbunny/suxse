'use strict';

(function() {
	// Spends Controller Spec
	describe('Spends Controller Tests', function() {
		// Initialize global variables
		var SpendsController,
		scope,
		$httpBackend,
		$stateParams,
		$location;

		// The $resource service augments the response object with methods for updating and deleting the resource.
		// If we were to use the standard toEqual matcher, our tests would fail because the test values would not match
		// the responses exactly. To solve the problem, we define a new toEqualData Jasmine matcher.
		// When the toEqualData matcher compares two objects, it takes only object properties into
		// account and ignores methods.
		beforeEach(function() {
			jasmine.addMatchers({
				toEqualData: function(util, customEqualityTesters) {
					return {
						compare: function(actual, expected) {
							return {
								pass: angular.equals(actual, expected)
							};
						}
					};
				}
			});
		});

		// Then we can start by loading the main application module
		beforeEach(module(ApplicationConfiguration.applicationModuleName));

		// The injector ignores leading and trailing underscores here (i.e. _$httpBackend_).
		// This allows us to inject a service but then attach it to a variable
		// with the same name as the service.
		beforeEach(inject(function($controller, $rootScope, _$location_, _$stateParams_, _$httpBackend_) {
			// Set a new global scope
			scope = $rootScope.$new();

			// Point global variables to injected services
			$stateParams = _$stateParams_;
			$httpBackend = _$httpBackend_;
			$location = _$location_;

			// Initialize the Spends controller.
			SpendsController = $controller('SpendsController', {
				$scope: scope
			});
		}));

		it('$scope.find() should create an array with at least one Spend object fetched from XHR', inject(function(Spends) {
			// Create sample Spend using the Spends service
			var sampleSpend = new Spends({
				name: 'New Spend'
			});

			// Create a sample Spends array that includes the new Spend
			var sampleSpends = [sampleSpend];

			// Set GET response
			$httpBackend.expectGET('spends').respond(sampleSpends);

			// Run controller functionality
			scope.find();
			$httpBackend.flush();

			// Test scope value
			expect(scope.spends).toEqualData(sampleSpends);
		}));

		it('$scope.findOne() should create an array with one Spend object fetched from XHR using a spendId URL parameter', inject(function(Spends) {
			// Define a sample Spend object
			var sampleSpend = new Spends({
				name: 'New Spend'
			});

			// Set the URL parameter
			$stateParams.spendId = '525a8422f6d0f87f0e407a33';

			// Set GET response
			$httpBackend.expectGET(/spends\/([0-9a-fA-F]{24})$/).respond(sampleSpend);

			// Run controller functionality
			scope.findOne();
			$httpBackend.flush();

			// Test scope value
			expect(scope.spend).toEqualData(sampleSpend);
		}));

		it('$scope.create() with valid form data should send a POST request with the form input values and then locate to new object URL', inject(function(Spends) {
			// Create a sample Spend object
			var sampleSpendPostData = new Spends({
				name: 'New Spend'
			});

			// Create a sample Spend response
			var sampleSpendResponse = new Spends({
				_id: '525cf20451979dea2c000001',
				name: 'New Spend'
			});

			// Fixture mock form input values
			scope.name = 'New Spend';

			// Set POST response
			$httpBackend.expectPOST('spends', sampleSpendPostData).respond(sampleSpendResponse);

			// Run controller functionality
			scope.create();
			$httpBackend.flush();

			// Test form inputs are reset
			expect(scope.name).toEqual('');

			// Test URL redirection after the Spend was created
			expect($location.path()).toBe('/spends/' + sampleSpendResponse._id);
		}));

		it('$scope.update() should update a valid Spend', inject(function(Spends) {
			// Define a sample Spend put data
			var sampleSpendPutData = new Spends({
				_id: '525cf20451979dea2c000001',
				name: 'New Spend'
			});

			// Mock Spend in scope
			scope.spend = sampleSpendPutData;

			// Set PUT response
			$httpBackend.expectPUT(/spends\/([0-9a-fA-F]{24})$/).respond();

			// Run controller functionality
			scope.update();
			$httpBackend.flush();

			// Test URL location to new object
			expect($location.path()).toBe('/spends/' + sampleSpendPutData._id);
		}));

		it('$scope.remove() should send a DELETE request with a valid spendId and remove the Spend from the scope', inject(function(Spends) {
			// Create new Spend object
			var sampleSpend = new Spends({
				_id: '525a8422f6d0f87f0e407a33'
			});

			// Create new Spends array and include the Spend
			scope.spends = [sampleSpend];

			// Set expected DELETE response
			$httpBackend.expectDELETE(/spends\/([0-9a-fA-F]{24})$/).respond(204);

			// Run controller functionality
			scope.remove(sampleSpend);
			$httpBackend.flush();

			// Test array after successful delete
			expect(scope.spends.length).toBe(0);
		}));
	});
}());