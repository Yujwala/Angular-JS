 'use strict';

eventsApp.factory('JediService', function($q){
    return{
     advanceToKnight: function(candidate){
         var promise = $q(function(resolve, reject){
         if(candidate.hasForce && (candidate.yearsOfJediTraining > 20 || candidate.isChosenOne ||(candidate.master=== "Yoda" && candidate.yearsOfJadiTraining > 3 )) && candidate.masterApproves && candidate.passedTrails)
         {
            candidate.rank = "Jedi Knight";
             resolve(candidate);
         }
        else{
            reject(candidate);
        }
      })
         return promise;
      }
}
})