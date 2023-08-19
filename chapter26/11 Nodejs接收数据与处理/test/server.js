// const http = require('node:http');
// const formidable = require('formidable');

// import http from 'node:http';
// import formidable, { errors as formidableErrors } from 'formidable';
const http = require('http');
const fs = require('fs');
const { formidable, errors: formidableErrors } = require('formidable');

const server = http.createServer(async (req, res) => {
  // console.log(11, req.url, req)
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
    // console.log(formidable)
    // res.writeHead(200, {
    //   'Access-Control-Allow-Origin': '*',
    // })
    // res.end('文件上传成功');


    const form = formidable();
    try {
      console.log(222, form)
      data = await form.parse(req);
      console.log(data)
      fs.rename(data[1].myimg[0].filepath, './' + data[1].myimg[0].originalFilename, (err) => {
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
})

server.listen(3000, () => {
  console.log('server is running at http://localhost:3000');
})