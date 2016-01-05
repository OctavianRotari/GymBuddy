angular.module('gymBuddy.controllers')
.controller('buddyListCtrl', function($scope, buddylist) {

  $scope.buddies = buddylist.all();
  $scope.remove = function(chat) {
    buddylist.remove(chat);
  };
})
