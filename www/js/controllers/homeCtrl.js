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
                                    "$rootScope",
                                    function($scope,
                                             $state,
                                             $firebaseObject,
                                             profileData,
                                             buddylist,
                                             $location,
                                             $ionicModal,
                                             $ionicPopup,
                                             $timeout,
                                             $ionicLoading,
                                             $rootScope) {

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
  $scope.matchUser = function(){
    var match = []
    var people = buddylist.all();
    people.forEach(function(bud){
      if(bud.gym == $rootScope.data.gym){
        match.push(bud);
      }
    });
    console.log(match);
  }

  $scope.doFindBuddy = function() {
    $scope.matchUser();
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

    // Setup the loader


    // // Set a timeout to clear loader, however you would actually call the $ionicLoading.hide(); method whenever everything is ready or loaded.
    // $timeout(function () {
    //   $ionicLoading.hide();
    //   // $scope.stooges = [{name: 'Moe'}, {name: 'Larry'}, {name: 'Curly'}];
    // }, 2000);

  //
  // // for the popups
  // $scope.showPopup = function() {
  //   $scope.data = {}
  //
  //   // An elaborate, custom popup
  //   var myPopup = $ionicPopup.show({
  //     template: '<input type="password" ng-model="data.wifi">',
  //     title: 'Enter Wi-Fi Password',
  //     subTitle: 'Please use normal things',
  //     scope: $scope,
  //     buttons: [
  //       { text: 'Cancel' },
  //       {
  //         text: '<b>Save</b>',
  //         type: 'button-positive',
  //         onTap: function(e) {
  //           if (!$scope.data.wifi) {
  //             //don't allow the user to close unless he enters wifi password
  //             e.preventDefault();
  //           } else {
  //             return $scope.data.wifi;
  //           }
  //         }
  //       },
  //     ]
  //   });
  //   myPopup.then(function(res) {
  //     console.log('Tapped!', res);
  //   });
  //   $timeout(function() {
  //      myPopup.close(); //close the popup after 3 seconds for some reason
  //   }, 3000);
  //  };

}]);
