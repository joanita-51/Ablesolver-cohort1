//Events
let notify = () => {
    return 'Invent executed'
}

let validateInput = (input) => {

    let value
    
    const ALLOWED_TYPES = ['string', 'number'] //Specify the acceptable data type of the input
    
    if( ! ALLOWED_TYPES.includes( typeof input ) ) // Compare the typeof input with the acceptable data types.
        value = input.target.value
    else
        value = input

    let result = /[aA-zZ]/g.test(value) // Regular expression to test if the input has at least alphabet character

    return result // true or false
}

// Select the HTML/DOM element with the id attribute called message
const MESSAGE_ELEMENT = document.getElementById('message')

// Check if the select element is not null. Other-words you're testing of the element exists in the webpage
if (MESSAGE_ELEMENT != null) {
    //Add an event listener to listen whenever the input has gone to blur mode.
    // Read more about JavaScript events

    MESSAGE_ELEMENT.addEventListener('blur', (event) => {
        let result = validateInput(event)
        const ERROR_PARAGRAH = document.querySelector("#error-msg");
        if (result === false) {
            MESSAGE_ELEMENT.style.border = '1px solid #f00'
            ERROR_PARAGRAH.style.display='block'
        }
        else {
            MESSAGE_ELEMENT.style.border = "1px solid #00000009";
            ERROR_PARAGRAH.style.display = "none";
        }
    })
}
// Remove this peace of code after unit testing  
// module.exports = {
//     notify,
//     pickInfo
// }