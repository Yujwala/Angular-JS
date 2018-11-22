eventsApp.directive('fontScale', function(){
                   return {
                   link: function(scope, el, attrs){
                       scope.$watch(attrs['fontScale'], function(newvalue){
                           el.css("font-size", +newvalue + "%");
                       })
                   }
                   
}
});