angular.module('NoteWrangler').controller('UsersIndexController', function(User, $scope){
// injecting 'User' factory from services and $scope
  $scope.users = User.query(); // gets all info from User

  console.log($scope.users);


});
