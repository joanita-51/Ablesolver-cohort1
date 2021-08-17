
exports.customMath = {
    name: 'custom Math',
    add: (num1, num2) => num1 + num2,
    subtract : (num1, num2) => num1 - num2,
    //product: (numbers =[])=>{
    //    return numbers.reduce((accumulator, currentValue)=> accumulator * currentValue)
    //}
    product : (numbers = []) =>
        numbers.reduce((accumulator, currentValue) => accumulator * currentValue),
    division:  (num1, num2) => num1 / num2 
   
}

exports.something = {title: 'Test purposes'}


