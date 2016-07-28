angular.module('NoteWrangler', ['ngRoute', 'ngResource', 'ngGravatar'])
  .config(function(GravatarProvider){
    GravatarProvider.setSize(100); // sets default size

});
