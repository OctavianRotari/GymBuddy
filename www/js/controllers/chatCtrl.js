angular.module('gymBuddy.controllers')
.controller('chatCtrl', function($scope, $stateParams, buddylist) {

  var ref = new Firebase(firebaseUrl);

  var chatId;

  var currentUser ;


  var messages = function(){
    chatId = $stateParams.chatId;
  };

  $scope.sendMessage = function(msg, currentUser){
    currentUser = ref.getAuth().uid;
    var refChat = new Firebase(firebaseUrl +"rooms/" + chatId);
    var currentUser = refChat.getAuth().uid;
    var obj = {};
    obj[currentUser] = msg;
    refChat.child("messages").set(obj)
    debugger;
  }

  messages();
})
