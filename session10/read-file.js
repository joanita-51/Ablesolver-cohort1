const fs = require ('fs')
const path = require('path')

const user = 'Joanita'
const PATH = path.join('/','Users',user,'Desktop/WORK SPACE/Solver Cohort 1/JS sessions/session10','server.js')

fs.readFile (PATH, 'utf-8', (err, data)=>{
    if (err) {
      console.error(err)
      return  
    }
    console.log(data)
})