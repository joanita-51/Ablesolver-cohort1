const inquirer = require('inquirer')
const districts = require('./Uganda-districts')

//Describe or define the question[s] that the inquirere will use 
//Each question is an object literal {} not objest instance
const questions = [
    {
        type : 'list',
        name: 'question',
        message: 'Do you want to see the districts of Uganda?',
        choices: ['Yes', 'No']
    }
]

//Use the inquirer library to output a question  to the CLI and pick input
inquirer.prompt(questions).then(answer => {
    let { response } = answer
    if (response == 'Yes') {
        if(districts.length > 0)
            console.log(districts.join("\n"))
    }
    else
    console.log('Okay! Good bye')
  
})