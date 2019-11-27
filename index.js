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


app.get('/employee/:empno',function(req,res){

    var empnbr = req.params.empno;

    var employeeDetail = [{empno:1,name:"Kohli",gender:"Male",Age:"31",Role:"Captain"},
                  {empno:2,name:"Rohit sharma",gender:"Male",Age:"32",Role:"Vice Captain"}];
    
    
    res.send(employeeDetail.filter((emp)=>emp.empno == empnbr));
    
});

app.listen(2900,function(){

  console.log("server is running in port 2900");
});
