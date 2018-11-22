'use strict';

var eventsApp = angular.module('eventsApp', ['ngRoute', 'ui.bootstrap', 'ngDialog'])
  .config(function($routeProvider){
      $routeProvider.when('/home',{
          templateUrl: 'templates/Eventdetails.html',
          controller: 'EditEventController'
          
      })
      .when('/CreateEvent',{
          templateUrl: 'templates/CreateEvent.html',
          controller: 'EditEventController'
      })
      
      .when('/NewRequest',{
          templateUrl: 'templates/CreateRequest.html',
          controller: 'NewRequestController'
      })
      .when('/EditProfile',{
            templateUrl: 'templates/EditProfile.html',
            controller: 'EditProfileController'
            })
      .when('/ModalExample',{
          templateUrl: 'templates/modalexample.html',
          controller: 'ModalExampleController'
      })
      .when('/DirectiveExample',{
          templateUrl: 'templates/directiveExample.html',
          controller: 'DirectiveExampleController'
      })
      .when("/ServicesExample", {
          templateUrl: 'templates/servicesExample.html',
          controller: 'ServicesExampleController'
      })
      .when("/Practice", {
          templateUrl: 'templates/practice.html',
          controller: 'practiceController'
      })

  });
        
