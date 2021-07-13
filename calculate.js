let sum = (num1, num2) =>{
      if (typeof num1 !== 'number' || typeof num2 !== 'number') return false

   return num1 + num2 ;
}
console.log(sum(5,6))

let subtract = (num1 , num2) =>{
   if (typeof num1 !== 'number' || typeof num2 !== 'number') return false

   return num1 - num2
}

module.exports = {
   sum,
   subtract
}

/**
 * Example of destructuring
 */
const person ={
   'firstname':'Joanita',
   'lastname':'Nakityo',
   'middlename':'Nita',
   'town':'Lyantonde'
}
//Destructured variables
const {firstname, lastname} = person

console.log(firstname);

//Name destructured variables
console.log(person["firstname"]);
console.log(person.firstname);
