angular.module('starter.controllers')

.controller('CollectCtrl', function($scope, $http) {

      $scope.result = "";

      $scope.openBox = function() {
        /*$http({
          method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
          data: { access_token: "54dd1403b4c0337bbac2182869a960b7d3acf3f5" },
          url: 'https://api.particle.io/v1/devices/54ff70066672524850431867/open'
        }).then(function successCallback(response) {
          $scope.result = "suuuuuu";
        }, function errorCallback(response) {
          $scope.result = "sa liao un monton";
        });*/
        data = {
          access_token: '54dd1403b4c0337bbac2182869a960b7d3acf3f5'
        };
        config = {
          headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Bearer 54dd1403b4c0337bbac2182869a960b7d3acf3f5'
            }
        };
        $http.post('https://api.particle.io/v1/devices/54ff70066672524850431867/open', data,config).then(function successCallback(response) {
          //$scope.result = "suuuuuu";
        }, function errorCallback(response) {});

      }


})