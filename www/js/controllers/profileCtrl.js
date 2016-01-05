gymBuddyApp.controller('ProfileCtrl',['$scope', '$state', 'profileData', function($scope, $state, profileData){

  var ref = new Firebase("https//luminous-torch-8195.firebaseio.com/users");

  $scope.getData = function(){
    profileData.getData().then(function(thing) {
      $scope.data = thing;
      console.log(thing);
    });
  };



  $scope.editProfile = function(){
    var user = ref.getAuth().uid;
    var refUser = new Firebase("https//luminous-torch-8195.firebaseio.com/users/" + user);
    refUser.update({
      age: $scope.data.age,
      username: $scope.data.username,
      typeOfTraining: $scope.data.typeOfTraining,
      gym: $scope.data.gym
    });
  };
}])
