const inquirer = require('inquirer')
const districts = require('./Uganda-districts')

const questions = [
    {
        type : 'list',
        name: 'question',
        message: 'Do you want to see the districts of Uganda?',
        choices: ['Yes', 'No']
    }
]

inquirer.prompt(questions).then(answer => {
    let { response } = answer
    if (response == 'Yes') {
        if(districts.length > 0)
            console.log(districts.join("\n"))
    }
    else
    console.log('Okay! Good bye')
  
})