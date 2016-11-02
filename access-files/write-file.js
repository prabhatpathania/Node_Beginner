var fs = require('fs');
var sData = '{"name": "Jason", "location": "New York"}';

fs.writeFile("storeData.json", sData);

var oData = {"id" : "1",
            "detail": "cheese"};

fs.writeFile("productData.json", JSON.stringify(oData));