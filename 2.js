var util = require('util'); 
function Base() { 
    this.name = 'base'; 
    this.base = 1991; 
    this.sayHello = function() { 
    	console.log('Hello ' + this.name); 
    }; 
} 
Base.prototype.showName = function() { 
    console.log(this.name);
}; 
function Sub() { 
    this.name = 'sub'; 
} 
util.inherits(Sub, Base); //继承
var objBase = new Base(); 
objBase.showName(); //base 
objBase.sayHello(); //Hello base 
console.log(objBase); //{ name: 'base', base: 1991, sayHello: [Function] } 
var objSub = new Sub(); 
objSub.showName(); //sub
//objSub.sayHello(); 
console.log(objSub); //{ name: 'sub' }