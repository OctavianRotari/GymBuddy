angular.module('gymBuddy.controllers')
.controller('chatCtrl', function(chatData, $rootScope, $scope, $stateParams, buddylist) {

  var ref = new Firebase(firebaseUrl);

  var chatId;

  var currentUser ;


  var messages = function(){
    chatId = $stateParams.chatId;
  };

  $scope.sendMessage = function(msg, currentUser){
    var refOtherUser = new Firebase(firebaseUrl + "users/" + $rootScope.chat.user1)
    currentUser = ref.getAuth().uid;
    var refChat = new Firebase(firebaseUrl +"rooms/" + chatId);
    var currentUser = refChat.getAuth().uid;
    var obj = {};
    obj[currentUser] = msg;
    refChat.child("messages").set(obj);
    var objReciver = {};
    var user = $rootScope.chat.user2;
    refOtherUser.child("chats").child($rootScope.chat.room).set({
      userUid: user
    });
  };

  messages();
})
