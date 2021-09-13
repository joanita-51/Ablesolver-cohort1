const path = require ('path')

const user = 'Anita'
//Creating a path using path.join (separator, ...n)

const PATH = path.join('/','Users',user,'logs.txt')
console.log(PATH)

const PATH2 = path.join('/','Users',user,'option-dir','opt2','logs.txt')
console.log(PATH2)

//Get absolute path of the file
const absPath = path.resolve('file.txt')
console.log (absPath)

const absPath2 = path.resolve('tmp','file.txt')
console.log (absPath2)