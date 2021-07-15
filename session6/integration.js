 let firstName, fullName

 firstName = (name = '')=>{
    return name
}

fullName = (first_name = '', last_name='')=>{
    return first_name + ' '+ last_name
}

module.exports = {
    firstName,
    fullName
}

