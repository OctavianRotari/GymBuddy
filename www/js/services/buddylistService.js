angular.module('gymBuddy.services')
.factory('buddylist', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var buddies = [{
    id: 0,
    firstName: 'Ben Sparrow',
    bio: 'WHAT A POTATO',
    age: 21,
    lastText: 'Where u at bruv?????',
    image: 'img/ben.png',
    gym: 'somegym'
  }, {
    id: 1,
    firstName: 'Mario',
    bio: 'ba na na na nana na',
    age: 21,
    lastText: 'Hey, it\'s a meee maaario',
    image: 'img/max.png',
    gym: 'better than the last guys'
  }, {
    id: 2,
    firstName: 'MangoMan',
    bio: 'on na aha',
    age: 21,
    lastText: 'Chattin shit bout ma mangos?',
    image: 'img/adam.jpg',
    gym: 'DAAA GYM'
  }, {
    id: 3,
    firstName: 'Don Perino',
    bio: 'sometime today',
    age: 21,
    lastText: 'PENTAKILL!',
    image: 'img/perry.png',
    gym: 'somegym4'
  }, {
    id: 4,
    firstName: 'Mike Harrington',
    bio: 'chattin bout potatoes',
    age: 21,
    lastText: 'my neck is wide, like a potato.',
    image: 'img/mike.png',
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
