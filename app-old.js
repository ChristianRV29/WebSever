const http = require('http')

http
  .createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' })

    res.write(JSON.stringify({ name: 'John', lastName: 'Doe' }))

    res.end()
  })
  .listen(8081)
