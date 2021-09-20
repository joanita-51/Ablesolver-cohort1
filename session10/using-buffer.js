/*Create a buffer*/
const buffer = Buffer.from('My name is Anita')

/*Access the content of the buffer like an array */
console.log(buffer[2])

/* Convert the buffer to a string*/
const bufferStr = buffer.toString()

/*Acess part of the string*/
console.log(bufferStr[0])

/*Writing the buffer */

const countryBuffer = Buffer.alloc(4)
//Writing a string whose length will be larger than the alllocated bytes will truncate the sting */
countryBuffer.write('Uganda')
console.log(countryBuffer.toString())//This will give us Ugan instead of Uganda

const countriesBuffer = Buffer.alloc(4)
const ountries = ['Uganda', 'Tanzania', 'Kenya', 'Rwanda']
//countriesBuffer.write(countries) //This won't work because buffer.write accepts string yet the countries is an array
console.log(countriesBuffer)

//Slicing a buffer : To access a portion of it
const buf = Buffer.from('Hey!')

//Use the subarray()to slice.
const bufSubArray = buf.subarray(0)
const bufSubArrayStr = bufSubArray.toString()
console.log(bufSubArrayStr)

const sliceOfTheFirstTwo = buf.subarray(0,2)
console.log(sliceOfTheFirstTwo.toString())
buf[1] = 111 //
console.log(bufSubArray.subarray(0,2).toString())
console.log(bufSubArray.toString())
