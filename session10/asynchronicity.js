// const { reject } = require("lodash")

// /**
//  * Promises are alternatives to callback
//  * Because callbacks can make code look complidcated hence had to maintain
//  * They are 2 parts to them.
//  * 1. Definition of the promise
//  * 2. Usage of the promise/consuming
//  */
// const DONE = true
// // Definition of the promise
// const IS_IT_DONE = new Promise((resolve, reject) => { 
//   const SUCCESS = 'Promise resolved '
//   if (DONE) {
//     resolve(SUCCESS) //Was passed as an argument to the constructor
//   }
//   else
//   {
//     const FAILURE = 'Promise failed'
//     reject(FAILURE); //was passed as an argumwnt to the constructor
//   }
// })
// //Usage
// const CHECK_IF_DONE = () => {
//   IS_IT_DONE 
//   .then (result => console.log(result))
//   .catch(error => console.log (error))
// }
// //Invoke the checker.
// CHECK_IF_DONE()

// const FS = require ('fs')

// const READ_FILE = (fileName) => {
//   //Create and return a promise
//   return new Promise ((resolve, reject) => {
//     //use the readFilename, encoding, callback) method of the fs module
//     FS.readFile(fileName, 'utf8', (err, data) => { //Specify the encoding to get a readable buffer
//       if (err){
//         reject (err) //Reject the promise
//         return //And stop code with data
//       }
//       resolve (data) //Resolve with data
//     })
//   })
// }

// //Use the promise above
// READ_FILE('./readme.md')
// .then(data => console.log(data))
// .catch(error => console.log(error))

const fetch = require('node-fetch')
const STATUS = response =>{
  let {status, statusText} = response
  if(status >= 200 && status < 300)
    return Promise.resolve(response)
  return Promise.reject (new Error (statusText))  
}

const JSON = response => response.json()
fetch("https://jsonplaceholder.typicode.com/todos")
  .then(STATUS)
  .then(JSON)
  .then((data) => {
    console.log(data);

  })
  .catch((error) => console.log(error));