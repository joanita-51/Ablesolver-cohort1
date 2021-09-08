
const https = require('https')

const data = new TextEncoder().encode(
  JSON.stringify({
    todo: 'Buy the milk 🍼'
  })
)

const options = {
    hostname : 'jsonplaceholder.typicode.com',
    port: 443,
    path: '/todos',
    headers: {
       'content-Type' : 'application/json',
       'content-Length': data.length
    }
}

const request = https.request(options, response =>{
    console.log(`statusCode: ${response.statusCode}`)

    response.on ('data', returnedData =>{
        process.stdout.write(returnedData)
    })
})

request.on ('error', error => console.error(error))

request.write(data)
request.end()



