
(function (angular) {
    var myApp = angular.module("myApp", []);
    myApp.factory("mySvc", function ($q, $http) {
        return {
            getGreeting: function (name) {
                var d = $q.defer();
                $http.get("hello/" + name).success(function (data) {
                    d.resolve(data.greeting);
                });
                return d.promise;
            },
            getTime: function () {
                var d = $q.defer();
                $http.get("time").success(function (data) {
                    d.resolve(data.time);
                });
                return d.promise;
            }
        }
    });

    myApp.controller("myCtrl", function ($scope, mySvc) {
        var name = "Ang Lee"
        
        // no more automatic promise unwrapping :-( and one of the reason was
        // "adds too much magic"
        // https://github.com/angular/angular.js/commit/5dc35b527b3c99f6544b8cb52e93c6510d3ac577
        mySvc.getGreeting(name).then(function (greeting) {
            $scope.greeting = greeting;
        })
        mySvc.getTime().then(function (time) {
            $scope.time = time;
        });
    });

})(angular);