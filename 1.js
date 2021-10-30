var http=require('http');
var serve=http.createServer();
serve.on('request',function(request,response){
    console.log('收到请求来自'+request.url)
    response.write('hello')
    response.write('        nodejs')
    response.end()
})
serve.listen(3000,function(){
    console.log('输出')
})