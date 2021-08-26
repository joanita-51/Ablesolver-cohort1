// //Async/await 

// const { result } = require("lodash")

// //1. Simplest example
// const BETTER_PROMISE = async () =>{
//     return `Indeed awesome!`
// }

// // //const BETTER_PROMISE_CONSUMER = BETTER_PROMISE ()
// // //console.log (BETTER_PROMISE_CONSUMER) will output => Promise {'Indeed awesome
// // //To output the actual string(value)
// // BETTER_PROMISE ().then (result => console.log(result))

// //2. Chaining Promises in Async/await
// const WAIT_FOR_BETTER_PROMISE = async () => {
//     const HOLD_VALUE_FROM_BETTER_PROMISE = await BETTER_PROMISE ()
//     const NOT_ALLOWED = [null, false, "", undefined, []]
//     return !NOT_ALLOWED.includes(HOLD_VALUE_FROM_BETTER_PROMISE)
//         ?
//         `${HOLD_VALUE_FROM_BETTER_PROMISE} Async/await does.`
//         : new Error ('Promise did not resolve')

// } 
// WAIT_FOR_BETTER_PROMISE().then(result =>{
//     result += '\n Good bye!'
//     console.log(result)
// }).catch(error=>console.log(error))

//Import the file system module 'fs' promises ans assign it to a variable
const FS = require('fs').promises

const READ_FILE = async (fileName) => {
    let results = await FS.readFile(fileName, 'utf8')
    return Buffer.from(results).toString()
}

READ_FILE('readme.md')
    .then(result => console.log(result))
    .catch(error => console.error(error))

