eventsApp.directive('masterUsers', function(){
                   return {
                      restrict: 'EA',
                       templateUrl: 'templates/masterUser.html',
                       scope:{
                           users: '=data',
                           selectedUser: '='
                       },
                       controller: function($scope){
                       $scope.selectedUser = $scope.users[0];
                           $scope.selectUser = function(user){
                               $scope.selectedUser = user;
                           }
                           
                   }
}
                    })