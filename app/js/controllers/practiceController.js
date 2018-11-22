eventsApp.controller('practiceController', function($scope){
  $scope.active = true;
  $scope.tasks=[];
  $scope.blank = false;
  $scope.invalid= false;
  $scope.mark = false;
  $scope.awesome = false;
  $scope.validation = function(){
  	if($scope.MyForm.taskItem.$invalid){
       $scope.blank = true;
  	}
  	else{
  		$scope.blank= false;
  	}
  	 // if($scope.MyForm.taskItem.$invalid){
  		// $scope.invalid= true;
  // }
  	return true;
  }
  $scope.addTask = function(){
  	$scope.validation();
  	if($scope.MyForm.taskItem.$valid){
  		$scope.tasks.push($scope.title)
  	
  }
  $scope.title=""
  }
   // $scope.markAsC= function(test){

   //  var deletedTask = document.getElementsByClassName("liHeight");
   //  var result = angular.element(deletedTask[test]);
   //  if(result.hasClass('markAsC')){
   //   $scope.awesome= true;
   //  }
   // }
  $scope.deleteTask = function(task){
   
   var idx = $scope.tasks.indexOf(task);
   if(idx>-1){
   	$scope.tasks.splice(idx, 1);
   }
  }
  
  $scope.services= [
       {
           name: "Web Development",
           value: 300,
           active: true
       },
       {
           name: "Design",
           value:400,
           active: false
       },
       {
           name: "Integration",
           value: 250,
           active:false
       },
       {
           name: "Training",
           value: 220,
           active: false
       }
   
   ]

   $scope.toggle= function(service){
    service.active =! service.active;
   }
})