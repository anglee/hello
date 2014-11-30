var _ = require("lodash");
var Q = require("q");

var temp = _([1,2,3,4]).first(2).value();
console.log(temp);

exports.test = temp;

