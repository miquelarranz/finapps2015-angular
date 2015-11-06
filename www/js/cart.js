angular.module('starter.controllers', [])

.controller('CartCtrl', function($scope) {

  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})