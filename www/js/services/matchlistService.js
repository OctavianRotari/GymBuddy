angular.module('gymBuddy.services')
.factory('matchlist', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var matches = [{
    id: 0,
    firstName: 'Chuka',
    bio: 'Eurogerian Lad',
    lastText: 'some bio',
    image: 'img/chuka.jpg',
    gym: 'GymBox London Soho',
    age: '21',
    typeOfTraining: 'Upper Body',
    percent: '98%'

  }, {
    id: 0,
    firstName: 'Denva93',
    bio: 'sensual POTATO',
    lastText: 'Where u at bruv?????',
    image: 'img/ben.jpg',
    gym: 'GymBox London Soho',
    age: 'N/A',
    typeOfTraining: 'Terminating',
    percent: '88%'

  }, {
    id: 2,
    firstName: 'Rob From Reading',
    bio: 'on na aha',
    lastText: 'matchtin shit bout ma mangos?',
    image: 'img/9.jpg',
    gym: 'GymBox London Soho',
    age: '21',
    typeOfTraining: 'Yeeeeaaaah',
    percent: '83%'
  }, {
    id: 4,
    firstName: 'The Dude',
    bio: 'matchtin bout potatoes',
    lastText: 'my neck is wide, like a potato.',
    image: 'img/7.jpg',
    gym: 'GymBox London Old Street',
    age: '35',
    typeOfTraining: 'Bowling',
    percent: '72%'
  }, {
    id: 0,
    firstName: 'Denva93',
    bio: 'sensual POTATO',
    lastText: 'Where u at bruv?????',
    image: 'img/ben.jpg',
    gym: 'GymBox London Old Street',
    age: 'N/A',
    typeOfTraining: 'Terminating',
    percent: '64%'

  }, {
    id: 2,
    firstName: 'AndISaid',
    bio: 'on na aha',
    lastText: 'matchtin shit bout ma mangos?',
    image: 'img/adam.jpg',
    gym: 'GymBox London Old Street',
    age: '21',
    typeOfTraining: 'Yeeeeaaaah',
    percent: '62%'
  }, {
    id: 4,
    firstName: 'Dude',
    bio: 'matchtin bout potatoes',
    lastText: 'my neck is wide, like a potato.',
    image: 'img/mike.jpg',
    gym: 'GymBox London Old Street',
    age: '35',
    typeOfTraining: 'Bowling',
    percent: '61%'
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
