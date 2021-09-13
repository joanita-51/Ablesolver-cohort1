const fs = require ('fs')
const path = require('path')

const user = 'Joanita'
const PATH = path.join('/','Users',user,'Desktop/WORK SPACE/Solver Cohort 1/JS sessions/session10','server.js')

// fs.readFile (PATH, 'utf-8', (err, data)=>{
//     if (err) {
//       console.error(err)
//       return  
//     }
//     console.log(data)
// })
// /**
//  * Test asynchronous
//  * The line of code below will be output first because asynchronous dosen't block the thread.
//  * Yet the code from :7 to :13 is asynchronousand will take more time to execute than the line below
//  */
// console.log ('After file reading')

//Synchronous reading
try {
    const data = fs.readFileSync(PATH, 'utf-8')
    console.log(data)

} catch (err) {
    console.error(err)
}
console.log ('After file reading')