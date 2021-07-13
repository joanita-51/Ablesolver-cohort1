let sum = (num1, num2) =>{
   // if(typeof a == 'undefined') return false
   // if(typeof b == 'undefined') return false
   if (typeof num1 !== 'number' || typeof num2 !== 'number') return false

   return num1 + num2 ;
}
console.log(sum(5,6))
//console.log(sum (o,6)) //This can be very hard to troubleshoot because thhe system compiler won't return clear error message
//npconsole.log(sum(10, '90'))

module.exports = sum