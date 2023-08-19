const http = require('http');
const fs = require('fs');
const url = require('url');
const path = require('path');
const mime = require('mime');


const server = http.createServer((req, res) => {

  const reqUrl = req.url;
  const method = req.method;
  const { pathname } = url.parse(reqUrl, true);
  console.log(pathname)

  if (pathname === '/' && method === 'GET') {
    const filePath = path.join(__dirname, 'index.html');
    fs.readFile(filePath, (err, data) => {

      if (err) {
        res.writeHead(404, { 'Content-Type': 'text/html' })
        return res.end('<h1>404 Not Found</h1>')
      }
      const contentType = mime.getType(path.extname(filePath));
      res.writeHead(200, { 'Content-Type': contentType })
      res.end(data)
      return
    })


  } else if (method === 'GET') {
    const filePath = path.join(__dirname, pathname);

    fs.readFile(filePath, (err, data) => {

      if (err) {
        res.writeHead(404, { 'Content-Type': 'text/css' })
        return res.end('<h1>404 Not Found</h1>')
      }

      res.writeHead(200, { 'Content-Type': 'text/css' })
      res.end(data)
      return
    })
  }


  // res.end('hello world')
})

server.on('error', (err) => {
  console.log(err)
})

server.listen(3000, (err) => {
  console.log(999)
})