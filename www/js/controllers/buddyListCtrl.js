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

  $scope.chatRoom = function(uid){
    var ref = new Firebase("https//luminous-torch-8195.firebaseio.com/");
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
        ref.child("rooms").child(chatRoom).set({
          room: chatRoom,
          user1: uid,
          user2: ref.getAuth().uid
        });
      };
      $rootScope.chat = chat;
      $state.go("app.chat",{chatId: chatRoom});
    });


  };
});
