'use strict';

/**
 * @ngdoc overview
 * @name federatedApp
 * @description
 * # federatedApp
 *
 * Main module of the application.
 */
angular
  .module('federatedApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/ap', {
        templateUrl: 'views/affinityPartner.html',
        controller: 'APCtrl'
      })
      .when('/companies', {
        templateUrl: 'views/companies.html'
      })
      .when('/contacts', {
        templateUrl: 'views/contacts.html'
      })
      .when('/reports', {
        templateUrl: 'views/reports.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
