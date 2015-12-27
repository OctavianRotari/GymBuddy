gymBuddyApp.controller('ChatDetailCtrl', function($scope, $stateParams, BuddyList) {
  $scope.buddy = BuddyList.get($stateParams.buddyId);
})
