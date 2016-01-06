angular.module('gymBuddy.controllers')
.controller('homeCtrl', ["$scope",
                                    "$state",
                                    "$firebaseObject",
                                    "profileData",
                                    "buddylist",
                                    "$location",
                                    "$ionicModal",
                                    "$ionicPopup",
                                    "$timeout",
                                    "$ionicLoading",
                                    function($scope,
                                             $state,
                                             $firebaseObject,
                                             profileData,
                                             buddylist,
                                             $location,
                                             $ionicModal,
                                             $ionicPopup,
                                             $timeout,
                                            $ionicLoading) {
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

  // $ionicLoading.show({
  //   content: 'Loading',
  //   animation: 'fade-in',
  //   showBackdrop: true,
  //   maxWidth: 200,
  //   showDelay: 0
  // });

  $scope.doFindBuddy = function() {
    console.log('GO BUDDY GO', $scope.buddyData);
    $state.go('app.matches')
    // $ionicLoading.show()
    $ionicLoading.show({
      content: 'Loading',
      animation: 'fade-in',
      showBackdrop: true,
      maxWidth: 200,
      showDelay: 0
    });

    $timeout(function() {
      // $scope.closeLogin();
      $ionicLoading.hide();
      $scope.findBuddyClose()
    }, 1000);

  };

}]);
