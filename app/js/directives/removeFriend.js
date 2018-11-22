eventsApp.directive('removeFriend', function(){
                   return {
                   templateUrl: 'templates/RemoveFriendTemplate.html',
                   restrict: "EA",
                   replace: true,
                   scope: {
                       notifyParent: '&method'
                   },
                   controller: function($scope){
                            $scope.removing= false;
                            $scope.startRemove = function(){
                                $scope.removing = true;
                            }
                           
                            $scope.cancelRemove = function(){
                                $scope.removing= false;
                            }
                            $scope.confirmRemove = function(){
                                $scope.notifyParent();
                            }
                   }
                
}
});