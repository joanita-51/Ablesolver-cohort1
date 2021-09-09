const fs = require ('fs')
fs.open ('./.gitignore','r',(err,fd)=>{
    console.log(fd)
})
fs.open ('./.gitignore','r+',(err,fd)=>{
    console.log(fd)
})
fs.open ('./logs','w+',(err,fd)=>{
    console.log(fd)
})
try {
    const fd = fs.openSync('test.txt', 'w+')
    console.log('openSync' +fd)
    fs.closeSync(fd)
    console.log('After closing' +fd)
} catch (err) {
    console.error(err)
}
