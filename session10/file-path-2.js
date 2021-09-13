const path = require ('path')

const user = 'Anita'
const PATH = path.join('/','Users',user,'logs.txt')
console.log(PATH)

//Get absolute path of the file
const absPath = path.resolve('file.txt')
console.log (absPath)

const absPath2 = path.resolve('tmp','file.txt')
console.log (absPath2)