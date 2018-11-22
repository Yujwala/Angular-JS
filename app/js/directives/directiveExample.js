eventsApp.directive('directiveExample', function(JediService){
                   return {
                   templateUrl: 'templates/directiveTemplate.html',
                   restrict: "EA",
                   replace: true,
                   scope: {
                       person: '=',
                       initialCollapse: '@collapsed'
                   },
                   controller: function($scope){
                         $scope.collapsed = ($scope.initialCollapse==="true");
                            $scope.knightMe = function(person){
                            JediService.advanceToKnight(person).then('null', function(person){
                                alert("Sorry " + person.name + " is not a knight");
                            })
                            }
                          
                            $scope.collapse = function(){
                                $scope.collapsed = !$scope.collapsed;
                            }
                            $scope.removeFriend = function(friend){
                                var idx = $scope.person.friends.indexOf(friend);
                                if(idx > -1)
                                    {
                                        $scope.person.friends.splice(idx, 1);
                                    }
                            }
                             $scope.nextState= function(){
                                 $scope.person.level++;
                                 $scope.person.level = $scope.person.level % 3;
                             }
                            
                   }
                
}
});