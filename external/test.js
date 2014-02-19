console.log("TEST#1");
define(function (require, exports, module) {
    console.log("TEST#2");
    var foo = require("foo");
    console.log("foo=", foo);
    return {
        color: "yello",
        size: "unisize"
    };
});