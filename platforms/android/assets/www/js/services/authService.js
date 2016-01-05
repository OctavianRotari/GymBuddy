angular.module('gymBuddy.services')
.factory("Auth", function($firebaseAuth) {
 var usersRef = new Firebase("https//luminous-torch-8195.firebaseio.com/users");
 return $firebaseAuth(usersRef);
})
