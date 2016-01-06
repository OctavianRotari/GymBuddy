angular.module('gymBuddy.services')
.factory('matchlist', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var matches = [{
    id: 0,
    firstName: 'DOOM',
    bio: 'sensual POTATO',
    lastText: 'Where u at bruv?????',
    image: 'img/ben.png',
    gym: 'somegym'
  }, {
    id: 2,
    firstName: 'MangoWoman',
    bio: 'on na aha',
    lastText: 'matchtin shit bout ma mangos?',
    image: 'img/adam.jpg',
    gym: 'somegym3890'
  }, {
    id: 4,
    firstName: '23984204',
    bio: 'matchtin bout potatoes',
    lastText: 'my neck is wide, like a potato.',
    image: 'img/mike.png',
    gym: 'somegym980'
  }];


  return {
    all: function() {
      return matches;
    },
    remove: function(match) {
      matches.splice(matches.indexOf(match), 1);
    },
    get: function(buddyId) {
      for (var i = 0; i < matches.length; i++) {
        if (matches[i].id === parseInt(buddyId)) {
          return matches[i];
        }
      }
      return null;
    }
  };
});
