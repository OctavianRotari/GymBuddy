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
          var exists = 0;
          for(var i=0; i < snapshots.length; i++) {
            if(snapshots[i] === undefined){
              exists = 0;
            } else if (snapshots[i].room === chatRoom) {
              exists++;
            };
          };
          if ( exists === 0 ){
            console.log("is not here");
            resolve(undefined);
          } else {
            for(var i=0; i < snapshots.length; i++) {
              if (snapshots[i].user1 === otherUser && snapshots[i].user2 === currentUser){
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
