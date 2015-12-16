gymBuddyApp.controller('LogInCtrl', function($scope, $state) {


  $scope.login = function(){
    var ref = new Firebase("https//luminous-torch-8195.firebaseio.com/users");
    var check = 0;
    ref.authWithOAuthPopup("facebook", function(error, authData) {
      if (error) {
        console.log("Login Failed!", error);
      } else {
        ref.once('value',function(allSnapshots){
          allSnapshots.forEach(function(snapshot){
            console.log(authData.uid);
            if(authData.facebook.id === snapshot.child('id').val()) check++ ;
          });
          if(check === 0){
            ref.push({
                    id: authData.facebook.id,
                    firstName: authData.facebook.cachedUserProfile.first_name,
                    lastName: authData.facebook.cachedUserProfile.last_name,
                    gender: authData.facebook.cachedUserProfile.gender,
                    image: authData.facebook.profileImageURL
                  });
          } else {
            $state.go('tab.dash');
          }
        console.log("Authenticated successfully with payload:", authData.facebook);
        $state.go('tab.dash');
        });
      }
    });
  };
});
