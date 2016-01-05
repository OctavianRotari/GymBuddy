gymBuddy.controller('gymCtrl', function($scope, $stateParams, buddylist) {
  $scope.gyms = buddylist.get($stateParams.buddyId);
})
