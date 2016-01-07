angular.module('gymBuddy.controllers')
.controller('chatCtrl', function($scope, $stateParams, buddylist) {

  var chatId;


  var messages = function(){
    chatId = $stateParams.chatId;
  };

  $scope.sendMessage = function(msg){
    var refChat = new Firebase("https//luminous-torch-8195.firebaseio.com/rooms/" + chatId);
    var currentUser = refChat.getAuth().uid;
    debugger;
    refChat.child("messages").set({
      currentUser : "hello",
    })
  }
  messages();
})
