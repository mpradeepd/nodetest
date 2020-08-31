var express = require('express');

var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json());


var json = {
    "name":"mahela",
    "age":"18"
};


app.get('/',function(req,res){
    console.log("get");
    res.send("success get");
});



app.post('/',function(req,res){
    console.log("post");
     console.log(req.body);
    res.send("succes post");
    
});


app.listen(3000,function(){
    console.log("running on port 3000");
});

