//'use strict';
//
//eventsApp.factory('modalService',['ngDialog',function(ngDialog){
//    return{
//    openModal: function(message, confirmCallback){
//      ngDialog.open({
//            template: 'templates/loginForm.html',
//            closeByDocument: true,
//            closeByEscape : true,
//            showClose: false,
//            controller:['$scope', function($scope){
//                $scope.message = message;
//                $scope.confirm = function(){
//                    $scope.closeThisDialog(0);
//                    if(confirmCallback){
//                        confirmCallback();
//                    }
//                }
//            }]
//        })
//    }
//      }
//}])