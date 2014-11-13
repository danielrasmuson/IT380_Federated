'use strict';

/**
 * @ngdoc function
 * @name federatedApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the federatedApp
 */
angular.module('federatedApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
