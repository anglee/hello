var app = angular.module("app", []);

app.service("myService", function () {
    this.getName = function (name) {
        return name + " Smith";
    };
});

app.controller("myController", function () {
    this.message = "Hello";
});

app.directive("myDirective", function () {
    return {
        scope: {},
        link: function (scope, element, attr) {
            element.addClass("plain");
            element.bind("click", function () {
                scope.clicked = true;
            });
        }
    };
});