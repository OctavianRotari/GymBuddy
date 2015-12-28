gymBuddyApp.controller('BuddyDetailCtrl', function($scope, $stateParams, BuddyList) {
  $scope.buddy = BuddyList.get($stateParams.buddyId);
})
