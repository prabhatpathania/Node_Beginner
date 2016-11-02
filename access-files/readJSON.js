var fs = require('fs');

fs.readFile('./myData.json', 'utf-8', function(err, data){
    var oData = JSON.parse(data);
    console.log("Employee Name is:", oData.name);
});