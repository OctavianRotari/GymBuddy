angular.module('gymBuddy.controllers')
.controller('chatCtrl', function($scope, $stateParams, buddylist) {
  $scope.chat = buddylist.get($stateParams.buddyId);
})