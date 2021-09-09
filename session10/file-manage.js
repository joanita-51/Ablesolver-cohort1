const fs = require ('fs')
fs.open ('./.gitignore','r',(err,fd)=>{
    console.log(fd)
})
fs.open ('./.gitignore','r+',(err,fd)=>{
    console.log(fd)
})
