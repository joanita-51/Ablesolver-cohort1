setTimeout(()=>{
    console.log('Run after 2 seconds')
}, 2000);

setTimeout(()=>{
    console.log('Run after 50 milliseconds')
}, 50);

// setTimeout with params
let greeting = (name, msg)=>console.log(`${msg} ${name}`)
setTimeout(greeting,1000, 'David', 'Hola')
setTimeout(greeting,500,'Anita', 'Agandi')