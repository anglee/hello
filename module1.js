"use strict";

var m2 = require('./module2');
module.exports = {
  message: "I am module #1, I use " + m2.name
};
