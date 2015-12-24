gymBuddyApp.controller('homeCtrl', ["$scope",
                                    "$state",
                                    "$firebaseObject",
                                    "profileData",
                                    function($scope,
                                             $state,
                                             $firebaseObject,
                                             profileData) {
// stacking skilllz
//...lol

var getData = function(){
  profileData.getData().then(function(thing) {
    $scope.data = thing
  });
};

  getData();

}]);
