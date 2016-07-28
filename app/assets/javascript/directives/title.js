angular.module('NoteWrangler').directive('title', function($timeout){
  // overwriting the title field.  Could use nwTitle if we want
  // to name space it and not overwrite, but we want the tooltip
  // to be the same everywhere
  // return a link
  return function(scope, element, attrs){
    // use timeout to wait for the refresh before execting
    $timeout(function(){
      $(element).tooltip();
    });

    // tooltip adds an event listener so to prevent memory leak need to turn
    // it off if destroyed.

    scope.$on('$destroy', function(){
      $(element).tooltip('destroy');
    })
  };
});
