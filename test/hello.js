'use strict';
describe("hello, karma", function () {
    describe("basic", function () {
        it("should work", function () {
            expect(1+1).toBe(2);
        });
    });
    describe("custom matcher", function () {
        beforeEach(function () {
            this.addMatchers({
                toBe3Plus: function (expected) {
                    return this.actual === 3 + expected;
                }
            });
        })
        it("should work", function () {
            expect(1+1).toBe(2);
        });
        it("should work with the custom matcher", function () {
            expect(3+1).toBe3Plus(1);
        })
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
        var myController, anotherServiceSpy;
        beforeEach(module("app", function ($provide) {
            anotherServiceSpy = jasmine.createSpyObj("anotherService", ["aMethod"]);
            anotherServiceSpy.aMethod.andReturn("test passed");

            $provide.value("anotherService", anotherServiceSpy);
        }));
        beforeEach(inject(function ($controller, $rootScope) {
            var $scope = $rootScope.$new();
            myController = $controller("myController", {$scope: $scope});
        }));
        describe("myController", function () {
            it("should have a message of hello", function () {
                expect(myController.message).toBe("Hello");
            });
            it("should call anotherService.test", function () {
                expect(anotherServiceSpy.aMethod).toHaveBeenCalled();
            })
        });
    });
    describe("angular directive", function () {
        var element, $scope;
        beforeEach(module("app"));
        beforeEach(inject(function ($compile, $rootScope) {
            element = angular.element("<div my-directive></div>");
            $compile(element)($rootScope);
            $scope = element.isolateScope();
            $scope.foo = jasmine.createSpy();
        }));
        it("should add a class of plain", function () {
            expect(element.hasClass("plain")).toBe(true);
        });
        it("should respond to a click", function () {
            browserTrigger(element, "click");
            //expect(element.scope().clicked).toBe(true); // if the scope is not isolated
            expect(element.isolateScope().clicked).toBe(true);
        });
        it("should call foo() responding to a click", function () {
            browserTrigger(element, "click");
            expect($scope.foo).toHaveBeenCalledWith("AAA");
        });
    });
});