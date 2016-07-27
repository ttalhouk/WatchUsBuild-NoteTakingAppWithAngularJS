angular.module('NoteWrangler').controller('NotesCreateController', function(Note, $scope, $location){
  $scope.note = new Note; // creates new note
  $scope.isSubmitting = false;
  $scope.saveNote = function(note){
    $scope.isSubmitting = true;
    note.$save().then(function(){ // if saved
      $location.path('/notes');
    }).catch(function(errors){
      // validate errors
    }).finally(function(){
      $scope.isSubmitting = false;
    });
  }

});
