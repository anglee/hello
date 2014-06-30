(function(){
  "use strict";
  var myApp = angular.module('myApp', ['ngTouch']);
  myApp.controller("myCtrl", function($scope) {
    $scope.foo = 0;
    $scope.swipeLeft = function () {
      $scope.foo++;
    };
    $scope.swipeRight = function () {
      $scope.foo--;
    };
  });
})();