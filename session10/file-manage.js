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
/**
 * Quizz add the description of fs.open or fs. openSync file nodes below.
 * File reading nodes.
 * r, r+, w+, a and a+
 * r:  open the file for reading. The file is not created if not existing
 * r+:open the file for reading and writing, if file don't exist it won't be created.
 * w+:open the file for reading and writing, positioning the content being written at the beginning of the file. The file is created if not existing
 * a: open the file for writing, positioning the stream(content) at the end of the file. The file is created if not existing
 * a+: open the file for reading and writing, positioning the stream(content) at the end of the file. The file is created if not existing
 */