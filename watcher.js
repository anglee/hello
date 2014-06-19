"use strict";
const
    fs = require('fs'),
    spawn = require('child_process').spawn,
    filename = process.argv[2];

if (!filename) {
  throw Error("A file to watch must be specified!");
}
try {
  fs.watch(filename, function(err) {
    let ls = spawn('ls', ['-lh', filename]);
    ls.stdout.pipe(process.stdout);
  });
  console.log("Now watching " + filename + " for changes...");
} catch(e) {
  console.log("Fail to watch " + filename);
  console.dir(e);
}

