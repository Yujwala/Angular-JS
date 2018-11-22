'use strict';

eventsApp.factory('NewRequest', function(){
    return{
      CancelRequest: function(){
          window.confirm("Please confirm");
      }
      }
})