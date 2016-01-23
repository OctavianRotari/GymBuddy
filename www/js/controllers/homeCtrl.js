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


  var ref = new Firebase(firebaseUrl + 'users' );
  var user = ref.getAuth().uid;
  var refUser = new Firebase(firebaseUrl + "users/" + user);

  var getData = function(){
    profileData.getData().then(function(thing) {
      $scope.data = thing
    });
  };

  getData();

  refUser.on('child_changed', function(childSnapshot, prevChildKey) {
    getData();
  });

  var listOfUsers = $firebaseObject(ref);

  $scope.peopleBuddy;

  listOfUsers.$bindTo($scope,"peeps");
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
    var people = listOfUsers;
    people.forEach(function(bud){
      if(bud.gym == $rootScope.data.gym){
        match.push(bud);
      }
    });
    $scope.peopleBuddy = match;
  }

  $scope.saveMatches


  $scope.doFindBuddy = function() {
    $scope.matchUser();
    $state.go('app.matches')
    $ionicLoading.show({
      content: 'Loading',
      animation: 'fade-in',
      showBackdrop: true,
      maxWidth: 200,
      showDelay: 0
    });

    $timeout(function() {
      $ionicLoading.hide();
      $scope.findBuddyClose()
    }, 1000);
  };


  $scope.chats = function(){
    var ref = new Firebase("https//luminous-torch-8195.firebaseio.com/users");
    var user = ref.getAuth().uid;
    var refUser = new Firebase("https//luminous-torch-8195.firebaseio.com/users/" + user);
    $state.go("app.chatlist");
  };
}]);
