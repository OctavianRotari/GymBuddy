gymBuddy.factory('buddylist', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var buddies = [{
    id: 0,
    firstName: 'Ben Sparrow',
    bio: 'WHAT A POTATO',
    lastText: 'Where u at bruv?????',
    profileImageURL: 'img/ben.png',
    gym: 'somegym'
  }, {
    id: 1,
    firstName: 'Mario',
    bio: 'ba na na na nana na',
    lastText: 'Hey, it\'s a meee maaario',
    profileImageURL: 'img/max.png',
    gym: 'somegym2'
  }, {
    id: 2,
    firstName: 'MangoMan',
    bio: 'on na aha',
    lastText: 'Chattin shit bout ma mangos?',
    profileImageURL: 'img/adam.jpg',
    gym: 'somegym3890'
  }, {
    id: 3,
    firstName: 'Don Perino',
    bio: 'sometime today',
    lastText: 'PENTAKILL!',
    profileImageURL: 'img/perry.png',
    gym: 'somegym4'
  }, {
    id: 4,
    firstName: 'Mike Harrington',
    bio: 'chattin bout potatoes',
    lastText: 'my neck is wide, like a potato.',
    profileImageURL: 'img/mike.png',
    gym: 'somegym980'
  }];


  return {
    all: function() {
      return buddies;
    },
    remove: function(chat) {
      buddies.splice(buddies.indexOf(chat), 1);
    },
    get: function(buddyId) {
      for (var i = 0; i < buddies.length; i++) {
        if (buddies[i].id === parseInt(buddyId)) {
          return buddies[i];
        }
      }
      return null;
    }
  };
});
