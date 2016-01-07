angular.module('gymBuddy.services')
.factory('matchlist', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var matches = [{
    id: 0,
    firstName: 'SARAH?',
    bio: 'sensual POTATO',
    lastText: 'Where u at bruv?????',
    image: 'img/8.jpg',
    gym: '...',
    age: 'N/A',
    typeOfTraining: 'Terminating',
    percent: '98%'

  }, {
    id: 2,
    firstName: 'AndISaid',
    bio: 'on na aha',
    lastText: 'matchtin shit bout ma mangos?',
    image: 'img/1.jpg',
    gym: 'YeeeahYeeeah',
    age: '21',
    typeOfTraining: 'Yeeeeaaaah',
    percent: '78%'
  }, {
    id: 4,
    firstName: 'Dude',
    bio: 'matchtin bout potatoes',
    lastText: 'my neck is wide, like a potato.',
    image: 'img/7.jpg',
    gym: 'do you have my rug?',
    age: '35',
    typeOfTraining: 'Bowling',
    percent: '72%'
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
