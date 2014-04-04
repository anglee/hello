!(function() {
  "use strict";
  var myApp = angular.module("myApp", ['ui.router']);
  myApp.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('home', {
          url: '/home',
          templateUrl: 'templates/home.html'
        })
        .state('list', {
          url: '/list',
          templateUrl: 'templates/list.html',
          controller: 'ListCtrl'
        })
        .state('list.item', {
          url: '/:itemName',
          templateUrl: 'templates/list.item.html',
          controller: function ($scope, $stateParams) {
            $scope.name = $stateParams.itemName;
          }
        });
  });
  myApp.controller("HomeCtrl", function($scope) {
    $scope.title = "HOME";
  });
  myApp.controller("ListCtrl", function($scope) {
    $scope.items = [
      {
        name: "A"
      },
      {
        name: "B"
      },
      {
        name: "C"
      }
    ];
  });
})();