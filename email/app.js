const bodyParser = require("body-parser");
const express = require("express");
const request  = require("request");


const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));
app.get('/', function(req,res){
    res.sendFile(__dirname + "/signup.html")
    
});

app.post("/", function(req, res){
    var firstName = req.body.fname
    var lasttName = req.body.lname
    var Email = req.body.email
    console.log(firstName, lasttName, Email);
});

app.listen(3000,  function(){
    console.log("server is running on port no 3000");
});


//apikey   e88f0b7359cfcd43754a5d36657142ec-us7     ffd918c0af