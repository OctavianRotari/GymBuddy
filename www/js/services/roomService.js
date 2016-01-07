angular.module('gymBuddy.services')
.service('chatData', ["$q", function($q){

  var refRoom = new Firebase("https//luminous-torch-8195.firebaseio.com/rooms");


  this.getRoom = function(chatUid, ref){
    var user = ref.getAuth().uid;
    return $q(function(resolve, reject) {
      refRoom.once('value', function(allSnapshots) {
        var snapshots = allSnapshots.val();
        for(var snapshotKey in snapshots) {
          if (snapshots.hasOwnProperty(user) && snapshots.hasOwnProperty(user)) {
            var snapshot = snapshots[snampshotKey];
            resolve(snapshot);
          }
        }
      })
    })
  }
}])
