eventsApp.directive('detailUsers', function(){
                   return {
                      restrict: 'EA',
                       templateUrl: 'templates/detailUser.html',
                       scope: {
                           users: '=data',
                           selectedUser: '='
                       }
                         }
            
});