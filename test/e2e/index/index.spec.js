describe("hello-protractor", function () {
    describe("index", function () {
        it("should display the correct title", function () {
            browser.get('app/#');
            expect(browser.getTitle()).toBe('hello');
        });
    });
});