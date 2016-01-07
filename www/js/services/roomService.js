angular.module('gymBuddy.services')
.service('chatData', ["$q", function($q){

  var refRoom = new Firebase("https//luminous-torch-8195.firebaseio.com/rooms");

  this.getRoom = function(otherUser){
    var currentUser = refRoom.getAuth().uid;
    return $q(function(resolve, reject) {
      refRoom.once('value', function(allSnapshots) {
        var snapshots = allSnapshots.val();
        for(var i=0; i < snapshots.length; i++) {
          if (snapshots[i].user1 === otherUser && snapshots[i].user2 === currentUser){
            console.log("exists");
            var snapshot = snapshots[i];
            resolve(snapshot);
          }
        }
      })
    })
  }
}])
