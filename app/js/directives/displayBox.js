eventsApp.directive('displayBox', function(){
                   return {
                      restrict: 'E',
                       templateUrl: 'templates/displayBox.html',
                       controller: function($scope){
                           $scope.hidden= false;
                           $scope.close= function(){
                               $scope.hidden= true;
                           }
                       },
                       transclude: true
                         }
            
});