const https = require('https')
const options = {
    hostname: 'example.com',
    port: 443,
    path:'/todos',
    method: 'GET' // reading information from a given path
}

const request = https.request (options, (response) => {
    console.log(`statusCode ${response.statusCode}`)

    response.on ('data', returnedData => process.stdout.write(returnedData))
})

request.on ('error', (error)=>console.error(error))

request.end()