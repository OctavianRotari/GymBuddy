angular.module('gymBuddy.controllers')
.controller('buddyListCtrl', function($scope, profileData, chatList) {

  var getData = function(){
    profileData.getData().then(function(thing) {
      $scope.data = thing
    });
  };

  getData();

  $scope.buddies = []

  var getDataChat = function(){
    for(var i=0 ; i< $scope.data.chats.length; i++){
      chatList.getData($scope.data.chats[i].userUid).then(function(thing) {
        $scope.buddies.push(thing)
      });
    }
  };

  getDataChat();

})
