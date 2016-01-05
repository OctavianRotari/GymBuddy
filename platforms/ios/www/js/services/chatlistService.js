angular.module('gymBuddy.services')

.factory('chatlist', function () {

  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'Where u at bruv?????',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'Mario',
    lastText: 'Hey, it\'s a meee maaario',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'MangoMan',
    lastText: 'Chattin shit bout ma mangos?',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Don Perino',
    lastText: 'PENTAKILL!',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'my neck is wide, like a potato.',
    face: 'img/mike.png'
  }];

  return {
      all: function() {
        return chats;
      },
      remove: function(chat) {
        chats.splice(chats.indexOf(chat), 1);
      },
      get: function(chatId) {
        for (var i = 0; i < chats.length; i++) {
          if (chats[i].id === parseInt(chatId)) {
            return chats[i];
          }
        }
        return null;
      }
    };


});
