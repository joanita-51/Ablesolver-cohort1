//zero delay
setTimeout(()=>{
    console.log('after')
},0)
console.log('before')

setTimeout(()=>{
    console.log('The first')
},0)

setTimeout(()=>{
    console.log('The second')
},0)

//SetInterval Running a callback forever on specific intervals
setInterval(()=>{
    let date = new Date()
    console.log(date.toLocaleTimeString())
},1000);
