const http = require('http');
const fs = require('fs');
const url = require('url');
const querystring = require('querystring');
const Jimp = require('jimp');

const path = require('path');
const mime = require('mime');

// __dirname: 当前文件所在的目录

const server = http.createServer(async (req, res) => {
  const { pathname, query } = url.parse(req.url, true);

  if (pathname === '/send-png') {
    const data = []
    req.on('data', (chunk) => {
      data.push(chunk)
    })
    req.on('end', () => {

      const body = Buffer.concat(data)
      Jimp.read(body)
        .then((image) => {
          // 处理图像
          image.grayscale();
          image.getBuffer(Jimp.MIME_PNG, (err, buffer) => {
            if (err) throw err;

            // 发送响应
            res.writeHead(200, {
              'Content-Type': 'image/png',
              'Content-Length': buffer.length
            })
            res.end(buffer);
          });
        })
        .catch((err) => {
          console.error(err);
        });
 

    })
    return
  }

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

  }


})

server.listen(3000, () => {
  console.log('server is running at port 3000')
})
