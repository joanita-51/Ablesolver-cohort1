  
let doLoginOnSumbit = (event) => {
    event.preventDefault()

    const USERNAME = document.querySelector('#username')
    const PASSWORD = document.getElementById('password').value

    const FORM = document.getElementById('login')

    console.log(USERNAME.value, PASSWORD)

    return false
}

let doLoginOnClick = () => {
    const USERNAME = document.querySelector('#username').value
    const PASSWORD = document.getElementById('password').value

    const FORM = document.getElementById('login')

    //Here you can use the JavaScript fetch or axios library to pass the information the API

    if (USERNAME == '' || PASSWORD == '') {
        alert('All fields are required')
        return false
    }

    console.log(USERNAME, PASSWORD)

    let userInfo = {
        'username': USERNAME,
        'password': PASSWORD
    }

    let userInfoJSON = JSON.stringify(userInfo)
    localStorage.setItem('user', userInfoJSON)

    alert('Login successful')
    
    document.getElementById("login").reset();
    // document.getElementById("login").submit();
    // document.getElementById("username").value = ''
    // document.getElementById("password").value = ''

    return true
}

 module.exports = {
    doLoginOnSumbit,
    doLoginOnClick
 }