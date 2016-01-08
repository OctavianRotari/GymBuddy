angular.module('gymBuddy.controllers')
.controller('chatCtrl', function($firebaseArray, chatData, $rootScope, $scope, $stateParams, buddylist) {

  var ref = new Firebase(firebaseUrl);

  var chatId;

  var currentUser ;


  var messages = function(){
    chatId = $stateParams.chatId;
  };

  $scope.sendMessage = function(msg, currentUser){
    var refOtherUser = new Firebase(firebaseUrl + "users/" + $rootScope.chat.user1)
    currentUser = ref.getAuth().uid;
    var refChat = new Firebase(firebaseUrl +"rooms/" + chatId + "/messages");
    var currentUser = refChat.getAuth().uid;
    var messagesFire = $firebaseArray(refChat);
    var obj = {};
    obj[currentUser] = msg;
    messagesFire.$add(obj);
    var objReciver = {};
    var user = $rootScope.chat.user2;
    refOtherUser.child("chats").child($rootScope.chat.room).set({
      userUid: user
    });
  };

  messages();
})
