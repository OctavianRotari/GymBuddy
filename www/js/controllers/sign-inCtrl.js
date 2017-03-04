angular.module('gymBuddy.controllers')
.controller('sign-inCtrl', function(Auth, $scope, $firebaseAuth, $ionicModal, $ionicLoading) {

  var ref = new Firebase(firebaseUrl);

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
      Auth.$authWithPassword({
        email: user.email,
        password: user.password
      }).then(function (authData) {
        console.log("Logged in as:" + authData.uid);
        $ionicLoading.hide();
      }).catch(function (error) {
        alert("Authentication failed:" + error.message);
        $ionicLoading.hide();
      });
    } else alert("Please enter email and password both");
  }


  $scope.createUser = function (user) {
    console.log("Create User Function called");
    if (user.email && user.password && user.userName) {
      $ionicLoading.show({
        template: 'Signing Up...'
      });
      Auth.$createUser({
        email:  user.email,
        password:  user.password,
      }).then(function (authData) {
        alert("User created successfully!");
        ref.child("users").child(authData.uid).set({
          userName: user.userName,
          email:  user.email,
          image: null,
          id: authData.uid
        });
        $ionicLoading.hide();
        $scope.modal.hide();
        $scope.signIn(user)
      }).catch(function (error) {
        alert("Error: " + error);
        $ionicLoading.hide();
        $scope.modal.hide();
      });
    } else alert("Please fill all details");
  };

  $scope.logInFacebook = function() {
    $ionicLoading.show({
      template: 'Signing Up...'
    });
    var refUser = new Firebase(firebaseUrl);
    var hasUser = snapshot.hasChild(authData.uid);
    Auth.$authWithOAuthPopup("facebook").then(function(authData) {
      refUser.once("value", function(snapshot){
       createFacebookUser(hasUser);
      });
      $ionicLoading.hide();
    }).catch(function(error) {
      if (error.code === "TRANSPORT_UNAVAILABLE") {
        Auth.$authWithOAuthPopup("facebook").then(function(authData) {
          refUser.once("value", function(snapshot){
            createFacebookUser(hasUser);
          });
          $ionicLoading.hide();
        });
      } else {
        console.log(error);
      }
    })
  };

  var createFacebookUser = function(hasUser){
    if( hasUser === false ){
      ref.child("users").child(authData.uid).set({
        id:"facebook:" +  authData.facebook.id,
        firstName: authData.facebook.cachedUserProfile.first_name,
        lastName: authData.facebook.cachedUserProfile.last_name,
        gender: authData.facebook.cachedUserProfile.gender,
        image: authData.facebook.profileImageURL,
        age: authData.facebook.cachedUserProfile.age_range.min,
        userName: "",
        typeOfTraining: "",
        gym: ""
      });
    }
  }

});
