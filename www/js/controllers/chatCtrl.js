angular.module('gymBuddy.controllers')
.controller('chatCtrl', function($scope, $stateParams, buddylist) {
  $scope.buddy = buddylist.get($stateParams.buddyId);
})
