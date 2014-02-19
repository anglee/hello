hello requireJS
=====

```
npm install
python -m SimpleHTTPServer 8808
```
go to browser: http://localhost:8808/

open console, it should have 2 logs, from [main.js](https://github.com/anglee/hello/blob/requireJS/scripts/main.js#L9)

note that one can retrieve foo like this, in the console, try:
```
a = require("foo")
```

Let's try to load something new (localhost is just an example, can be any URL, e.g. http://anglee.org/temp/test.js).
```
test = require(["http://localhost:8808/external/test.js"], function (test) { console.log(test); }); ""
```
Note that in the console, it logs out "TEST#1", "TEST#2"

Do it again
```
require(["http://localhost:8000/external/test.js"], function (test) { console.log(test); }); ""
```
This time it doesn't log out "TEST#1", "TEST#2", meaning that it is not evaluating the code again.

from this point on, the 'test' module can be retrieved with:
```
var test = require("http://localhost:8000/external/test.js");
```

