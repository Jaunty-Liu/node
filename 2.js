var fs=require('fs');
var zlib=require('zlib');fs.createReadStream('test1.txt')
.pipe(zlib.createGzip())
.pipe(fs.createWriteStream('test1.gz'))
console.log("jaudone")