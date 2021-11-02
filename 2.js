var events=require('events');
var eventEmitter=new events.EventEmitter();
eventEmitter.on('someEvent',function(msg1,msg2){
  console.log('111',msg1,msg2);  
});
eventEmitter.on('someEvent',function(msg1,msg2){
    console.log('222',msg1,msg2);
});
eventEmitter.emit('someEvent','!!!','@@@@');