// const fs = require ('fs')
// fs.stat('test.txt', (err,stats)=>{
//     if (err) {
//         console.error(err)
//         return
//     }

//     console.log(stats)
//     process.stdout.write(stats)
// })

const fs = require('fs')
try{
    const stats = fs.statSync('test.txt')
    console.log(stats)
} catch (err){
    console.error(err)
}

console.log('After the stats')