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
    var ref = new Firebase("https//luminous-torch-8195.firebaseio.com/users");
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
    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
  };


  $scope.chats = function(){
    var ref = new Firebase("https//luminous-torch-8195.firebaseio.com/users");
    var user = ref.getAuth().uid;
    var refUser = new Firebase("https//luminous-torch-8195.firebaseio.com/users/" + user);
    refUser.child('chats').child("0").set({
      userUid: "facebook:139926089709406",
    });
    refUser.child('chats').child("1").set({
      userUid: "facebook:10153151955407443"
    });
    refUser.child('chats').child("2").set({
      userUid: "facebook:1679733605635243"
    });
    $state.go("app.chatlist");
  };
}]);
