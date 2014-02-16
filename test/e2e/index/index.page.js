function IndexPage () {
    var button = element(by.id('button1'));
    var message = element(by.binding('foo.bar'));

    this.get = function () {
        browser.get('app/#');
    };
    this.getTitle = function () {
        return browser.getTitle();
    };

    this.clickButton = function () {
        button.click();
    };

    this.getMessageText = function () {
        return message.getText();
    };
}

module.exports = new IndexPage();