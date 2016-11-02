var express = require('express');
var app = express();

app.use(express.static(__dirname));     // __dirname returns project directory
app.listen(3000);