var express = require('express');
var app = express();
var fs = require('fs');
var i = 0;

app.use('/message', function(req, res){
    console.log('User Requested Message Endpoint');
    res.send('Response Message');
})

app.use('/users', function(req, res){
    fs.readFile('./users.json', 'utf-8', function(err, data){
        console.log('User Requested Users Endpoint');
        
        var oData = JSON.parse(data);
        var sUsers = "";
        for(i = 0; i < oData.list.length; i++){
            sUsers = sUsers + oData.list[i].name + '</br>';
        }
        res.send(sUsers);
    });
});
app.listen(3000);