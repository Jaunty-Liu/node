var buf1=Buffer.alloc(10,1);
console.log(buf1);
var buf2=Buffer.allocUnsafe(10,);
console.log(buf2);
console.log(buf2.toString());