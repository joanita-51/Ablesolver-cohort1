const HTTP = require('http')
require('dotenv').config()
const {HOSTNAME, PORT} = process.env

const SERVER = HTTP.createServer((request,response)=>{
    response.statusCode =200
    response.setHeader('Content-Type','text/plain')
        let {APP_NAME} = process;
        
    response.end(`${APP_NAME}\n ${process.env.PUBLIC_KEY}`)    
})
SERVER.listen(PORT,HOSTNAME, () => {
    console.log(`The server is running at ${HOSTNAME} : ${PORT}`)

    process.on("SIGTERM", () => {
        SERVER.close(()=>{
            console.log(`${process.pid} Server connection closed`)
        })
    })
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout,
      });
      
      readline.question(`Enter Quit|quit|q|Q to close connection\n`, input => {
        //console.log(`Hi ${input}!`);
        let accepted = ['Quit','quit', 'q', 'Q']
        accepted.includes(input) ? process.kill(process.pid,"SIGTERM"): console.log(`You entered ${input}`)
    
       // readline.close();
      })
})

