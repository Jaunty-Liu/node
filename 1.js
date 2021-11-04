var express=require('express');
var app=express();
app.param(['id', 'page'], function(req, res, next, value) {
  console.log('param',value);
  next();
});
app.get('/user/:id/:page', function(req, res, next) {
  console.log('get1',req.params);
  next();
});
app.get('/user/:id/:page', function (req, res, next) {
  console.log('get2',req.params);
  res.end();
});
app.listen(3000);