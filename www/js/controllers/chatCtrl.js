angular.module('gymBuddy.controllers')
.controller('chatCtrl', function($firebaseArray, chatData, $rootScope, $scope, $stateParams, buddylist) {

  var ref = new Firebase(firebaseUrl);
  var refChat = new Firebase(firebaseUrl +"rooms/" + chatId + "/messages");
  var chatId;
  var currentUser ;
  var refOtherUser = new Firebase(firebaseUrl + "users/" + $rootScope.chat.user1)

  $scope.messagesFire = $firebaseArray(refChat);

  var messages = function(){
    chatId = $stateParams.chatId;
  };

  $scope.sendMessage = function(msg, currentUser){
    currentUser = ref.getAuth().uid;
    var currentUser = refChat.getAuth().uid;
    var obj = {};
    obj[currentUser] = msg;
    $scope.messagesFire.$add(obj);
    var objReciver = {};
    var user = $rootScope.chat.user2;
    refOtherUser.child("chats").child($rootScope.chat.room).set({
      userUid: user
    });
  };

})
