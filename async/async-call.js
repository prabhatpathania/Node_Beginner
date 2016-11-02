fs = require('fs');

fs.readdir('./', readPath);

function readPath (err, data){
    console.info('Response from function: ', data);
};

console.log('Test');