var events=require('events');
var eventEmitter=new events.EventEmitter();
eventEmitter.on('connection',function(){
    console.log('1111');
});
eventEmitter.emit('connection');