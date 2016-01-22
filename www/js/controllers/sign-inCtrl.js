angular.module('gymBuddy.controllers')
.controller('sign-inCtrl', function($location, Auth, $scope, $firebaseAuth, $ionicModal, $ionicLoading, $rootScope) {

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
        ref.child("users").child(authData.uid).once('value', function (snapshot) {
          var val = snapshot.val();
          // To Update AngularJS $scope either use $apply or $timeout
          $scope.$apply(function () {
            $rootScope.displayName = val;
          });
        });
        $ionicLoading.hide();
      }).then(function(){
        $state.go("app.home")
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

      Auth.$createUser({
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

        $scope.signIn(user)

      }).then(function(){
        $state.go("app.home")
      })
      .catch(function (error) {
        alert("Error: " + error);
        $ionicLoading.hide();
        $scope.modal.hide();
      });
    } else
      alert("Please fill all details");
  };

  $scope.logInFacebook = function() {
    $ionicLoading.show({
      template: 'Signing Up...'
    });
    Auth.$authWithOAuthPopup("facebook").then(function(authData) {

      var refUser = new Firebase("https//luminous-torch-8195.firebaseio.com/users");

      refUser.once("value", function(snapshot){
        var hasUser = snapshot.hasChild(authData.uid);
        if(hasUser === false){
          ref.child("users").child(authData.uid).set({
            id: "facebook:" + authData.facebook.id,
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
      });
      $ionicLoading.hide();
    }).catch(function(error) {
      if (error.code === "TRANSPORT_UNAVAILABLE") {
        Auth.$authWithOAuthPopup("facebook").then(function(authData) {
          var refUser = new Firebase("https//luminous-torch-8195.firebaseio.com/users");
          refUser.once("value", function(snapshot){
            var hasUser = snapshot.hasChild(authData.uid);
            if(hasUser === false){
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
          });
          $ionicLoading.hide();
          console.log(authData);
        });
      } else {
        console.log(error);
      }
    }).then(function(){
      $state.go("app.home")
    })
  };
});
