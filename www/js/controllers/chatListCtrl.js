angular.module('gymBuddy.controllers')
.controller('chatListCtrl', function($scope, profileData) {

  var getData = function(){
    profileData.getData().then(function(thing) {
      debugger;
      $scope.data = thing
    });
  };

  getData();

  $scope.chats = chatlist.chats();
  $scope.remove = function(chat) {
    chatlist.remove(chat);
  };
})
