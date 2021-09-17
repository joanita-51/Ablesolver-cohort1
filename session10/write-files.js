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