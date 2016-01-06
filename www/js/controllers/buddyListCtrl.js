angular.module('gymBuddy.controllers')
.controller('buddyListCtrl', function($scope, $rootScope, profileData, chatList) {

  var ref = new Firebase("https//luminous-torch-8195.firebaseio.com/users");

  $scope.buddies = [];

  var getDataChatList = function(){
    for(var i=0 ; i < $rootScope.data.chats.length; i++){
      chatList.getData($scope.data.chats[i].userUid).then(function(thing){
        $scope.buddies.push(thing);
      });
    }
  };

  getDataChatList();

});
