gymBuddyApp.controller('LogInCtrl', function($scope, $state) {
  $scope.data = {firstName:null, lastName:null,email:null,password:null,confirmationPassword:null};
  var ref = new Firebase("https//luminous-torch-8195.firebaseio.com/users");
  var check = 0;

  $scope.signUp = function(){
    ref.createUser({
        email:  $scope.data.email,
        password:  $scope.data.password,
    },

    function(error, userData){
      if(error){
        switch(error.code){
          case "EMAIL_TAKEN":
            console.log("The new user account cannot be created because the email is already in use.");
            break;
          case "INVALID_EMAIL":
            console.log("The specified email is not a valid email.");
            break;
          default:
            console.log("Error creating user:", error);
        }
      } else {
        ref.push({
          firstName: $scope.data.firstName,
          lastName:  $scope.data.lastName,
          email:  $scope.data.email,
        });
        console.log("Successfully created user account with uid", userData.uid);
        $state.go('tab.dash');
      }
    })
  };

  $scope.login = function(){
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
