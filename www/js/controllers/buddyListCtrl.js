angular.module('gymBuddy.controllers')
.controller('buddyListCtrl', function($rootScope, $state, $scope, profileData, chatList, chatData) {

  var ref = new Firebase(firebaseUrl + "users");
  var chatRoom;
  $scope.data = $rootScope.data;

  $scope.buddies = [];

  var getDataChatList = function(){
    for(var i=0 ; i < $scope.data.chats.length; i++){
      chatList.getData($scope.data.chats[i].userUid).then(function(thing){
        $scope.buddies.push(thing);
      });
    }
  };

  getDataChatList();

  $scope.chatRoom = function(uid){
    var ref = new Firebase(firebaseUrl);
    var chat = undefined;
    var chatRoom;
    var userChats = $scope.data.chats.length;

    for(var i=0; i < userChats; i++){
      if(uid === $scope.data.chats[i].userUid){
        chatRoom = i;
      }
    };

    chatData.getRoom(uid, chatRoom).then(function(thing){
      chat = thing;
      console.log(thing);
    }).then(function(){
      if(chat === undefined){
        var chatInfo = {};
        ref.child("rooms").child(chatRoom).set({
          room: chatRoom,
          user1: uid,
          user2: ref.getAuth().uid
        });
      };
      $rootScope.chat = chat;
      $rootScope.chat.chaiId = chatRoom;
      $state.go("app.chat",{chatId: chatRoom});
    });
  };
});
