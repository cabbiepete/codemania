var fs = require('fs');
var os = fs.createWriteStream('./file2.txt');
os.write('Some text\n');
os.write('Some text2\n');
console.log('Wrote file2.txt');
