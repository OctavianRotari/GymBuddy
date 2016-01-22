angular.module('gymBuddy.controllers')
.controller('buddyListCtrl', function($state, $scope, $rootScope, profileData, chatList, chatData) {

  var ref = new Firebase("https//luminous-torch-8195.firebaseio.com/users");
  var chatRoom;

  $scope.buddies = [];

  $scope.data = $rootScope.data

  var getDataChatList = function(){
    for(var i=0 ; i < $scope.data.chats.length; i++){
      chatList.getData($scope.data.chats[i].userUid).then(function(thing){
        $scope.buddies.push(thing);
      });
    }
  };

  getDataChatList();

  var refUser = new Firebase("https//luminous-torch-8195.firebaseio.com/users");



  $scope.chatRoom = function(uid){
    var ref = new Firebase("https//luminous-torch-8195.firebaseio.com/");
    var chatId = null;
    chatData.getRoom(uid, refUser).then(function(thing){
      chatId = thing;
    });

    for(var i=0; i < $scope.data.chats.length; i++){
      if(uid === $scope.data.chats[i].userUid){
        chatRoom = i;
      }
    };

    if(chatId === null){
      ref.child("rooms").child(chatRoom).set({
        user1: uid,
        user2: ref.getAuth().uid
      });
    }

    $state.go("app.chat",{chatId: chatRoom});
  };
});
