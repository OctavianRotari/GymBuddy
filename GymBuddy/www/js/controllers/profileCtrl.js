gymBuddyApp.controller('ProfileCtrl', function($scope, $state) {
  var ref = new Firebase("https//luminous-torch-8195.firebaseio.com/users");

  $scope.signOut = function() {
    ref.unauth();
    $state.go('sign-in');
  };
})
