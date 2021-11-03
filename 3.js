var server = require("./2");
var router = require("./1");
 
server.start(router.route);