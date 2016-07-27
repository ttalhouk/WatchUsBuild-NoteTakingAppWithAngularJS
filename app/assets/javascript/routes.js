angular.module('NoteWrangler').config(function($routeProvider){
// injecting $routeProvider
// setup routes
  $routeProvider
    .when('/',{
      redirectTo: '/notes'
    })
    .when('/notes',{
      templateUrl: 'assets/templates/notes/index.html',
      controller: "NotesIndexController"
    })
    .when('/notes/new',{ // place before /:id as new will trigger the show page
      templateUrl: 'assets/templates/notes/new.html',
      controller: "NotesCreateController"
    })
    .when('/notes/:id',{
      templateUrl: 'assets/templates/notes/show.html',
      controller: "NotesShowController"
    })
    .when('/notes/:id/edit',{
      templateUrl: 'assets/templates/notes/edit.html',
      controller: "NotesEditController"
    });
});
