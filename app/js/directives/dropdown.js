use strict';

eventsApp.directive('dropdown', function(){
                   return {
                   restrict : 'E',
                   templateUrl:'/templates/dropdownFilter.html', 
                   scope: {
                       review: "@"
                   }
}
});