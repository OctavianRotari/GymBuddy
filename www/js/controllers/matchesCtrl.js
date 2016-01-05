angular.module('gymBuddy.controllers')
.controller('matchesCtrl', function($scope, $stateParams, buddylist) {
  $scope.matches = buddylist.get($stateParams.buddyId);
})
