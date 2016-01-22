angular.module('gymBuddy.controllers')
.controller('profileCtrl',['$rootScope', '$timeout', '$ionicLoading', '$ionicHistory', '$localstorage', '$scope', '$state', 'profileData', function($rootScope, $timeout, $ionicLoading, $ionicHistory, $localstorage, $scope, $state, profileData){

  var ref = new Firebase(firebaseUrl);

  $scope.data = $rootScope.data;

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
    var refUser = new Firebase(firebaseUrl + "users/" + user);
    debugger;
    refUser.update({
      age: $scope.data.age,
      userName: $scope.data.userName,
      typeOfTraining: $scope.data.typeOfTraining,
      gym: $scope.data.location.formatted_address
    });
    $state.go('app.home')
  };

}])
