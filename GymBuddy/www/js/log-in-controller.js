gymBuddyApp.controller('LogIn', function($scope) {

	var ref = new Firebase("https://.firebaseio.com");
ref.authWithOAuthPopup("facebook", function(error, authData) {
  if (error) {
    console.log("Login Failed!", error);
  } else {
    console.log("Authenticated successfully with payload:", authData);
  }
});

});