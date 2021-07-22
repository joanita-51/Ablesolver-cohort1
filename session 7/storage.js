  
// There are many ways of storing data in JavaScript
// Which can be categorized into two primary categories
// 1. Client => Cookies, Sessions, LocalStorage
// 2. Server (Node) => SQL Databases e.g MySQL & NoSQL Databases like MongoDB
// Cookies enable storage of strings in a user's browser.
// we use document.cookie which is part of DOM
// Cookies are stored as key/value pairs.
// Separate key/value pairs with a semi-colon: e.g username=username; password=password
// document.cookie = "device=Macbook Pro 2018, 8GB RAM"
// let cookieValue = document.cookie
// console.log(cookieValue)

const DECODED_COOKIE = decodeURIComponent(document.cookie)
const SPLIT = DECODED_COOKIE.split(";");
// console.log(SPLIT)

// date = new Date()

// localDate = date.toLocaleDateString()
// localTime = date.toLocaleTimeString()

// let userInfo = "userInfo=David Wampamba, Macbook Pro 2018, 8GB RAM; "

// document.cookie = userInfo

// document.cookie = "date=" + localDate
// document.cookie = "time=" + localTime

// let userInfoStored = document.cookie
// console.log(userInfoStored)

let setGetItNowTime = () => {
    let now = new Date()
    let time = now.toTimeString()
    now.setTime(now.getTime() + (1 * 24 * 60 * 60 * 1000))
    let expire = now.toUTCString()
    document.cookie =`getNowClick=${time}; expires=${expire}; path=/get-it-now`;
}

// Quiz: Write a program that stores a cookie will expire 20days after it's created and make sure that the cookie is HttpOnly

//2. sessionStorage
//Session storage is used to store data at the active state of the web page.
//Like cookies, sessionStorage is also a key/value pair but difference is in the use of a sessionStorage function and we can't set expiry time for the sessionStorage data.
//Once the web page is closed the data stored with sessionStorage is removed/delete unless it's set when the web page is reloaded.

sessionStorage.setItem('name', 'David')
sessionStorage.setItem('town', 'Kansanga')
sessionStorage.setItem('town', 'Bunga')

sessionStorage.removeItem('town')

let myName = sessionStorage.getItem('name')
console.log(myName)

//3. localStorage
// It is quite similar to sessionStorage but here the data is persisted in the user's browser even when it get's closed. So whenever you visit the same the website that set the localStorage the data will be available until explicitly deleted.

localStorage.setItem('name', 'David Wampamba')
localStorage.removeItem('name')
localStorage.setItem('city', 'Kampala')
let city = localStorage.getItem('city')
console.log(city)
localStorage.setItem('city', 'Nairobi')

city = localStorage.getItem("city");
console.log(city);

// How can we store more values in one key
//Imagine you have a key called invoice and you to store invoice about it. 
//Such as the invoice number, amount, items
// We introduce JSON.
