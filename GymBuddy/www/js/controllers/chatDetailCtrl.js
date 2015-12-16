gymBuddyApp.controller('chatdetailctrl', function($scope, $stateparams, chats) {
  $scope.chat = chats.get($stateparams.chatid);
})

