
const http = require('http');
const fs = require('fs');


const server = http.createServer(async (req, res) => {

  if (req.method === 'OPTIONS') {
    res.writeHead(204, {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST',
      'Access-Control-Allow-Headers': 'Content-Type'
    });
    res.end();
    return
  }
  if (req.method === 'POST' && req.url === '/send') {

    // res.writeHead(200, {
    //   'Access-Control-Allow-Origin': '*',
    //   "Content-Type": "text/plain;charset=utf-8"
    // });
    // res.end('文件上传成功');
    var fileData = [];
    req.on('data', function (chunk) {
      fileData.push(chunk);
    });

    req.on('end', function () {
      var data = Buffer.concat(fileData);
      // 处理完整的数据
      fs.writeFile('ok1111.png', data, function (err) {
        if (err) {
          // 文件保存失败，进行错误处理
          console.log('fail')
          res.writeHead(500, { 'Content-Type': 'text/plain', 'Access-Control-Allow-Origin': '*', });
          res.end('error');
        } else {
          // 文件保存成功
          console.log('success')
          res.writeHead(200, { 'Content-Type': 'text/plain', 'Access-Control-Allow-Origin': '*', });
          res.end('123123');
        }

      }
      );
      // console.log('success no')
      // res.writeHead(200, { 'Content-Type': 'text/plain', 'Access-Control-Allow-Origin': '*', });
      // res.end('success');
    });







  }
})

server.listen(3000, () => {
  console.log('server is running at http://localhost:3000');
})