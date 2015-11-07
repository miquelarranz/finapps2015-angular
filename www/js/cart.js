angular.module('starter.controllers')

.controller('CartCtrl', function($scope, Cart, Products, Shops) {

	$scope.products = Cart.all();
	$scope.total;

	$scope.removeProductToCart = function(product) {
		Cart.remove(product);
		$scope.getTotal();
	}

	$scope.addProductToCart = function(product) {
		Cart.add(product);
		$scope.getTotal();
  	}

  	$scope.getTotal = function() {
  		$scope.total = 0;
  		for (var i = $scope.products.length - 1; i >= 0; i--) {
  			$scope.total += $scope.products[i].price * $scope.products[i].quantity;
  		};
  		//$scope.$apply();
  	}

  	$scope.timeGo = function() {
  		$state.go('time');
  	}

  	$scope.getTotal();
})