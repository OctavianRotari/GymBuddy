gymBuddyApp.factory('BuddyList', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var BuddyList = [{
    id: 0,
    firstName: 'Ben Sparrow',
    bio: 'You on your way?',
    profileImageURL: 'img/ben.png'
  }, {
    id: 4,
    firstName: 'Mike Harrington',
    bio: 'This is wicked good ice cream.',
    profileImageURL: 'img/mike.png'
  }];


  return {
    all: function() {
      return BuddyList;
    },
    remove: function(chat) {
      BuddyList.splice(BuddyList.indexOf(chat), 1);
    },
    get: function(buddyId) {
      for (var i = 0; i < BuddyList.length; i++) {
        if (BuddyList[i].id === parseInt(buddyId)) {
          return BuddyList[i];
        }
      }
      return null;
    }
  };
});
