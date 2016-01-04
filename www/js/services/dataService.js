gymBuddyApp.service('profileData', ["$q", function($q){

  var ref = new Firebase("https//luminous-torch-8195.firebaseio.com");

  var user = ref.getAuth().uid;

  this.getData = function(){
    var currentUser;
    return $q(function(resolve, reject) {
      ref.once('value', function(allSnapshots) {
        var snapshots = allSnapshots.val();
        for(var snapshotKey in snapshots) {
          if(snapshotKey === user){
            var currentUser = snapshots[snapshotKey];
            console.log(currentUser);
            resolve(currentUser);
          }
        }
      })
    })
  }
}])
