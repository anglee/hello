var app = angular.module("app", []);

app.service("myService", function () {
    this.getName = function (name) {
        return name + " Smith";
    };
});

app.controller("myController", function (anotherService) {
    this.message = "Hello";
    anotherService.aMethod();
});

app.directive("myDirective", function () {
    return {
        scope: {},
        link: function (scope, element, attr) {
            element.addClass("plain");
            // scope.foo will not be executed during test as it is overridden by the jasmine spy.
            scope.foo = function (aaa) {
                console.log(aaa);
            };
            element.bind("click", function () {
                scope.clicked = true;
                scope.foo("AAA");
            });
        }
    };
});