gymBuddyApp.controller('LogInCtrl', function($scope, $state) {


  $scope.login = function(){
    var ref = new Firebase("https//luminous-torch-8195.firebaseio.com/users");
    ref.authWithOAuthPopup("facebook", function(error, authData) {
      if (error) {
        console.log("Login Failed!", error);
      } else {
        usersRef.set({
          firstName: authData.facebook.cachedUserProfile.first_name,
          lastName: authData.facebook.cachedUserProfile.last_name,
          gender: authData.facebook.cachedUserProfile.gender,
          image: authData.facebook.profileImageURL
        });
        console.log("Authenticated successfully with payload:", authData.facebook);
        $state.go('tab.dash');
      }
    });
  };

});
