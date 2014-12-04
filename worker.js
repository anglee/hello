importScripts("bower_components/lodash/dist/lodash.js")
postMessage("I\'m working before postMessage(\'ali\').");

onmessage = function (oEvent) {
  postMessage("Hi " + oEvent.data);
};

var a = 0;
setInterval(function() {
  console.log(_.range(3));
}, 2000);
console.log("test");
