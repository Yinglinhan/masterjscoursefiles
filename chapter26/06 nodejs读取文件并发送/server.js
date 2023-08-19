const http = require('node:http');
const fs = require('node:fs');
const url = require('node:url');

// const data = fs.readFileSync('b.txt', 'utf8')


//http://localhost:3000/getjson

//http://localhost:3000/getimg

//http://localhost:3000/gethtml


const server = http.createServer((req, res) => {
  // res.writeHead(200, { 'Content-Type': 'text/plain;charset=utf-8' });
  // res.end('hellocode');
  const { pathname, ...rest } = url.parse(req.url, true)
  console.log(pathname)
  if(pathname === '/gethtml'){
    fs.readFile('test.html', (err, data) => {

      if (err) {
        // 如果读取文件出错，返回错误响应
        res.writeHead(500, { 'Content-Type': 'text/plain;charset=utf-8' });
        res.end('Internal Server Error');
  
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' });
        res.end(data)
  
      }
    })

  }else if(pathname === '/getimg'){


    fs.readFile('test.png', (err, data) => {

      if (err) {
        // 如果读取文件出错，返回错误响应
        res.writeHead(500, { 'Content-Type': 'text/plain;charset=utf-8' });
        res.end('Internal Server Error');
  
      } else {
        res.writeHead(200, { 'Content-Type': 'image/png' });
        res.end(data)
  
      }
    })

  }else if(pathname === '/getjson'){

    fs.readFile('test.json', (err, data) => {

      if (err) {
        // 如果读取文件出错，返回错误响应
        res.writeHead(500, { 'Content-Type': 'text/plain;charset=utf-8' });
        res.end('Internal Server Error');
  
      } else {
        res.writeHead(200, { 'Content-Type': 'application/json;charset=utf-8' });
        res.end(data)
  
      }
    })
  
  }
  



})

server.listen(3000, () => {
  console.log('server is running on port 3000')
})







// try {
//   const data = fs.readFileSync('b.txt', 'utf8')
// } catch (err) {
//   console.log(err)
// }


