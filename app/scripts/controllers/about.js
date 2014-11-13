'use strict';

/**
 * @ngdoc function
 * @name federatedApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the federatedApp
 */
angular.module('federatedApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
