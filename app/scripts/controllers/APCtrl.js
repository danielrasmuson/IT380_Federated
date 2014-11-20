'use strict';

angular.module('federatedApp')
  .controller('APCtrl', function ($scope) {
    function loadJSON(path, success, error){
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function()
        {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status === 200) {
                    if (success)
                        success(JSON.parse(xhr.responseText));
                } else {
                    if (error)
                        error(xhr);
                }
            }
        };
        xhr.open("GET", path, true);
        xhr.send();
    }  

    $scope.aps = [];

    loadJSON('../../database/ap.json', function(aps){
      $scope.aps = aps;
      $scope.$apply();
    });

    $scope.linkToAp = function(id){
      // window.location.replace("#/ap/"+id)
      console.log('hello');
    }


  });
