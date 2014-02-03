var express = require('express');
var app = express();

app.get('/hello/:name', function(req, res) {
    res.send({greeting: 'Hello, ' + req.params.name});
});

app.get('/time', function (req, res) {
    res.send({time: new Date().getTime()});
});

app.use(express.static('public'));

app.listen(8080);
console.log('Listening on port 8080');