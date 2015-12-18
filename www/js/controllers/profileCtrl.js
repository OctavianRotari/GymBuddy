gymBuddyApp.controller('ProfileCtrl',['$scope', '$state', 'profileData', function($scope, $state, profileData){

  var ref = new Firebase("https//luminous-torch-8195.firebaseio.com/users/-K5ozq5DXKqeFHKrAiRX");
  var authData = ref.getAuth();

  $scope.data = {firstName:null, lastName:null,email:null,gender:null,image:null, age:null, username:null, typeOfTraining:null, gym:null};

  var getData = function(){
    profileData.getData().then(function(thing) {
      $scope.data = thing
    });
  };

  $scope.editProfile = function(){
    ref.update({
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
