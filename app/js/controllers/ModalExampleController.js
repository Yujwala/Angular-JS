//'use strict';

eventsApp.controller('ModalExampleController', function($scope, ngDialog){
     $scope.errmsg1= false;
    $scope.errmsg2 = false;
    $scope.errmsg3= false;
    $scope.isAddIndFamily =false;
    $scope.isAddUSFamily = false;
    $scope.openModel= function(){
        $scope.modalOpen= true;
    }
    $scope.openDialogue= function(){
        ngDialog.open({
            template: 'templates/dialogue.html',
            closeByDocument: false,
            closeByEscape: true,
            showClose: true,
            className: 'ngdialog-theme-default',
            controller: ["$scope",function($scope){
                 $scope.isDisabled = true;
                   $scope.first= false;
                    $scope.last= false;
                    $scope.emailerror= false;
                    $scope.invalidemail= false;
                    $scope.validation= function(){
                        if($scope.iffirstname === '' || $scope.MyForm.firstname.$pristine) {
                        $scope.first= true;
                            }
                        if($scope.iflastname === '' || $scope.MyForm.lastname.$pristine) {
                        $scope.last= true;
                            }
                        if($scope.ifemailaddress === '' || $scope.MyForm.emailaddress.$pristine) {
                        $scope.emailerror= true;
                            }
                        if($scope.ifemailaddress !== '' && $scope.MyForm.emailaddress.$invalid) {
                        $scope.invalidemail= true;
                            }
                     return true;
                    }
    
                 $scope.submit = function(){    
                     $scope.validation();
            }
//                $scope.validationFlag=$scope.validation();
//                if($scope.validationFlag){
//                     $scope.isDisabled = false;
//            }
                $scope.buttonChecker= function(){
                return $scope.MyForm.$invalid ;
                }
                
                } 
                 
            
        ]
        })
        
    
    
        
    }
    $scope.isIndiaActive= true;
    $scope.isUSActive= false;
     $scope.active = true;
    $scope.clickUS= function(){
        $scope.isUSActive=true;
        $scope.isIndiaActive=false;
         $scope.isAddIndFamily = false;
        
    }
      $scope.clickIndia= function(){
        $scope.isUSActive=false;
        $scope.isIndiaActive=true;
        $scope.isAddUSFamily = false;
    }
   
    
    $scope.formSubmit = function(){
      if($scope.myForm.firstname.$pristine){
          $scope.errmsg1= true;
      }
      if($scope.myForm.lastname.$invalid){
      $scope.errmsg2 = true;
      }
      if($scope.myForm.eid.$invalid){
      $scope.errmsg3 = true;
      }
    }
    $scope.addIndFamily= function(){
        $scope.isAddIndFamily = true;
        
    }
    $scope.addUSFamily= function(){
         $scope.isAddUSFamily = true;
    }

    
}
    
);