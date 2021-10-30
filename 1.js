var http=require('http');
var serve=http.createServer();
serve.on('request',function(){
    console.log('收到请求')
})
serve.listen(3000,function(){
    console.log('输出')
})