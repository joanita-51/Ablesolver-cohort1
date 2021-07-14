let handleName = (name)=>{
    //Do not handle morethan one name. We know that names are separated by space.
    let nameChunks = name.split(" ")
    //Check if the nameChunks is an object whichis also an array in Javascript and return out of the code.
    if (typeof nameChunks==='object'&& nameChunks.length>1) return false;

    //Use string.charAt(index)to get the first letter of the string which is name
    //Then chain to UpperCase() to convert the given letter to uppercase
    let firstLetterToUpperCase = nameChunks[0].charAt(0).toUpperCase()

    //Use strings.slice(start,end) to extract remaining letters from the given string which is name
    let otherLetters = nameChunks[0].slice(1)

    //string.slice(1) returns all the letters after the letter at index 0
    //Then chain toLowerCase() to transform the remaining characters to lowercase
    let otherLettersToLowerCase = otherLetters.toLowerCase()

    //Concatenate the first letter which in uppercase to others which are in lowercase at this level and assign to the name
    let newName = `${firstLetterToUpperCase}${otherLettersToLowerCase}`

    //Return the new name
    return newName
}

module.exports = handleName

console.table(handleName("Joanita")) //0 =>Joanita
console.table(handleName("Joanita Nakityo")) //False