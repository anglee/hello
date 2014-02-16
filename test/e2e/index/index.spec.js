
describe("hello-protractor", function () {
    var page = require('./index.page.js');
    beforeEach(function () {
        page.get();
    })
    describe("index page", function () {
        it("should display the correct title", function () {
            expect(page.getTitle()).toBe('hello');
        });

        it("should change div text when button is clicked", function () {
            page.clickButton();
            expect(page.getMessageText()).toBe('test');
        });
    });
    describe("get index page again", function () {
        it("should reset message", function () {
            expect(page.getMessageText()).toBe('bar');
        })
    });

});