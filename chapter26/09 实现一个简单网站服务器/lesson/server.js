const http = require('http');
const fs = require('fs');
const url = require('url');
const path = require('path');
const mime = require('mime');

// __dirname: 当前文件所在的目录

const server = http.createServer((req, res) => {
  const { pathname } = url.parse(req.url, true);
  console.log(pathname, __dirname);

  if (pathname === '/') {
    fs.readFile('./index.html', (err, data) => {

      if (err) {
        res.writeHead(404, {
          'Content-Type': 'text/html'
        })
        res.end('找不到文件')
      }

      res.writeHead(200, {
        'Content-Type': 'text/html',
      })
      res.end(data)

    })
  } else {

    const filePath = path.join(__dirname, pathname);
    const contentType = mime.getType(path.extname(filePath));
    fs.readFile(filePath, (err, data) => {

      if (err) {
        res.writeHead(404, {
          'Content-Type': 'text/html'
        })
        res.end('找不到文件')
      }

      res.writeHead(200, {
        'Content-Type': contentType,
      })
      res.end(data)

    })


    // res.writeHead(404, {
    //   'Content-Type': 'text/html'
    // })
    // res.end('文件找不到')
  }


})

server.listen(3000, () => {
  console.log('server is running at port 3000')
})
