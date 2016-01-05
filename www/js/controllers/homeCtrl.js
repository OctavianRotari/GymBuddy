gymBuddyApp.controller('homeCtrl', ["$scope",
                                    "$state",
                                    "$firebaseObject",
                                    "profileData",
                                    "BuddyList",
                                    "$location",
                                    function($scope,
                                             $state,
                                             $firebaseObject,
                                             profileData,
                                             BuddyList,
                                             $location
                                             ) {
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
