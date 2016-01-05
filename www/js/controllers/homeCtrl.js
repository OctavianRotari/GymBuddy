gymBuddy.controller('homeCtrl', ["$scope",
                                    "$state",
                                    "$firebaseObject",
                                    "profileData",
                                    "buddylist",
                                    "$location",
                                    "$ionicModal",
                                    function($scope,
                                             $state,
                                             $firebaseObject,
                                             profileData,
                                             buddylist,
                                             $location,
                                             $ionicModal) {
// $scope.buddy = BuddyList.all();

  var getData = function(){
    profileData.getData().then(function(thing) {
      $scope.data = thing
    });
  };

  getData();
  $scope.buddy = buddylist.all();
  $scope.buddyData = {};

  $ionicModal.fromTemplateUrl('templates/findbuddy-modal.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  $scope.findBuddyClose = function() {
    $scope.modal.hide();
  };

  $scope.findBuddy = function() {
    $scope.modal.show();
  };


  $scope.doFindBuddy = function() {
    console.log('GO BUDDY GO', $scope.buddyData);
    $state.go('app.newbuddies')
    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    // $timeout(function() {
    //   $scope.closeLogin();
    // }, 1000);
  };

}]);
