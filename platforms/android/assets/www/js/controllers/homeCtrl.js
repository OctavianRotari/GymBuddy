gymBuddy.controller('homeCtrl',
                    function($scope,
                      $state,
                      $firebaseObject,
                      profileData,
                      buddylist,
                      $location,
                      $ionicModal) {


$scope.buddy = buddylist.all();


$scope.buddyData = {};

// Create the login modal that we will use later
$ionicModal.fromTemplateUrl('templates/findbuddy-modal.html', {
  scope: $scope
}).then(function(modal) {
  $scope.modal = modal;
});

// Triggered in the login modal to close it
$scope.findBuddyClose = function() {
  $scope.modal.hide();
};

// Open the login modal
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


//
// // var getData = function(){
// //   profileData.getData().then(function(thing) {
// //     $scope.data = thing
// //   });
// // };
// //
// // getData();
//
//   // $scope.goTo = function(input) {
//   //   $scope.go('app.input')
//   // }
//
//
});
