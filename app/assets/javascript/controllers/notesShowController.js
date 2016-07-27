angular.module('NoteWrangler').controller('NotesShowController', function(Note, $scope, $routeParams, $location){
  // injecting Note factory
  $scope.note = Note.get({id: $routeParams.id})

  $scope.deleteNote = function(note){
    note.$remove().then(function(){
      $location.path("/notes");
    });
  }
});
