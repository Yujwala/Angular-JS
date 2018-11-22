eventsApp.controller('ServicesExampleController',
              function ServicesExampleController($scope, books, calculate){
     $scope.allbooks= books.bookslog;
   $scope.doSquare = function() {
       if(!$scope.number){
           $scope.error="Please enter the number";
       }
       else{
        $scope.answer = calculate.square($scope.number);
       }
    },
   $scope.fromList= [
       {
           code: "yen",
           value: 50, 
       },
       {
           code: "USD",
           value:70,
       },
       {
           code: "gbp",
           value: 40
       }
   
   ],
    $scope.toList= [{code: "INR"}],
       $scope.from = "yen";
       $scope.to="INR";
       
       $scope.convert = function(){
       for(var i=0; i < $scope.fromList.length; i++){
           if($scope.from == $scope.fromList[i].code)
               {
                   $scope.output= $scope.amount + " " + $scope.fromList[i].code + " equals " + $scope.amount * $scope.fromList[i].value +" " + $scope.to;
               }
       }
   }
});

