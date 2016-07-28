angular.module('NoteWrangler').controller('NotesIndexController', function(Note, $scope){
// injecting 'Note' factory from services and $scope
  $scope.notes = Note.query(); // gets all info from Note
  $scope.search = {};
  window.sc = $scope; // testing


});
