gymBuddyApp.controller('tabCtrl', ['$scope', '$location', function($scope, $location) {
   $scope.findBuddy = $location.path() === '/home';
 }]);
