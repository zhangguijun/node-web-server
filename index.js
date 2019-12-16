const http = require('http')

const querystring = require('querystring')

const server = http.createServer((req, res) => {
  console.log(req.method)

  const url = req.url;
  console.log(url)

  req.query = querystring.parse(url.split('?')[1])
  console.log(req.query)

  res.end(JSON.stringify(req.query))
})

server.listen(8000)

console.log('server running in 8000 port')
