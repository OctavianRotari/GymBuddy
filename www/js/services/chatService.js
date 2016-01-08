angular.module('gymBuddy.services')
.service('chatData', ["$q", function($q){

  var ref = new Firebase("https//luminous-torch-8195.firebaseio.com/users");


  this.getData = function(otherUser){
    var currentUser;
    return $q(function(resolve, reject) {
      ref.once('value', function(allSnapshots) {
        var snapshots = allSnapshots.val();
        for(var snapshotKey in snapshots) {
          if(snapshotKey === otherUser){
            var currentUser = snapshots[snapshotKey];
            resolve(currentUser);
          }
        }
      })
    })
  }
}])
