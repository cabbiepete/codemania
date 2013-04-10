var http = require('http');

req = http.get('http://nodejs.org/api/', onGet)
  .on('error', function(e) {
    console.log('problem with request: ' + e.message);
   });

function onGet(res) {
  res.on('data', function(chunk) {
    console.log('data:' + chunk);
  });
}
