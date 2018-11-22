'use strict'

eventsApp.controller('CacheController',
                     function CacheController($scope){
                     $scope.addtoCache = function(key,value){
                         myCache.put(key,value);
                     };
                     $scope.readFromCache = function(key){
                        return myCache.get(key);
                     };
                     $scope.getCacheStats = function(){
                        return myCache.info();
                     };
                     });