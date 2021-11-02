const { chunk } = require("underscore");

var fs=require('fs');
var data='';
var readStream=fs.createReadStream('test1.txt');
readStream.setEncoding('UTF8');
readStream.on('data',(chunk)=>{
   data+=chunk;
});
readStream.on('end',function(){
   console.log(data);
});

readStream.on('error', function(err){
   console.log(err.stack);
});

console.log("程序执行完毕");