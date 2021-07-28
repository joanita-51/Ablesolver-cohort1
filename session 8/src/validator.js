  
const CHECK_EMPTY = (event) => {

    if (event.target.value == '' || event.target.value == null) {
        event.target.classList.add('is-invalid')
        // alert('Field required')
        // console.log(event.target)
        return false
    }

    event.target.classList.remove("is-invalid");
    return true

}