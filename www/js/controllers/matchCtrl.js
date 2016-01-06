angular.module('gymBuddy.controllers')
.controller('matchCtrl', function($scope, $stateParams, matchlist) {

  $scope.match = matchlist.get($stateParams.matchId);

})
