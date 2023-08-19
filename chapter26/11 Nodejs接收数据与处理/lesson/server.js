const http = require('http');
const fs = require('fs');
const url = require('url');
const querystring = require('querystring');
const { formidable, errors: formidableErrors } = require('formidable');

const path = require('path');
const mime = require('mime');

// __dirname: 当前文件所在的目录

const server = http.createServer(async (req, res) => {
  const { pathname, query } = url.parse(req.url, true);
  console.log(pathname);

  if (pathname === '/send-query') {
    // GET 通过url携带数据
    console.log(req.url, 'get come');
    console.log(query);
    res.writeHead(200, {
      'Content-Type': 'text/html;charset=utf-8'
    });

    res.end('get请求成功');
  }

  if (pathname === '/send-post') {

    const data = []
    req.on('data', (chunk) => {
      data.push(chunk)
    })


    req.on('end', () => {

      const body = Buffer.concat(data).toString();
      console.log(body, 'post come');
      // const obj = querystring.parse(body);
      // const obj = JSON.parse(body);
      // console.log(obbodyj);

      res.writeHead(200, {
        'Content-Type': 'text/html;charset=utf-8'
      });

      res.end('post请求成功');
    })



    // res.writeHead(200, {
    //   'Content-Type': 'text/html;charset=utf-8'
    // });

    // res.end('get请求成功');
  }


  if (pathname === '/send-png') {
    const data = []
    req.on('data', (chunk) => {
      data.push(chunk)
    })
    req.on('end', () => {

      const body = Buffer.concat(data)

      fs.writeFile('./test.png', body, (err) => {
        if (err) {
          console.log(err);
        }
      })

      console.log(body, 'post come');
      // const obj = querystring.parse(body);
      // const obj = JSON.parse(body);
      // console.log(obbodyj);

      res.writeHead(200, {
        'Content-Type': 'text/html;charset=utf-8'
      });

      res.end('post请求成功');
    })
  }

  if (pathname === '/send-form') {
    const form = formidable();
    try {
      // console.log(222, form)
      data = await form.parse(req);
      console.log(data)
      fs.rename(data[1].pngImg[0].filepath, './' + data[1].pngImg[0].originalFilename, (err) => {
        if (err) {
          console.log(err)
        }
      })

    } catch (err) {
      // example to check for a very specific error
      if (err.code === formidableErrors.maxFieldsExceeded) {

      }
      // console.error(err);
      console.log('error', err)
      res.writeHead(err.httpCode || 400, { 'Content-Type': 'text/plain', 'Access-Control-Allow-Origin': '*', });
      res.end(String(err));
      return;
    }
    res.writeHead(200, { 'Content-Type': 'text/plain', 'Access-Control-Allow-Origin': '*', });
    res.end('success');
  }

  if (pathname === '/send-blob') {
    const data = []
    req.on('data', (chunk) => {
      data.push(chunk)
    })
    req.on('end', () => {

      const body = Buffer.concat(data)
      const Int32ArrayData = new Int32Array(body)
      console.log(Int32ArrayData)
      // fs.writeFile('./test.png', body, (err) => {
      //   if (err) {
      //     console.log(err);
      //   }
      // })

      console.log(Int32ArrayData, 'blob come');

    })


    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('success blob');
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
