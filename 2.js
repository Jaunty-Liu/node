var http = require("http");
var url = require("url");
var server = http.createServer(function (req, res) {
    var queryObj = url.parse(req.url, true).query;
    var username = queryObj.username;
    var password = queryObj.password;

    res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.write('server received form request:\n\n');
    res.write('username:'+username+'\n\n'+'password:'+password);
    res.end();
});
server.listen(3000);