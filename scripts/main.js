require.config({
    paths: {
        foo: 'foo', // '.js' is omitted
        bar: 'http://localhost:8808/external/bar' // '.js' is omitted, could be any URL, e.g. "http://anglee.org/temp/bar"
    }
});

requirejs(['foo', 'bar'], function (foo, bar) {
    console.log(foo);
    console.log(bar);
});