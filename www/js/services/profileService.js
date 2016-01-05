gymBuddy.service('profileData', ["$q", function($q){

//   var ref = new Firebase("https//luminous-torch-8195.firebaseio.com/users");
//
//   var user = (ref.getAuth().uid).split(":").pop();
//
//   this.getData = function(){
//     var currentUser;
//     return $q(function(resolve, reject) {
//       ref.once('value', function(allSnapshots) {
//         var snapshots = allSnapshots.val();
//         for(var snapshotKey in snapshots) {
//           if (snapshots.hasOwnProperty(snapshotKey)) {
//             var snapshot = snapshots[snapshotKey];
//             if(snapshot['id'] === user){
//               var currentUser = snapshots[snapshotKey];
//               currentUser.firebaseId = snapshotKey;
//               console.log(currentUser);
//               resolve(currentUser);
//             }
//           }
//         }
//       })
//     })
//   }
}])
