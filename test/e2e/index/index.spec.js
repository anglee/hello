describe("hello-protractor", function () {
    describe("index", function () {
        it("should display the correct title", function () {
            browser.get('app/#');
            expect(browser.getTitle()).toBe('hello');
        });

        it("should change div text when button is clicked", function () {
            var button = element(by.id('button1'));
            var message = element(by.binding('foo.bar'));
            button.click();
            expect(message.getText()).toBe('test');
        });
    });
});