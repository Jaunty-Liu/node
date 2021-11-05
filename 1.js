var express=require('express');
var app = express();
// this middleware will not allow the request to  go beyond it
app.use(function(req, res, next) {
    res.send('Hello World');
});
// this middleware will never reach this route
app.use('/', function(req, res) {
    res.send('Welcome');
});
app.listen(8080);