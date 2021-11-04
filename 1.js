var express=require('express');
var app=express();
var bodyParser=require('body-parser');
var urlencodedParser=bodyParser.urlencoded({extended:false});
app.use('/public',express.static('public'));
app.get('/1.html',(req,res)=>{
  res.sendFile(__dirname+"/"+"1.html");
})
app.post('/progress_post',urlencodedParser,(req,res)=>{
  var response={
    "first_name":req.body.first_name,
    "last_name":req.body.last_name
  };
  console.log(response);
  res.end(JSON.stringify(response));
})
var server=app.listen(8081,"127.0.0.1",()=>{
  var host=server.address().address;
  var port=server.address().port;
  console.log("http://%s:%s",host,port);
})