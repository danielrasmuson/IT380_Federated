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
        // $scope.hello = 'Hi';
        $scope.alert1 = function(){
            swal("Here's a message!");
        };
        $scope.alert2 = function(){
            swal("Here's a message!", "It's pretty, isn't it?");
        };
        $scope.alert3 = function(){
            swal("Good job!", "You clicked the button!", "success");
        };
        $scope.alert4 = function(){
            swal(
                {   
                    title: "Are you sure?",
                    text: "Your will not be able to recover this imaginary file!",
                    type: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#DD6B55",
                    confirmButtonText: "Yes, delete it!",
                    closeOnConfirm: false 
                },
                function(){   
                    swal("Deleted!",
                        "Your imaginary file has been deleted.",
                        "success"); 
                }
            );
        };
        $scope.alert5 = function(){
            swal(
                {
                    title: "Are you sure?",
                    text: "Your will not be able to recover this imaginary file!",
                    type: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#DD6B55",
                    confirmButtonText: "Yes, delete it!",
                    cancelButtonText: "No, cancel plx!",
                    closeOnConfirm: false,
                    closeOnCancel: false 
                }, 
                function(isConfirm){
                    if (isConfirm) {
                        swal("Deleted!", "Your imaginary file has been deleted.", "success");   
                    } else {
                        swal("Cancelled", "Your imaginary file is safe :)", "error");
                }
            });
        };
        $scope.alert6 = function(){
            swal({   
                title: "Sweet!",   
                text: "Here's a custom image.",
                imageUrl: "http://placehold.it/450x450" 
            }); 
        };

  });
