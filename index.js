//jshint esversion:6
const express = require('express'); // constructor function
//console.log(express);

const app = new express(); // object creation

//console.log("*******")
//console.log("app" + app);

app.use(express.static(__dirname + '/'));

app.get('/',function(req,res){

  res.sendFile(__dirname + '/public/view/Home.html');
});

app.listen(2900,function(){

  console.log("server is running in port 2900");
});
