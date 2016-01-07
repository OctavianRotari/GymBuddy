angular.module('gymBuddy.controllers')
.controller('buddyCtrl', function($scope, $stateParams, buddylist) {
  $scope.buddy = buddylist.get($stateParams.buddyId);
  //
  // var ref = new Firebase("https//luminous-torch-8195.firebaseio.com/users");
  //
  // $scope.buddies = [];
  //
  // var getDataChatList = function(){
  //   for(var i=0 ; i < $rootScope.data.chats.length; i++){
  //     chatList.getData($scope.data.chats[i].userUid).then(function(thing){
  //       $scope.buddies.push(thing);
  //     });
  //   }
  // };

  // getDataChatList();

})
