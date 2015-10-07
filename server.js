var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('contractors', ['contractors']);


app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json()); 
app.use(bodyParser.json({type:'application/vnd.api+json'})); 
app.use(bodyParser.urlencoded({extended:true})); 


app.post('/contractors', function (req, res){
    console.log(req.body);
    db.contractors.insert(req.body, function(err, doc) {
        res.json(doc);
    
    
    })

})

app.listen(3000);
console.log('server running on port 3000');    