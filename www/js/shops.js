angular.module('starter.controllers')

    .controller('ShopsCtrl', function($scope, Shops) {
      $scope.shops = Shops.all();
    })