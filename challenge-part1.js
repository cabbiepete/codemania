var http = require('http')
  , util = require('util')
  , urlLib = require('url')
  , fs = require('fs');

var url = process.argv[3];
var filename = process.argv[2];
if (typeof filename == 'undefined') {
  filename = process.env.CDM_OUTPUT; 
}

if (typeof url == 'undefined') {
  console.log("what url should I load?");
  process.stdin.resume();
  process.stdin.setEncoding('utf8');
  process.stdin.on('data', function(text) {
    //console.log("text: "+text);
    var parsedUrl = urlLib.parse(text);
//    console.log(util.format("url: ", parsedUrl));
    if (!(parsedUrl.protocol && parsedUrl.host && parsedUrl.path)) {
      console.log("sorry that doesn't look like a url try again");
    }
    else {
      process.stdin.pause();
      makeRequest(text);
    }
  });
}
else {
  makeRequest(url);
}

function makeRequest(url) {
  var req = http.get(url, onGet)
    .on('error', function(err) {
      console.log("problem with request: "+e.message);
    });
}

var responseHtml = fs.createWriteStream(filename); 

function onGet(res) {
  res.pipe(process.stdout);
  res.pipe(responseHtml);
}
