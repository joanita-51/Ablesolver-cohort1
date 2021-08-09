

// const TABLE_DATA = document.getElementById('table-data')
const TABLE_DATA = document.querySelector('#table-data')
const PAGINATION = document.querySelector('#pagination')
let PER_PAGE = document.querySelector('#per_page')

let per_page = parseInt(PER_PAGE.value) || 10;

PER_PAGE.onblur =() => {
    per_page= parseInt(PER_PAGE.value);
    retrieveWithPagination(1, per_page);
}

document.body.onclick = (event) => { //Event delegation
  // console.log(event.target.dataset.page)
  if (event.target.dataset.page) {
    let { page } = event.target.dataset;
     per_page = parseInt(document.querySelector('#per_page').value) || per_page;
    retrieveWithPagination(page, per_page)
    // console.log(page);
  }
}

/** 
* Read this resource https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch and 
* Explain the fetch() function
*/
let todos = []

let retrieveWithPagination = (page = 1, numberOfItemsPerPage=10) => {
  let buttons = "" , generatedTableRows=" ";

  fetch("https://jsonplaceholder.typicode.com/todos") // Retrieve todos
    .then((response) => response.json())
    .then((json) => {

      // console.log(json.length)
      // Generate pagination
      // let numberOfItemsPerPage = 10;
      const MAX_PAGES = Math.floor(json.length / numberOfItemsPerPage);

      const START_POSITION =(page - 1) * numberOfItemsPerPage;
      todos = json.slice(START_POSITION).slice(0,numberOfItemsPerPage);
      let i = 1;

      while (i < MAX_PAGES) {
        //Generate buttons
        buttons += `<button data-page="${i}" >${i}</button>`
        i++;
      }
    }).then(() => {
        //console.log(todos)
      if (todos && todos.length > 0) {
        // Check whether there are some todos

        todos.forEach((todo) => {
          //Explain what this does
          /**
           * At every iteration the todo is like below
           * todo = { 'userId': 1, 'id': 1, 'title': 'title', 'complete': false }
           */
          let { id, userId, title, completed } = todo;

          fetch(`https://jsonplaceholder.typicode.com/users/${userId}`) //Retrieve the name of the user who owns the todo item.
            .then((response) => response.json()) // Convert response to json
            .then((user) => {
              // Get the converted the json
              let { name } = user;

              generatedTableRows += `
                <tr>
                    <td>${id}</td>
                    <td>${name}</td>
                    <td>${title}</td>
                    <td>${completed ? "Completed" : "Incomplete"}</td>
                    <td>
                    <div
                      class="btn-group"
                      role="group" aria-label="Basic example"
                    >
                      <button onClick="todoDelete(${id})" class="btn btn-danger">Delete</button>
                      <button onClick="todoEdit(${id})" class="btn btn-info">Edit</button>
                    </div>
                  </td>
                </tr>`; //Explain this block of code
            })
            .then(() => {
              TABLE_DATA.innerHTML = generatedTableRows;
              PAGINATION.innerHTML = buttons
            })
            .catch((err) => console.log(err));
        });
      }
    })
    .catch((err) => console.log(err));
}

retrieveWithPagination()

const TODO_FORM = document.querySelector('form#new-todo')

if(TODO_FORM != 'undefined'){
  let title = ''
  TODO_FORM.addEventListener('submit', event =>{
    event.preventDefault()

    title = event.target[0].value;

    if(validate(title)){
      return
    }

    sendTodoAPI(title)
  })
}

let sendTodoAPI =(title) =>{
  //console.log(title);
  fetch ("https://jsonplaceholder.typicode.com/todos",{
    method: "POST",
    body: JSON.stringify({
      title,
      userId:1,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
   .then(response => response.json())
   .then(json => {
     let {id} = json
     if(id){
       TODO_FORM.reset()
         // TODO_FORM.classList.add('was-validated')
         document.getElementById('todo-id').innerText = id
        // document.getElementById('title').value = ''
        document.getElementById('todo-alert').classList.remove('d-none').add('d-block')
     }
     // console.log(json)
   })
   .catch( error => console.log(error));
};
let todoDelete = todoID =>{
  let confirmation = confirm(`Are you sure you want to delete item #${todoID}?`)
  if (!confirmation) return

  fetch(`https://jsonplaceholder.typicode.com/todos/${todoID}`, {
    method: "DELETE",
  })
  .then((response) => response.json())
  .then((json) => retrieveWithPagination())
  .catch((error) => console.log(error));

}
let todoEdit = todoID => {
  const EDIT_FORM_HOLDER = document.querySelector('#editFormHolder')
  const TODO_EDIT_FORM = document.querySelector('#todo-edit-form') || null
   /**
   * How to update
   * [X]1. Click the Edit button. To retrieve the item to be updated
   * [X]2. If the item exists, display the item editable details in a form.
   * [X]3. Send the updates/changes back to the API 
   */
  
    fetch(`https://jsonplaceholder.typicode.com/todos/${todoID}`)
    .then(response => response.json())
    .then(json => {
      let { id, userId, title, completed } = json

      if (id) {
        let form = document.createElement("form"); //<form>
        form.id = "todo-edit-form";
        form.classList.add("needs-validation");
        form.method = "post";

        let titleElement = document.createElement("div");
        titleElement.classList.add("my-3");
        let titleLabel = document.createElement("label"); //<label></label>
        let titleLabelText = document.createTextNode("Title");
        titleLabel.appendChild(titleLabelText); //<label>Title</label>

        let inputForTitle = document.createElement("input");
        inputForTitle.classList.add("form-control");
        inputForTitle.id = "title";
        inputForTitle.type = "text";
        inputForTitle.value = title;
        titleElement.appendChild(titleLabel);
        titleElement.appendChild(inputForTitle);

        let statusElement = document.createElement("div");
        statusElement.classList.add("my-3");
        let statusHeading = document.createElement("h3");
        let statusLabelHeadingText = document.createTextNode("Completed?");
        statusHeading.appendChild(statusLabelHeadingText);

        let yesRadioElement = document.createElement("div");
        yesRadioElement.classList.add("form-check");
        yesRadioElement.classList.add("form-check-inline");

        let yesRadioInput = document.createElement("input");
        yesRadioInput.type = "radio";
        yesRadioInput.classList.add("form-check-input");
        yesRadioInput.name = "todostatus";
        yesRadioInput.id = "yes";
        yesRadioInput.value = 1;
        yesRadioInput.checked = completed && true;

        let yesRadioLabel = document.createElement("label");
        let yesRadioLabelText = document.createTextNode("Yes");
        yesRadioLabel.appendChild(yesRadioLabelText);
        yesRadioLabel.htmlFor = "yes";

        yesRadioElement.appendChild(yesRadioInput);
        yesRadioElement.appendChild(yesRadioLabel);

        let noRadioElement = document.createElement("div");
        noRadioElement.classList.add("form-check");
        noRadioElement.classList.add("form-check-inline");

        let noRadioInput = document.createElement("input");
        noRadioInput.type = "radio";
        noRadioInput.classList.add("form-check-input");
        noRadioInput.name = "todostatus";
        noRadioInput.id = "no";
        noRadioInput.value = 0;
        noRadioInput.checked = !completed && true;

        let noRadioLabel = document.createElement("label");
        let noRadioLabelText = document.createTextNode("No");
        noRadioLabel.appendChild(noRadioLabelText);
        noRadioLabel.htmlFor = "no";

        noRadioElement.appendChild(noRadioInput);
        noRadioElement.appendChild(noRadioLabel);

        statusElement.appendChild(statusHeading);
        statusElement.appendChild(yesRadioElement);
        statusElement.appendChild(noRadioElement);

        let submitBtn = document.createElement("button");
        submitBtn.type = "submit";
        submitBtn.classList.add("btn");
        submitBtn.classList.add("btn-primary");
        let submitBtnText = document.createTextNode("Apply changes");
        submitBtn.appendChild(submitBtnText);

        form.appendChild(titleElement);
        form.appendChild(statusElement);
        form.appendChild(submitBtn);

        TODO_EDIT_FORM != null && EDIT_FORM_HOLDER.removeChild(TODO_EDIT_FORM);

        EDIT_FORM_HOLDER.appendChild(form);

        form.onsubmit = (event) => {
          event.preventDefault();
          const TODO_EDIT_FORM =
            document.querySelector("#todo-edit-form") || null;
          //console.log(TODO_EDIT_FORM);
          let title = event.target[0].value;
          let yes = event.target[1].checked;

          fetch(`https://jsonplaceholder.typicode.com/todo/${todoID}`, {
            method: "PUT",
            body: JSON.stringify({
              id: todoID,
              title: (title != '' || title.length > 3) && title,
              completed: yes ? true: false,
              userId,
            }),
            headers: {
              "Content-type": "application/json; charset=UTF-8",
            },
          })
            .then((response) => response.json())
            .then((json) => {
              // console.log(json)
              if (json.id) {
                TODO_EDIT_FORM != null && EDIT_FORM_HOLDER.removeChild(TODO_EDIT_FORM);
                alert(`Viola! #${todoID} is updated to ${json.title}`)
              }
              }).catch(error => console.error(error))
        };
      }

      // console.log(json)
    })

  // console.log(todoID)
  
}

 function validate(title) {
   return (title == 'undefined' ||  title.length < 3 ) ? false : true
 }

(() => {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const FORMS = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.prototype.slice.call(FORMS).forEach((FORM) =>{
    FORM.addEventListener(
      "submit",
      (event) => {
        if (!FORM.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        FORM.classList.add("was-validated");
      },
      false
    );
  });
})();
// You can also do API calls using a JavaScript known as Axios
