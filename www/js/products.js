angular.module('starter.controllers')

.controller('ProductsCtrl', function($rootScope, $scope, $stateParams, $state, Shops, Products, Cart) {

	var shopId = $stateParams.shopId;
  	$scope.shop = Shops.get(shopId);
  	$scope.products = Products.get(shopId);
  	$scope.items = Cart.getItems();
  	if ($scope.items == 0) {
  		$scope.items = null;
  	}

  	$scope.addProductToCart = function(shopId, prodId) {
  		var prod = Products.getProduct(shopId, prodId);
  		Cart.add(prod);
  		$scope.items = Cart.getItems();
  	}

  	$scope.goToCart = function() {
  		$state.go('cart');
  	}

  	$rootScope.$on('$stateChangeStart', 
  		function(event, toState, toParams, fromState, fromParams){
  	    	if (toState.name == 'shop-products') {
  	    		$scope.items = Cart.getItems();
  	    		if ($scope.items == 0) {
  	    			$scope.items = null;
  	    		}
  	    	}
  	});

})