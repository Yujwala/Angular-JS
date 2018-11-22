'use strict';

eventsApp.controller('EditEventController',
              function EditEventController($scope){
    $scope.saveForm = function(event, newEventForm){
        if(newEventForm.$valid){
            window.alert('The event ' + event.name + ' is saved');
        }
    }
    $scope.cancel = function(){
        window.location= "#/home";
    }
    $scope.event= { 
                  reviews:[
                      {
                         enterpriseID: '11315506',
                         planned: 1,
                         pendingReview: 3,
                         inProgress: 6,
                         exempted: 0,
                         completed: 1
                      },
                      {
                         enterpriseID: '11315506',
                         planned: 1,
                         pendingReview: 3,
                         inProgress: 6,
                         exempted: 0,
                         completed: 1 
                      },
                      {
                         enterpriseID: '11555506',
                         planned: 1,
                         pendingReview: 3,
                         inProgress: 6,
                         exempted: 0,
                         completed: 1
                      },
                      {
                         enterpriseID: '11365506',
                         planned: 1,
                         pendingReview: 3,
                         inProgress: 6,
                         exempted: 0,
                         completed: 1
                      },
                      {
                         enterpriseID: '16415506',
                         planned: 1,
                         pendingReview: 3,
                         inProgress: 6,
                         exempted: 0,
                         completed: 1
                      },
                      {
                         enterpriseID: '14651506',
                         planned: 1,
                         pendingReview: 3,
                         inProgress: 6,
                         exempted: 0,
                         completed: 1
                      },
                      {
                         enterpriseID: '11215506',
                         planned: 1,
                         pendingReview: 3,
                         inProgress: 6,
                         exempted: 0,
                         completed: 1
                      }
                  
        ]
            
    }
    $scope.clickCount=0;
    $scope.clickAction = function(){
        $scope.clickCount++
    }
     $scope.reset = function(){
               $scope.firstName = "Mahesh";
               $scope.lastName = "Parashar";
               $scope.email = "MaheshParashar@tutorialspoint.com";
            }
            
            $scope.reset();
}
);