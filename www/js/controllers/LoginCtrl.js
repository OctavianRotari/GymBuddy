gymBuddyApp.controller('LogInCtrl', function($scope, $state) {
  $scope.data = {firstName:null, lastName:null,email:null,password:null,confirmationPassword:null};
  var ref = new Firebase("https//luminous-torch-8195.firebaseio.com/users");
  var check = 0;

  $scope.logIn = function(){
    ref.authWithPassword({
      email: $scope.data.email,
      password: $scope.data.password
    }, function(err, authData){
      if (err) {
        console.log("Login Failed", err);
      } else {
        console.log("Authentication successfully payload", authData);
        $state.go('tab.profile');
      }
    })
  };

  $scope.signUp = function(){
    ref.createUser({
        email:  $scope.data.email,
        password:  $scope.data.password,
    },

    function(error, authData){
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
          id: authData.uid,
          firstName: $scope.data.firstName,
          lastName:  $scope.data.lastName,
          email:  $scope.data.email,
        });
        console.log("Successfully created user account with uid", authData.uid);
        $state.go('tab.profile');
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
            if(authData.facebook.id === snapshot.child('id').val()) check++ ;
          });
          if(check === 0){
            ref.push({
                    id: authData.facebook.id,
                    firstName: authData.facebook.cachedUserProfile.first_name,
                    lastName: authData.facebook.cachedUserProfile.last_name,
                    gender: authData.facebook.cachedUserProfile.gender,
                    image: authData.facebook.profileImageURL,
                    age: authData.facebook.cachedUserProfile.age_range.min
                  });
          } else {
            $state.go('tab.profile');
          }
        console.log("Authenticated successfully with payload:", authData.facebook);
        $state.go('tab.profile');
      });
    }
  });
  };
});
