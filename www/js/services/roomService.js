angular.module('gymBuddy.services')
.service('chatData', ["$q", function($q){

  var refRoom = new Firebase("https//luminous-torch-8195.firebaseio.com/rooms");

  this.getRoom = function(otherUser, chatRoom){
    var currentUser = refRoom.getAuth().uid;
    return $q(function(resolve, reject) {
      refRoom.once('value', function(allSnapshots) {
        var snapshots = allSnapshots.val();
        console.log(snapshots);
        if(snapshots === null ){
          resolve(undefined);
        } else {
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
      });
    });
  }
}]);
