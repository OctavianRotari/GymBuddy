angular.module('gymBuddy.controllers')
.controller('chatCtrl', function($firebaseArray, chatData, $rootScope, $scope, $stateParams, buddylist) {

  var ref = new Firebase(firebaseUrl);

  var chatId;

  var currentUser ;


  var chatId = function(){
    chatId = $stateParams.chatId;
  };
  chatId();

  var refChat = new Firebase(firebaseUrl +"rooms/" + chatId + "/messages");

  $scope.messages = $firebaseArray(refChat);

  $scope.sendMessage = function(msg, currentUser){
    var refOtherUser = new Firebase(firebaseUrl + "users/" + $rootScope.chat.user1)
    currentUser = ref.getAuth().uid;
    var currentUser = refChat.getAuth().uid;
    var obj = {};
    $scope.messages.$add({
      user: currentUser,
      text: msg
    });
    var objReciver = {};
    var user = $rootScope.chat.user2;
    refOtherUser.child("chats").child($rootScope.chat.room).set({
      userUid: user
    });
  };

})
