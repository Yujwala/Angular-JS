eventsApp.directive('myQuestion', function(){
                   return {
                      restrict: 'E',
                       templateUrl: 'templates/myQuestion.html',
                       transclude: true,
                       scope:{
                           questionText: '@q'
                       }
//                       controller: function(){
//                       $scope.collapsed= false;    
//                       $scope.collapse= function(){
//                           $scope.collapsed= true;
//                       }
//                   }
                         }
            
});