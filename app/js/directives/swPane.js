eventsApp.directive('swPane', function(){
                   return {
                      restrict: 'E',
                       templateUrl: 'templates/swPane.html',
                       transclude: true,
                       scope: {
                           title: '@'
                       },
                       require: '^swTabstrip',
                       link: function(scope, el, attr, tabstripCtrl){
                           tabstripCtrl.addPane(scope);
                       }
        
                         }
            
});