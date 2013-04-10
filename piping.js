var https = require('https');

req = https.get('https://api.github.com/users/glennblock/repos',onGet); 

function onGet(res) {
  res.pipe(process.stdout);
}

req.on('error', function(e) {
  console.log('problem with request: ' + e.message);
});
