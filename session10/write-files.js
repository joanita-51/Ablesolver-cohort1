/*
const fs = require('fs')
const content = 'This is written using NodeJS fs.writeFile() API'// You can also fetch this content from somewhere else
//Asynchronous 
fs.writeFile('test1.txt',content, err=>{
    if (err){
        console.error(err)
        return   //Return out of the function if there was an error
    }
    //file writtten successfully
    console.log ('Yes, we did it!')
    console.log ('Content has written to the file successfully!')
})
*/

//Synchronous
const fs = require('fs')
const path = require('path')
const filepath = path.resolve('test2.txt')

let content = 'This is written synchronously and the path has been generated with path module. '

try{
    content = `${content}\n ${filepath}`

    const data = fs.writeFileSync(filepath, content)
    //file written successfully
    console.log (`Yeap!\n You have written to the file.`)
}catch (err){
    console.error(err)
}

let content2 = '\n And this must not overwrite the content too but we desire to read from the file as well.\n'

try {
    //Append to the file instead of overwriting it's content.
    fs.writeFileSync(filepath, content2, {flag:'a'})
    //file written successfully
    console.log('Yes!\n You have written to the file.')
    
} catch (err) {
    console.error(err)
}