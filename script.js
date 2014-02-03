"use strict";
(function (angular) {
    var myApp = angular.module("myApp", ['ngRoute']);
    myApp.value("myName", "Ariel Payne-Diaz");
    myApp.config(function($routeProvider, $locationProvider) {
        $routeProvider.when('/', {
            redirectTo: "/home"
        });
        $routeProvider.when('/home', {
            templateUrl: "app.html",
            controller: "HomeCtrl",
            owner: "home owner",
            resolve: {
                myNameIs: "myName"
            }
        });
        $routeProvider.when('/App0/:section', {
            templateUrl: "app.html",
            controller: "App0Ctrl",
            owner: "A",
            resolve: {
                myNameIs: function () {
                    return "Haywood Jabuzoff"
                }
            }
        });
        $routeProvider.when('/App1/:section', {
            templateUrl: "app.html",
            controller: "App1Ctrl",
            owner: "B",
            resolve: {
                myNameIs: function ($rootScope) {
                    return $rootScope.foo;
                }
            }
        });
        $routeProvider.when('/App2/:section', {
            templateUrl: "app.html",
            controller: "App2Ctrl",
            owner: "C",
            resolve: {
                myNameIs: function ($q, $timeout) {
                    var deferred = $q.defer();
                    $timeout(function () {
                        deferred.resolve("Juan Menudo")
                    }, 2000);
                    return deferred.promise;
                }
            }
        });
        $routeProvider.otherwise({
            redirectTo: "/home"
        });
        window.$routeProvider = $routeProvider;
        window.$locationProvider = $locationProvider;
    });
    var _hrefToHome = "";

    myApp.config(function($locationProvider) {
        $locationProvider.html5Mode(false);
        if ($locationProvider.html5Mode() === false) {
            _hrefToHome = "#/home"
        } else {
            _hrefToHome = "/home"
        }
        //$locationProvider.hashPrefix('@@@');
    });
    myApp.run(function ($injector, $route, $location, $routeParams, $rootScope) {
        $rootScope.foo = "Stella Payne-Diaz";

        window.$injector = $injector;
        window.$route = $route;
        window.$location = $location;
        window.$routeParams = $routeParams;
        window.$rootScope = $rootScope;
        window.refresh = function () {
            $rootScope.$$phase || $rootScope.$apply();
        };
    });

    myApp.run(function ($templateCache) {
        $templateCache.put("app.html",
            "<a href='" + _hrefToHome + "'>Home</a>" +
                "<button ng-click='prev()'>Prev</button>" +
                "<button ng-click='next()'>Next</button>" +
                "<pre>$locationProvider.html5Mode() = {{ $locationProvider.html5Mode() }}</pre>" +
                "<pre>$locationProvider.hashPrefix() = {{ $locationProvider.hashPrefix() }}</pre>" +
                "<pre>$location.path() = {{$location.path()}}</pre>" +
                "<pre>$routeParams = {{$routeParams}}</pre>" +
                "<pre>$route.current.pathParams = {{$route.current.pathParams}}</pre>" +
                "<pre>$route.current.params = {{$route.current.params}}</pre>" +
                "<pre>$route.current.templateUrl = {{$route.current.templateUrl}}</pre>" +
                "<pre>$route.current.owner = {{$route.current.owner}}</pre>" +
                "<pre>$route.current.locals = {{$route.current.locals}}</pre>" +
                "<pre>$route.current.scope.name = {{$route.current.scope.name}}</pre>" +
                "<pre>$scope.name = {{ name }}</pre>" +
                "<pre>$scope.section = {{ section }}</pre>");
        window.$templateCache = $templateCache;
    });
    myApp.controller("myCtrl", function ($scope) {
        
    });
    myApp.controller("HomeCtrl", function ($scope, $route, $location, $routeParams, $rootScope) {
        $scope.$locationProvider = window.$locationProvider;
        $scope.$route = $route;
        $scope.$location = $location;
        $scope.$routeParams = $routeParams;
        $scope.$rootScope = $rootScope;
        $scope.name = "Home";
        $scope.section = $routeParams.section;
        console.log("entering", $scope.name, $scope.section);
        $scope.prev = function () {
            $location.path("/App2/sec1");
        };
        $scope.next = function () {
            $location.path("/App0/sec2");
        };
        $scope.$on("$destroy", function () {
            console.log("leaving", $scope.name, $scope.section);
        });
    });
    myApp.controller("App0Ctrl", function ($scope, $route, $location, $routeParams, $rootScope) {
        $scope.$locationProvider = window.$locationProvider;
        $scope.$route = $route;
        $scope.$location = $location;
        $scope.$routeParams = $routeParams;
        $scope.$rootScope = $rootScope;
        $scope.name = "App0";
        $scope.section = $routeParams.section;
        console.log("entering", $scope.name, $scope.section);
        $scope.prev = function () {
            $location.path("/App2/Roswell");
        };
        $scope.next = function () {
            $location.path("/App1/" + $scope.section).search({"app1foo": "bar"});
        };
        $scope.$on("$destroy", function () {
            console.log("leaving", $scope.name, $scope.section);
        });
    });
    myApp.controller("App1Ctrl", function ($scope, $route, $location, $routeParams, $rootScope) {
        $scope.$locationProvider = window.$locationProvider;
        $scope.$route = $route;
        $scope.$location = $location;
        $scope.$routeParams = $routeParams;
        $scope.$rootScope = $rootScope;
        $scope.name = "App1";
        $scope.section = $routeParams.section;
        console.log("entering", $scope.name, $scope.section);
        $scope.prev = function () {
            $location.path("/App0/" + $scope.section).search({});
        };
        $scope.next = function () {
            $location.path("/App2/Roswell");
        };
        $scope.$on("$destroy", function () {
            console.log("leaving", $scope.name, $scope.section);
        });
    });
    myApp.controller("App2Ctrl", function ($scope, $route, $location, $routeParams, $rootScope) {
        $scope.$locationProvider = window.$locationProvider;
        $scope.$route = $route;
        $scope.$location = $location;
        $scope.$routeParams = $routeParams;
        $scope.$rootScope = $rootScope;
        $scope.name = "App2";
        $scope.section = $routeParams.section;
        console.log("entering", $scope.name, $scope.section);
        $scope.prev = function () {
            $location.path("/App1/" + $scope.section).search({"app1foo": "bar"});
        };
        $scope.next = function () {
            $location.path("/App0/" + $scope.section).search({});
        };
        $scope.$on("$destroy", function () {
            console.log("leaving", $scope.name, $scope.section);
        });
    });
})(angular);