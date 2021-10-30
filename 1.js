var http=require('http');
var serve=http.createServer();
serve.on('request',function(request,response){
    console.log('收到请求来自'+request.url)
    var products=[
        {
            name:'张三',
            id:'000'
        },{
            name:'李四',
            id:'111'
        }
    ]
    response.end(JSON.stringify(products))
})
serve.listen(3000,function(){
    console.log('输出')
})