gymBuddyApp.controller('homeCtrl', ["$scope", "$state", "$firebaseObject", function($scope, $state, $firebaseObject) {


  uniqueid = ''
  var ref = new Firebase("https//luminous-torch-8195.firebaseio.com/users/-K5p0ukbIsVU2nLBoZwH");
  $scope.obj = $firebaseObject(ref);
  //
  // obj.$loaded().then(function() {
  //    console.log("loaded record:", obj.$id, obj.someOtherKeyInData);
  //
  //   // To iterate the key/value pairs of the object, use angular.forEach()
  //   angular.forEach(obj, function(value, key) {
  //      console.log(key, value);
  //   });
  // });
  //
  // // To make the data available in the DOM, assign it to $scope
  // $scope.data = obj;
  //
  // // For three-way data bindings, bind it to the scope instead
  // obj.$bindTo($scope, "data");

}]);
