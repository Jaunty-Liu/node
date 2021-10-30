var http=require('http');
var serve=http.createServer();
serve.on('request',function(){
    console.log('shoudaoqqongqiu')
})
serve.listen(3000,function(){
    console.log('23')
})