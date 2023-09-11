var fs = require('fs');
var stream = fs.createReadStream('readme.txt');
stream.setEncoding('utf8');
var data = '';
stream.on('data', function (chunk) {
  data += chunk;
})

stream.on('end', function () {
  console.log('Data length: %d', data.length, data);
});