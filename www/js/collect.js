angular.module('starter.controllers')

.controller('CollectCtrl', function($scope, $http) {

      $scope.result = "";

      $scope.openBox = function() {
        $http({
          method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
          data: { access_token: "b1fd7e4418ce042a1779d1c3dd9fcc56f1831a64" },
          url: 'https://api.particle.io/v1/devices/54ff70066672524850431867/open'
        }).then(function successCallback(response) {
          $scope.result = "suuuuuu";
        }, function errorCallback(response) {
          $scope.result = "sa liao un monton";
        });
      }

})