'use strict';
describe("hello, karma", function () {
    describe("basic", function () {
        it("should work", function () {
            expect(1+1).toBe(2);
        });
    });
    describe("angular basic", function () {
        var element;
        var $scope;
        beforeEach(inject(function($compile, $rootScope) {
            $scope = $rootScope;
            element = angular.element("<div>{{2 + 2}}</div>");
            element = $compile(element)($rootScope)
        }));

        it('should equal 4', function() {
            $scope.$digest();
            expect(element.html()).toBe("4");
        });
    });
    describe("angular service", function () {
        var myService;
        beforeEach(module("app"));
        beforeEach(inject(function (_myService_) {
            myService = _myService_;
        }));
        describe("myService", function () {
            it("should append Smith to a name", function () {
                expect(myService.getName("John")).toBe("John Smith");
            });
        });
    });
    describe("angular controller", function () {
        var myController;
        beforeEach(module("app"));
        beforeEach(inject(function ($controller) {
            myController = $controller("myController");
        }));
        describe("myController", function () {
            it("should have a message of hello", function () {
                expect(myController.message).toBe("Hello");
            });
        });
    });
    describe("angular directive", function () {
        var element;
        beforeEach(module("app"));
        beforeEach(inject(function ($compile, $rootScope) {
            element = angular.element("<div my-directive></div>");
            $compile(element)($rootScope);
        }));
        it("should add a class of plain", function () {
            expect(element.hasClass("plain")).toBe(true);
        });
        it ("should respond to a click", function () {
            browserTrigger(element, "click");
            //expect(element.scope().clicked).toBe(true); // if the scope is not isolated
            expect(element.isolateScope().clicked).toBe(true);
        });
    });
});