const http = require('http')

const server = http.createServer((req, res) => {
     const url = req.url
 switch (url) {
     case '/':
          res.end('<h1>Home Page</h1>')
          break;

     case '/about':
          res.end('<h1>About Page</h1>')
          braak;
     case '/Contact':
               res.end('<h1>Contact Page</h1>')
               braak;

     default:
          res.end('<h1>Page Not Found<h1></h1>')
          break;
 }


})

const port = process.env.PORT
server.listen(port)