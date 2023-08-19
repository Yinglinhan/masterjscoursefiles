const http = require('node:http');
const url = require('node:url');
// console.log(http)

const server = http.createServer((req, res) => {
  // console.log()
  // const query = url.parse(req.url, true).query;
  // console.log(query)
  console.log(req.method)
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.write('hahaahaha12313')
  res.write('hahaahaha5112')
  res.end();
})

server.on('error', (err) => {

})

server.listen(8888, () => {
  console.log('已经开始监听8888端口');
})