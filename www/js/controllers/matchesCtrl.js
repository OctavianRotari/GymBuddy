angular.module('gymBuddy.controllers')
.controller('matchesCtrl', function($scope, $stateParams, matchlist) {

  $scope.matches = matchlist.all();

  $scope.remove = function(match) {
    matchlist.remove(match);
  };

})
