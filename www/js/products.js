angular.module('starter.controllers')

.controller('ProductsCtrl', function($scope, $stateParams, Shops, Products) {

	var shopId = $stateParams.shopId;
  	var shop = Shops.get(shopId);

  	console.log(shopId);
  	console.log(shop);

  	var products = Products.get(shopId);

  	console.log(products);
})