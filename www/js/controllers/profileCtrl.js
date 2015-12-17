gymBuddyApp.controller('ProfileCtrl',['$scope', '$state', 'profileData', function($scope, $state, profileData){

  $scope.data = {firstName:null, lastName:null,email:null,gender:null,image:null};

  $scope.getData = function(){
    profileData.getData($scope.data);
  };

  $scope.signOut = function() {
    ref.unauth();
    $state.go('sign-in');
  };
}])
