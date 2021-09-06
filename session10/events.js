const EVENTS_EMITTER = require('events')
const EVENTS_EMIT = new EVENTS_EMITTER()

//1. Handle the event or listen

EVENTS_EMIT.on('start', () => {
    console.log('Event started')
})
//2. Emit the event

EVENTS_EMIT.emit('start')

//Arguments to events

EVENTS_EMIT.on('sum', (num1, num2) => {
    console.log(`${num1} + ${num2} = ${num1 + num2}`)
})

// EVENTS_EMIT.emit('start', 4, 10)

const INQUIRER = require('inquirer')

const QUESTIONS = [
    {
        type: 'input',
        name: 'number1',
        message: 'Enter 1st number',
    },
    {
        type: 'input',
        name: 'number2',
        message: 'Enter 2nd number',
    }        
]

INQUIRER.prompt(QUESTIONS).then(answers => {
    let { number1, number2 } = answers
    number1 = parseInt(number1)
    number2 = parseInt(number2)
    
    if ( number1 > 0 && number2 > 0) {
        console.log('Condition passed')
        EVENTS_EMIT.emit('sum', number1, number2)
    }
})
