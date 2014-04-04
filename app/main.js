!(function() {
  "use strict";
  var myApp = angular.module("myApp", ['firebase']);
  myApp.constant('FIREBASE_URI', 'https://glaring-fire-5327.firebaseIO.com');
  myApp.controller("myCtrl", function($scope, $firebase, FIREBASE_URI) {
    var ref = new Firebase(FIREBASE_URI);
    $scope.foo = $firebase(ref);
    $scope.updateName = function() {
      //$scope.foo.$set({username: $scope.newName});
      $scope.foo.$update({username: $scope.newName});
      $scope.newName = "";
    };
    $scope.updateEmail = function() {
      $scope.foo.$update({email: $scope.newEmail});
      $scope.newEmail = "";
    };
  });
})();