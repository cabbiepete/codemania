var fs = require('fs');
fs.createReadStream('./file2.txt', {encoding:'utf8',
  bufferSize:5}).
  on('data', function(chunk) {
    console.log('data:' + chunk);
  }).
  on('error', function(err) {
    throw err;
  });
