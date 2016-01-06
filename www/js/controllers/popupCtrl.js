angular.module('gymBuddy.controllers')
.controller('PopupCtrl', function($scope, $ionicPopup, $timeout){

  $scope.matchNotification = function(){
    var notification = $ionicPopup.confirm({
      title: 'You found a match!',
      template: 'Do you want to see?'
    });

  }
});
