/**
 * Streams are an efficient way of handling file, network communication and information exchange
 * Compared to traditional file reading methods which store the entire file in memory before processing, streams read small chunks inorder to process files piece by piece . This makes it quite efficient. 
 */

// Example of traditional file reading 
const http = require ('http')
const fs = require('fs')
const server = http.createServer((request,response)=>{
    fs.readFile(`${__dirname}/big.txt`,(error, data)=>{
        if (error){
            return console.error(error)
        }
        response.end(data)
    })
})

server.listen(5890, ()=>console.log('Server listening on port 5890'))