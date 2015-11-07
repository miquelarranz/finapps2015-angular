angular.module('starter.controllers')

.controller('TimeCtrl', function($rootScope, $scope, $state) {

        $scope.time = new Date();
        $scope.hour = 0;
        $scope.minutes = 0;
        $scope.seconds = 0;

      $scope.ok = function() {
        $rootScope.time = $scope.time;
        $rootScope.hour = $scope.hour;
        $rootScope.minutes = $scope.minutes;
        $rootScope.seconds = $scope.seconds;
        $state.go("payment");
      }

})