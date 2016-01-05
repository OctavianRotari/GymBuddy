gymBuddyApp.controller('LogInCtrl', function($scope, $state, $firebaseAuth, $ionicModal, $ionicLoading, $rootScope) {

  var ref = new Firebase(firebaseUrl);
  var auth = $firebaseAuth(ref);

  var check = 0;

  $ionicModal.fromTemplateUrl('templates/signup.html', {
    scope: $scope
  }).then(function (modal) {
    $scope.modal = modal;
  });

  $scope.signIn = function (user) {
    if (user && user.email && user.password) {
      $ionicLoading.show({
        template: 'Signing In...'
      });
      auth.$authWithPassword({
        email: user.email,
        password: user.password
      }).then(function (authData) {
        console.log("Logged in as:" + authData.uid);
        ref.child("users").child(authData.uid).once('value', function (snapshot) {
          var val = snapshot.val();
          // To Update AngularJS $scope either use $apply or $timeout
          $scope.$apply(function () {
            $rootScope.displayName = val;
          });
        });
        $ionicLoading.hide();
        $state.go('tab.home');
      }).catch(function (error) {
        alert("Authentication failed:" + error.message);
        $ionicLoading.hide();
      });
    } else
      alert("Please enter email and password both");
  }


  $scope.createUser = function (user) {
    console.log("Create User Function called");
    if (user && user.email && user.password && user.userName) {
      $ionicLoading.show({
        template: 'Signing Up...'
      });

      auth.$createUser({
        email:  user.email,
        password:  user.password,
      }).then(function (authData) {
        alert("User created successfully!");
        ref.child("users").child(authData.uid).set({
          userName: user.userName,
          email:  user.email,
          image: null
        });
        $ionicLoading.hide();
        $scope.modal.hide();
      }).catch(function (error) {
        alert("Error: " + error);
        $ionicLoading.hide();
        $scope.modal.hide();
      });
    } else
      alert("Please fill all details");
  }

  $scope.login = function(){
    ref.authWithOAuthPopup("facebook", function(error, authData) {
      if (error) {
        console.log("Login Failed!", error);
      } else {
        ref.child("users").child(authData.uid).set({
          id: authData.facebook.id,
          firstName: authData.facebook.cachedUserProfile.first_name,
          lastName: authData.facebook.cachedUserProfile.last_name,
          gender: authData.facebook.cachedUserProfile.gender,
          image: authData.facebook.profileImageURL,
          age: authData.facebook.cachedUserProfile.age_range.min
        });
        $state.go('tab.home');
      }
    });
  };
});
