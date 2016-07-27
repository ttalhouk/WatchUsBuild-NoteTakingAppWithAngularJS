angular.module('NoteWrangler').controller('NotesShowController', function(Note, $scope, $routeParams){
  // injecting Note factory
  $scope.note = Note.get({id: $routeParams.id})
});
