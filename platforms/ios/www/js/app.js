
var firebaseUrl = "https//luminous-torch-8195.firebaseio.com/";

var gymBuddy = angular.module('gymBuddy', ['ionic','ngCordova' ,'firebase', 'ionic.ion.showWhen', 'gymBuddy.services', 'gymBuddy.controllers'])

.run(function($ionicPlatform, Auth, $rootScope, $ionicLoading, $location, $rootScope, $ionicHistory) {
  $ionicPlatform.ready(function() {

    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }

    ionic.Platform.fullScreen();

    $rootScope.firebaseUrl = firebaseUrl;
    $rootScope.displayName = null;

    Auth.$onAuth(function (authData) {
      if (authData) {
        console.log("Logged in as:", authData.uid);
        $location.path('/app/home');
      } else {
        console.log("Logged out");
        $ionicLoading.hide();
        $location.path('/sign-in');
      }
    });

    $rootScope.logout = function () {

      console.log("Logging out from the app");
      $ionicLoading.show({
        template: 'Logging Out...'
      });
      Auth.$unauth();
    }


    $rootScope.$on("$stateChangeError", function (event, toState, toParams, fromState, fromParams, error) {
      // We can catch the error thrown when the $requireAuth promise is rejected
      // and redirect the user back to the home page
      if (error === "AUTH_REQUIRED") {
        $location.path("/sign-in");
      }
    });
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('sign-in', {
    url: '/sign-in',
    templateUrl: 'templates/sign-in.html',
    controller: 'sign-inCtrl'
  })

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    // controller: 'AppCtrl'
  })

  .state('app.settings', {
    url: '/settings',
    views: {
      'menuContent': {
        templateUrl: 'templates/settings.html',
        controller: 'profileCtrl'
      }
    }
  })
  .state('app.about', {
    url: '/about',
    views: {
      'menuContent': {
        templateUrl: 'templates/about.html',
        controller: 'profileCtrl'
      }
    }
  })
  .state('app.profile', {
    url: '/profile',
    views: {
      'menuContent': {
        templateUrl: 'templates/profile.html',
        controller: 'profileCtrl'
      }
    }
  })
  .state('app.buddylist', {
    url: '/buddylist',
    views: {
      'menuContent': {
        templateUrl: 'templates/buddylist.html',
        controller: 'buddyListCtrl'
      }
    }
  })
  .state('app.buddy', {
    url: '/buddylist/:buddyId',
    views: {
      'menuContent': {
        templateUrl: 'templates/buddy.html',
        controller: 'buddyCtrl'
      }
    }
  })
  .state('app.gyms', {
    url: '/gyms',
    views: {
      'menuContent': {
        templateUrl: 'templates/gyms.html',
        controller: 'gymCtrl'
      }
    }
  })
  .state('app.matches', {
    url: '/matches',
    views: {
      'menuContent': {
        templateUrl: 'templates/matches.html',
        controller: 'matchesCtrl'
      }
    }
  })

  .state('app.chatlist', {
    url: '/chatlist',
    views: {
      'menuContent': {
        templateUrl: 'templates/chatlist.html',
        controller: 'buddyListCtrl'
      }
    }
  })
  .state('app.chat', {
    url: '/chatlist/:chatId',
    views: {
      'menuContent': {
        templateUrl: 'templates/chat.html',
        controller: 'chatCtrl'
      }
    }
  })
  .state('app.home', {
    url: '/home',
    views: {
      'menuContent': {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/home');
});
