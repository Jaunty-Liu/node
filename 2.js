var fs=require('fs');
var data='Batman!!!Batman!!!!!';
var writeStream=fs.createWriteStream('test1.txt');
writeStream.write(data,'utf-8');
writeStream.end();
writeStream.on('finish', function() {
   console.log("写入完成。");
});

writeStream.on('error', function(err){
  console.log(err.stack);
});

console.log("程序执行完毕");