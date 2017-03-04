angular.module('gymBuddy.services')
.service('chatList', ["$q", function($q){

  var ref = new Firebase(firebaseUrl + "users");


  this.getData = function(userUid){
    var chatUser;
    return $q(function(resolve, reject) {
      ref.once('value', function(allSnapshots) {
        var snapshots = allSnapshots.val();
        for(var snapshotKey in snapshots) {
          if(snapshotKey === userUid){
            var chatUser = snapshots[snapshotKey];
            resolve(chatUser);
          }
        }
      })
    })
  }
}])

