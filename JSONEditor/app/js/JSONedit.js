'use strict';

var app = angular.module('JSONEditor', ['JSONedit']);

function MainViewCtrl($scope, $filter) {


    $scope.sendstuff = function() {
         OSjs.send({cool: 'Awesome'});
    }

    // example JSON
    $scope.jsonData = {
        Name: "nameymcname", "Last Name": "Miller", Address: {Street: "Neverland 42"}, Hobbies: ["doing stuff", "dreaming"]
    };

    $scope.$watch('jsonData', function(json) {
        $scope.jsonString = $filter('json')(json);
    }, true);
    $scope.$watch('jsonString', function(json) {
        try {
            $scope.jsonData = JSON.parse(json);
            $scope.wellFormed = true;
        } catch(e) {
            $scope.wellFormed = false;
        }
    }, true);
}
