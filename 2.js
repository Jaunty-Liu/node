var http=require('http');
var options={
    host:'127.0.0.1',
    port:'3000',
    path:'/1.html'
}
var callback=(res)=>{   
    var body='';
    res.on('data',(chunk)=>{
        body+=chunk;
    });
    res.on('end',()=>{
        console.log(body);
    });
}
var req=http.request(options,callback);
req.end();