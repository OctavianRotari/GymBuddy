angular.module('gymBuddy.services')
.service('chatData', ["$q", function($q){

  var refRoom = new Firebase("https//luminous-torch-8195.firebaseio.com/rooms");

  this.getRoom = function(otherUser, chatRoom){
    var currentUser = refRoom.getAuth().uid;
    var chat = false;
    return $q(function(resolve, reject) {
      refRoom.once('value', function(allSnapshots) {
        var snapshots = allSnapshots.val();
        if(snapshots === null ){
          resolve(undefined);
        } else {
          debugger;
          if ( snapshots[chatRoom] === undefined){
            console.log("is not here");
            resolve(undefined);
          } else {
            for(var i=0; i < snapshots.length; i++) {
              if (snapshots[i].user2 === otherUser && snapshots[i].user1 === currentUser){
                var snapshot = snapshots[i];
                resolve(snapshot);
              }
            }
          }
        }
      })
    })
  }
}])
