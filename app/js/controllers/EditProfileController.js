'use strict';

eventsApp.controller('EditProfileController',
              function EditProfileController($scope, GravatarUrlBuilder){
    $scope.user= { };
     $scope.getGravatarUrl = function(email) {
         return GravatarUrlBuilder.buildGravatarUrl(email);
       }
}
                     );