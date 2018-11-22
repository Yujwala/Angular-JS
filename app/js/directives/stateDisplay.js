eventsApp.directive('stateDisplay', function(){
                   return {
                         link: function(scope, el,attrs ){
                             scope.$watch(attrs['stateDisplay'], function(newvalue){
                                   switch(newvalue){
                                 case 0:
                                 el.css('background-color' ,'white');
                                 break;
                                 case 1:
                                 el.css('background-color', 'blue');
                                 break;
                                 case 2:
                                  el.css('background-color', 'yellow');
                                 break;
                             }
                                          })
                         }
                
}
});