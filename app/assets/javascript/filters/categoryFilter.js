angular.module('NoteWrangler').filter('categoryFilter', function(){
  return function(collection, category){
    // collection is the ngRepeat,
    // category is the current category selected
    // filter will create a new collection of items
    // of the chosen category
    var newCollection = [];
    if( category && category.id ){

      for(var i = 0; i < collection.length; i++){
        if(collection[i].categoryId === category.id){
          newCollection.push(collection[i]);
        };
      };

      return newCollection;
    } else {
      return collection;
    }
  };
});
