var myWorker = new Worker("worker.js");

myWorker.onmessage = function (oEvent) {
  console.log("Worker said : " + oEvent.data);
};

myWorker.postMessage("ali");
