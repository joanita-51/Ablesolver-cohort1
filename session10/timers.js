// setTimeout(()=>{
//     console.log('Run after 2 seconds')
// }, 2000);

// setTimeout(()=>{
//     console.log('Run after 50 milliseconds')
// }, 50);

// // setTimeout with params
// let greeting = (name, msg)=>console.log(`${msg} ${name}`)
// setTimeout(greeting,1000, 'David', 'Hola')
// setTimeout(greeting,500,'Anita', 'Agandi')

//Assign setTimeout id to a variable for future use. (setTimeout ID usecase)
const SET_TIME_OUT_ID = setTimeout(()=> console.log('Hello Champions !'), 5000)

const INQUIRER = require('inquirer');
const QUESTIONS = [
    {
        type: "input",
        name:"number",
        message:"Enter any number",

    }
];

INQUIRER.prompt(QUESTIONS).then ((answers)=>{
    let {number} = answers;

    if (number ==3) {
        clearTimeout(SET_TIME_OUT_ID)
        console.log("setTimeout wouldn't run")
    } else {
        console.log(SET_TIME_OUT_ID)
    }
});