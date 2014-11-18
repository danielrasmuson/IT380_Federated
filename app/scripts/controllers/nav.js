'use strict';

angular.module('federatedApp')
  .controller('NavCtrl', function ($scope, $location) {
    $scope.$on('$routeChangeStart', function(next, current) { 
        if (current.originalPath == "/"){
           setCurrent('Home');
        } else if (current.originalPath == "/ap"){
           setCurrent('Affinity_Partner');
        } else if (current.originalPath == "/companies"){
           setCurrent('Companies');
        } else if (current.originalPath == "/contacts"){
           setCurrent('Contacts');
        } else if (current.originalPath == "/reports"){
           setCurrent('Reports');
        }
    })

    var setCurrent = function(current){
        // set everything else to false
        $scope.nav.Home = false;
        $scope.nav.Affinity_Partner = false;
        $scope.nav.Companies = false;
        $scope.nav.Contacts = false;
        $scope.nav.Reports =false;

        // updated the current nav
        $scope.nav[current] = true;
    }

    $scope.nav = {
        Home: true,
        Affinity_Partner: true,
        Companies: false,
        Contacts: false,
        Reports: false
    }
  });
