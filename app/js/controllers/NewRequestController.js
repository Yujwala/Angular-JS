eventsApp.controller('NewRequestController',
              function NewRequestController ($scope){
    $scope.saveForm = function(project, createRequest){
        if(createRequest.$valid){
            window.alert('The project ' + project.name + ' is saved');
        }
    }
    $scope.goBack = function(){
        window.location= "#/home";
    }
    $scope.cancel= function(){
           window.confirm("Please confirm");
       
    }
    $scope.project ={
                    reviews:[
                    {
                        name:'Gate Review',
                        reviewerName: 'Yujwala Sai Mahadasu',
                        reviewDate: '1-2-2018'
                    },
                    {
                        name:'Gate Review',
                        reviewerName: 'Yujwala Sai Mahadasu',
                        reviewDate: '1-2-2018'
        
                    },
                    {
                        name:'Green Job Analysis',
                        reviewerName: 'Yujwala Sai Mahadasu',
                        reviewDate: '1-2-2018'
                    },
                     {
                       name:'Gate Review',
                        reviewerName: 'Yujwala Sai Mahadasu',
                        reviewDate: '1-2-2018'
                    },
                     {
                        name:'Start Up Review',
                        reviewerName: 'Yujwala Sai Mahadasu',
                        reviewDate: '1-2-2018'
                    },
                     {
                        name:'Peer Review',
                        reviewerName: 'Yujwala Sai Mahadasu',
                        reviewDate: '1-2-2018'
                    },
                     {
                        name:'Start Up Review',
                        reviewerName: 'Yujwala Sai Mahadasu',
                        reviewDate: '1-2-2018'
                     }
                ]
    }
    $scope.names=['Gate Review','Green Job Analysis','Peer Review','Start Up Review']
    }
);