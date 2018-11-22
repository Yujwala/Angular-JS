eventsApp.controller('DirectiveExampleController',
              function DirectiveExampleController($scope){
     $scope.user1 = {
         name: 'Yujwala',
         level: 0,
         address: 
             {
                 street: 'Ramnager',
                 city: 'Hyderabad',
                 state: 'Telangana'
                 
             },
         friends: [
              'Teju',
              'Sowmya',
              'Sathesh'
         ],
         hasForce: true,
         yearsOfJadiTraining: 4,
         master: 'Yoda',
         passedTrails: true,
         masterApproves: true
     }
      $scope.user2 = {
         name: 'Yogitha',
          level: 1,
         address: 
             {
                 street: 'Ramnager',
                 city: 'Hyderabad',
                 state: 'Telangana'
                 
             },
         friends: [
              'Prasanta',
              'Srujana',
              'Sameera'
         ]  
     }
    $scope.users=[
        {name: 'Yujwala', planet: 'Uranus', job:'Sucks'},
        {name: 'Sathesh', planet: 'Venus', job: 'Interesting'}
    ],
    $scope.size = 150;
    $scope.tableList ={
        friends: [
                  'Ramya',
                  'Urmila',
                  'Keerthi',
                  'Gayathri'
                 ],
        family: [
                'Ravindra',
                'Sujatha',
                'Yogitha'
        ],
        collegues:[ 
                'Teju',
                'Sowmya',
                'Sathesh'
        ],
        teachers: [
            'W3Schools',
            'Plural Sight',
            'Css tricks'
        ]
        
    }

});