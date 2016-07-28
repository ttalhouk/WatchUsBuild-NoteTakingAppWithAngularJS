angular.module('NoteWrangler').directive("nwCategorySelector", function(Category){
  return{
    replace: true,
    restrict: "E",
    require: "?ngModel",
    // allows ngModel controller to be passed into link context notes controller
    templateUrl: "assets/templates/directives/nwCategorySelector.html",
    link: function(scope, element, attrs, ngModelCtrl){
      scope.categories = Category.query();
      var activeCategory = {};
      scope.isActive = function(category){
        return activeCategory && activeCategory.id === category.id;
      };
      scope.toggleCategory= function(category){
        if (activeCategory === category){
          activeCategory ={};
        } else {
          activeCategory = category;
        };
        ngModelCtrl.$setViewValue(activeCategory)
        // sets $scope.search = activeCategory in notes controller
      };
      ngModelCtrl.$render = function(){
        activeCategory = ngModelCtrl.$viewValue
      };
    }

  };
});
