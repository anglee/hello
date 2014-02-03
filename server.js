var restify = require('restify');

var server = restify.createServer();

// Hello
function respond(req, res, next) {
    res.send({greeting: 'Hello, ' + req.params.name});
}
server.get('/hello/:name', respond);
server.head('/hello/:name', respond);

// Time
function getTime(req, res, next) {
    res.send({time: new Date().getTime()});
}
server.get('/time', getTime);

// Static
// https://github.com/mcavage/node-restify/issues/420
server.get(/.*/, restify.serveStatic({
    directory: './public',
    default: 'index.html'
}));

server.listen(8080, function() {
    console.log('%s listening at %s', server.name, server.url);
});
