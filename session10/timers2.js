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
