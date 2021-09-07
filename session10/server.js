const http = require('http')
const port = 8894

const server = http.createServer((request, response)=>{
    response.statusCode = 200
    response.setHeader('Content-Type', 'text/html')
    response.end(`<html>
    <head>
        <title> Sent by Node </title>
     </head>
     <body>
        <h1>Hello Solvers! </h1>
        <p>Good to catch up again !</p>
       </body>
       </html>    `)
})

server.listen(port, () => {
    console.log(`Am listening at ${port}`)
})