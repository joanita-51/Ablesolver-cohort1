require('dotenv').config({path: __dirname + '/.env'})
const HTTP = require('http')
const { hostname } = require('os')
const HOSTNAME ='127.0.0.1' //local host
const PORT = process.env.PORT || 8888

const SERVER = HTTP.createServer((request, response) =>{
    response.statusCode = 200
    response.setHeader('Content-Type','text/plain')
    //To send environment variables at the process you can do 
    // ENV_NAME=ENV_VALUE node filename at the CLI
    //OR add them to the .env file.
    //Then add the dotenv package to your node app
    // -> yarn add dotenv or npm add dotenv
    // -> require('dotenv').config() recommended be added at the top of the file
    //Tip: Always ignore the .env and node_modules using .gitignore feature
    let { SALT } = process.env
    response.end(process.env.PUBLIC_KEY)
    
    let {APP_NAME} =process.env
    response.end(`${APP_NAME}\n ${process.env.PUBLIC_KEY}`)
    
})

SERVER.listen(PORT, HOSTNAME,()=>{
    console.log(`The server is running at ${HOSTNAME}:${PORT}`)

})


//How to terminate the node process without using the unsafe CTRL + C (Windows) or Control + C (Mac)
//Signal Terminate

process.on('SIGTERM', () => {
    SERVER.close(() => {
      console.log(`${process.pid} Process terminated`);
    });
  });
  
  //The process will be terminated after 5 minutes
  setTimeout(()=> process.kill(process.pid, "SIGTERM"), 36000000);
