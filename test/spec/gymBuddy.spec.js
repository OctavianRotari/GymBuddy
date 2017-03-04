describe("gymBuddy", function() {
  beforeEach(function(){
    module('gymBuddy');
    module('gymBuddy.controllers')
  });

  var  controller, Auth, $firebaseAuth, $ionicModal, $ionicLoading, scope;

  describe('$scope.createUser', function(){

    beforeEach(inject(function($controller, $rootScope, _Auth_, _$firebaseAuth_, _$ionicModal, _$ionicLoading_){
      Auth = _Auth_;
      $firebaseAuth = _$firebaseAuth_;
      $ionicModal = _$ionicModal_;
      $ionicLoading = _$ionicLoading_;
      scope = $rootScope.$new();
      controller = $controller('sign-inCtrl',{
                         'Auth' :Auth,
                         '$scope' : scope,
                         '$firebaseAuth' : $firebaseAuth,
                         '$ionicModal' : $ionicModal,
                         '$ionicLoading' : $ionicLoading
                        });
    }));


    it('exists', function() {
      console.log(scope);
      expect(controller).not.toBeNull();
    });

    it('creates a new user when the user signs with a new user', function(){
      var user = {
        userName : "octav",
        email : "octav@gmail.com",
        password : "tornado"
      };
      scope.createUser(user);
      expect(window.alert).toHaveBeenCalledWith('User created successfully!');
    })
  });
});

