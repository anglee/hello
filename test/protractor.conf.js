exports.config = {

    specs: [
        './e2e/**/*.spec.js',
        './e2e/**/*.page.js'
    ],

    baseUrl: 'http://localhost:3000',

    // For speed, let's just use the Chrome browser.
    chromeOnly: true,

    // Options to be passed to Jasmine-node.
    jasmineNodeOpts: {
        showColors: true
    }
};