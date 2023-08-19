const http = require('node:http');
const fs = require('node:fs');
const url = require('node:url');



const server = http.createServer((req, res) => {
  // res.writeHead(200, { 'Content-Type': 'text/plain;charset=utf-8' });
  // res.end('hellocode');
  const { pathname, ...rest } = url.parse(req.url, true)

  if (pathname === '/gethtml') {
    fs.readFile('test.html', (err, data) => {

      if (err) {
        // 如果读取文件出错，返回错误响应
        res.writeHead(500, {
          'Content-Type': 'text/plain;charset=utf-8',
          'Access-Control-Allow-Origin': '*'
        });
        res.end('Internal Server Error');

      } else {
        res.writeHead(200, {
          'Content-Type': 'text/html;charset=utf-8',
          'Access-Control-Allow-Origin': '*'
        });
        res.end(data)

      }
    })

  } else if (pathname === '/getimg') {


    fs.readFile('test.png', (err, data) => {

      if (err) {
        // 如果读取文件出错，返回错误响应
        res.writeHead(500, { 'Content-Type': 'text/plain;charset=utf-8', 'Access-Control-Allow-Origin': '*' });
        res.end('Internal Server Error');

      } else {
        res.writeHead(200, { 'Content-Type': 'image/png', 'Access-Control-Allow-Origin': '*' });
        res.end(data)

      }
    })

  } else if (pathname === '/getjson') {

    fs.readFile('test.json', (err, data) => {

      if (err) {
        // 如果读取文件出错，返回错误响应
        res.writeHead(500, { 'Content-Type': 'text/plain;charset=utf-8', 'Access-Control-Allow-Origin': '*' });
        res.end('Internal Server Error');

      } else {
        res.writeHead(200, { 'Content-Type': 'application/json;charset=utf-8', 'Access-Control-Allow-Origin': '*' });
        res.end(data)

      }
    })

  } else if (pathname === '/getmp4') {

    fs.readFile('test.mp4', (err, data) => {

      if (err) {
        // 如果读取文件出错，返回错误响应
        res.writeHead(500, { 'Content-Type': 'text/plain;charset=utf-8', 'Access-Control-Allow-Origin': '*' });
        res.end('Internal Server Error');

      } else {
        res.writeHead(200, { 'Content-Type': 'video/mp4', 'Access-Control-Allow-Origin': '*' });
        res.end(data)

      }
    })

  } else if (pathname === '/base64') {


    fs.readFile('test.png', (err, data) => {

      if (err) {
        // 如果读取文件出错，返回错误响应
        res.writeHead(500, { 'Content-Type': 'text/plain;charset=utf-8', 'Access-Control-Allow-Origin': '*' });
        res.end('Internal Server Error');

      } else {
        const base64Image = data.toString('base64');
        // console.log(base64Image)
        res.writeHead(200, { 'Content-Type': 'text/plain', 'Access-Control-Allow-Origin': '*' });
        res.end(base64Image)

      }
    })



  }


  else {
    res.writeHead(404, { 'Content-Type': 'text/plain;charset=utf-8', 'Access-Control-Allow-Origin': '*' });
    res.end('404 Not Found')
  }




})

server.listen(3000, () => {
  console.log('server is running on port 3000')
})





