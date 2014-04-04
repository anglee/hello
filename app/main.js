!(function() {
  "use strict";
  var myApp = angular.module("myApp", []);
  myApp.controller("myCtrl", function($scope) {
    $scope.foo = "bar";
  });
})();