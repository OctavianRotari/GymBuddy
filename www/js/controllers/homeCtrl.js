gymBuddyApp.controller('homeCtrl', ["$scope",
                                    "$state",
                                    "$firebaseObject",
                                    "profileData",
                                    "BuddyList",
                                    function($scope,
                                             $state,
                                             $firebaseObject,
                                             profileData,
                                             BuddyList) {
// stacking skilllz
//...lol

  $scope.buddy = BuddyList.all();

var getData = function(){
  profileData.getData().then(function(thing) {
    $scope.data = thing
  });
};

  getData();

}]);
