describe("hello-protractor", function () {
    var ptor = protractor.getInstance();
    describe("index", function () {
        it("should display the correct title", function () {
            ptor.get('app/#');
            expect(ptor.getTitle()).toBe('hello');
        });
    });
});