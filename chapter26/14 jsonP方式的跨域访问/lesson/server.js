
const http = require('http');
const url = require('url');


const server = http.createServer((req, res) => {
  const { pathname, query } = url.parse(req.url, true);

  console.log(pathname, query);

  res.end(`${query.callback}(1,6)`); // abc(1,6)

});

server.listen(3000, () => {
  console.log('Server is running on port 3000');
});

