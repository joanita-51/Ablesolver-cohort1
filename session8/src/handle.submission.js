const USER_EMAIL = document.querySelector("#useremail");
const USER_PASSWORD = document.querySelector("#userpassword");
const REGISTER_FORM = document.querySelector("#register-form");

let handleSubmit = (event) => {

    event.preventDefault()

    let isValidEmail = CHECK_EMPTY(null, USER_EMAIL) 
    let isValidPassword = CHECK_EMPTY(null, USER_PASSWORD)

    if ( isValidEmail && isValidPassword ) {

        console.log(USER_EMAIL.value, USER_PASSWORD.value)

        REGISTER_FORM.reset()

        return true
    }

    console.log('Error')

}