const inquirer = require('inquirer')

const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'Username'
    },
    {
        type: 'password',
        name: 'password',
        message: 'Password'
    }
]
const PASSWORD ='123456'
inquirer.prompt(questions).then((answers)=> {
    let {name, password} = answers
    if(password === PASSWORD)
        console.log(`Hi ${name} you've successfully logged in.`)
    else
        console.log(`Hi ${name}, Check your password`)    
})