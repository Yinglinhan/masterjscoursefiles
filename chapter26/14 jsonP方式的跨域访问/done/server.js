
const http = require('http');
const url = require('url');


const server = http.createServer((req, res) => {

  const { pathname, query } = url.parse(req.url, true);

  console.log(pathname, query.cb);

  res.end(`${query.cb}(4,5)`);

});

server.listen(3000, () => {
  console.log('Server is running on port 3000');
});
