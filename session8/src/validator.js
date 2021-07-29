  
const CHECK_EMPTY = (event = null, element =null, length=8) => {
    const ELEMENT = element !== null? element : event.target
    if (ELEMENT.value == '' || ELEMENT.value == null) {
        ELEMENT.classList.add('is-invalid')
        // alert('Field required')
        // console.log(event.target)
        return false
    }

    if (ELEMENT.value.length< length){
        ELEMENT.classList.add("is-invalid");
        return false
    }

    element.classList.remove("is-invalid");
    return true

}