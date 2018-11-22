eventsApp.directive('modalDirective', function($document){
                   return {
                       scope: {
                           modalOpen: '=open',
                           options: '=',
                           onClose:'&'
                       },
                       transclude: true,
                       templateUrl: 'templates/modalTemplate.html',
                       controller: function($scope){
                           $scope.close = function(){
                               $scope.modalOpen= false;
                           }
        
                       },
                       link: function($scope,el, attrs){
                           var options = angular.extend({
                               height: '250px',
                               width: '500px',
                               top: '20%',
                               left: '30%'
                           }, $scope.options);
                           var pageHeight =  $document.height();
                           var pageWidth = $document.width();
                           el.find('.modal-blackout').css({
                               'width': pageWidth + 'px',
                               'height': pageHeight +'px'
                           })
                           el.find(".modal-container").css({
                               'width': options.width +'px',
                               'height': options.height +'px',
                               'top': options.top,
                               'left': options.left
                           })
                           
                       }
                       
                         }
                

});