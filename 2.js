var fs=require('fs');
var child_process=require('child_process');
for(var i=0;i<3;i++){
    var workerProcess=child_process.spawn('node',['1.js',i]);
    workerProcess.stdout.on('data',(data)=>{
        console.log('stdout：'+data);
    });
    workerProcess.stderr.on('data',(data)=>{
        console.log('stderr：'+data);
    });
    workerProcess.on('close',(code)=>{
        console.log('子进程已退出，退出码'+code);
    });
}