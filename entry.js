var m1 = require('./module1');
var _ = require('lodash');
_.times(3, function(i) {
  console.log(m1.message + " " + i);
});
