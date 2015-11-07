angular.module('starter.controllers')

.controller('ProductsCtrl', function($scope, $stateParams, Shops, Products) {

	var shopId = $stateParams.shopId;
  	$scope.shop = Shops.get(shopId);
  	$scope.products = Products.get(shopId);

  	//$scope.$apply();
})