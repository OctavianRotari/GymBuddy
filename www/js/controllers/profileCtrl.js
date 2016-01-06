angular.module('gymBuddy.controllers')
.controller('profileCtrl',['$rootScope', '$timeout', '$ionicLoading', '$ionicHistory', '$localstorage', '$scope', '$state', 'profileData', function($rootScope, $timeout, $ionicLoading, $ionicHistory, $localstorage, $scope, $state, profileData){

  var ref = new Firebase("https//luminous-torch-8195.firebaseio.com/users");

  $scope.data = $rootScope.data

  $scope.clearScope = function(){
    $ionicLoading.show({template:'Logging out....'});
    $localstorage.set('loggin_state', '');
    $timeout(function () {
      $ionicLoading.hide();
      $ionicHistory.clearCache();
      $ionicHistory.clearHistory();
      $ionicHistory.nextViewOptions({ disableBack: true, historyRoot: true });
      $state.go('sign-in');
    }, 30);
  };

  $scope.editProfile = function(){
    var user = ref.getAuth().uid;
    var refUser = new Firebase("https//luminous-torch-8195.firebaseio.com/users/" + user);
    refUser.update({
      age: $scope.data.age,
      userName: $scope.data.userName,
      typeOfTraining: $scope.data.typeOfTraining,
      gym: $scope.data.gym
    });
    $state.go('app.home')
  };
}])
