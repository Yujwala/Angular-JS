eventsApp.directive('swTabstrip', function(){
                   return {
                      restrict: 'E',
                       templateUrl: 'templates/swTabstrip.html',
                       transclude: true,
                       scope:{},
                       controller: function($scope){
                           $scope.panes =[];
                           $scope.select= function(pane){
                               pane.selected=true;
                              $scope.panes.forEach(function(curPane){
                                      if(curPane !== pane){
                                          curPane.selected=false;
                                      }
                                                   } )
                           }
                           this.addPane=function(pane){
                               $scope.panes.push(pane);
                               if($scope.panes.length===1 ){
                                   pane.selected=true;
                               }
                           }
                           
                       }
        
                         }
            
});