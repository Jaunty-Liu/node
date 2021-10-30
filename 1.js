var http=require('http');
var serve=http.createServer();
serve.on('request',function(request,response){
    console.log('收到请求来自'+request.url)
    console.log('请求我的客户端的地址是：', request.socket.remoteAddress, request.socket.remotePort)
    // var products=[
    //     {
    //         name:'张三',
    //         id:'000'
    //     },{
    //         name:'李四',
    //         id:'111'
    //     }
    // ]
    // response.setHeader("Content-type","application/json")
    // response.end(JSON.stringify(products))
    response.end('<p>Hello html</p>')
})
serve.listen(3000,function(){
    console.log('输出')
})