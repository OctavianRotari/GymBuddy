gymBuddyApp.controller('ProfileCtrl',['$scope', '$state', 'profileData', function($scope, $state, profileData){

  var ref = new Firebase("https//luminous-torch-8195.firebaseio.com/");

  var getData = function(){
    profileData.getData().then(function(thing) {
      $scope.data = thing
    });
  };

  getData();


  $scope.editProfile = function(){
    var refUser = new Firebase("https//luminous-torch-8195.firebaseio.com/users/" + $scope.data.firebaseId);
    refUser.update({
      username: $scope.data.username,
      typeOfTraining: $scope.data.typeOfTraining,
      gym: $scope.data.gym
    });
  }

  $scope.signOut = function() {
    ref.unauth();
    $state.go('sign-in');
  };
}])
