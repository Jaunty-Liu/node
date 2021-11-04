var express = require('express'); 
var app = express(); 
var PORT = 3000; 
  
// View engine setup 
app.set('Batman', 'redhood'); 
console.log(app.get('Batman'));