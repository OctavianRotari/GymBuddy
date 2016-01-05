gymBuddy.controller('chatListCtrl', function($scope, chatlist) {

  $scope.chats = chatlist.all();
  $scope.remove = function(chat) {
    chatlist.remove(chat);
  };
})
