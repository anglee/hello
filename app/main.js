!(function() {
  "use strict";
  var myApp = angular.module("myApp", ['restangular']);

  myApp.controller("myCtrl", function ($scope, Restangular) {
    var name = 'Ang Lee'
    Restangular.one('hello', name).get().then(function(data) {
      $scope.greeting = data.greeting;
    });
    Restangular.one('time').get().then(function(data) {
      $scope.time = data.time;
    });
  });
})();