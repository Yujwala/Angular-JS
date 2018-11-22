eventsApp.factory('eventData', function(){
    return{
        event: {
                name: 'Angular Boot Camp',
                date: '2322018934',
                time: '11:22 am',
                imageUrl: '/img/angularjs-logo.png',
                sessions:[
                    {
                        name:'Directives Masterclass',
                        level: 'Intermediate',
                        upVoteCount: 0
                    },
                    {
                        name: 'Scope for fun and profit',
                        level: 'Advanced',
                        upVoteCount: 3
        
                    },
                    {
                        name: 'Well Behaved Controllers',
                        level: 'Intermediate',
                        upVoteCount: 22
                    },
                     {
                        name: 'Filters',
                        level: 'Beginner',
                        upVoteCount: 1
                    },
                     {
                        name: 'Validation Rules',
                        level: 'Advanced',
                        upVoteCount: 15
                    }
                ]
            }
    
}
}
                 );