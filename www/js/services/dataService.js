gymBuddyApp.service('profileData', function(){

  var ref = new Firebase("https//luminous-torch-8195.firebaseio.com/users");
  var user = ref.getAuth().uid;

  this.getData = function(data){
      ref.once('value', function(allSnapshots){
        allSnapshots.forEach(function(snapshot){
          if("facebook:"+snapshot.child('id').val() === user){
            data.firstName = snapshot.child('firstName').val();
            data.lastName = snapshot.child('lastName').val();
            data.gender = snapshot.child('gender').val();
            data.image = snapshot.child('image').val();
            return data;
          }
        })
      })
    }
})
