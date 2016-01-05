gymBuddy.controller('buddyCtrl', function($scope, $stateParams, buddylist) {
  $scope.buddy = buddylist.get($stateParams.buddyId);
})
