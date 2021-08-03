// const TABLE_DATA = document.getElementById('table-data')
const TABLE_DATA = document.querySelector("#table-data");
let generatedTableRows = "";

/**
 * Read this resource https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch and
 * Explain the fetch() function
 */

let retrieve10Todos = async () => {
    let response = await fetch("https://jsonplaceholder.typicode.com/todos") // Retrieve todos
    let json = await response.json()
    return json.slice(0,10)
}

// console.log(retrieve10Todos())

let myTodos = []

retrieve10Todos().then(todos => {

    if (todos && todos.length == 10) {
      // Check whether there are some todos
    //   console.log(todos);
        
      todos.forEach((todo) => {
        //Explain what this does
        /**
         * At every iteration the todo is like below
         * todo = { 'userId': 1, 'id': 1, 'title': 'title', 'complete': false }
         */
        fetch(`https://jsonplaceholder.typicode.com/users/${todo.userId}`) //Retrieve the name of the user who owns the todo item.
          .then((response) => response.json()) // Convert response to json
          .then((user) => {
            // Get the converted the json

            generatedTableRows += `
                            <tr>
                                <td>${todo.id}</td>
                                <td>${user.name}</td>
                                <td>${todo.title}</td>
                                <td>${
                                  todo.completed ? "Completed" : "Incomplete"
                                }</td>
                            </tr>`; //Explain this block of code
            // console.log(generatedTableRows);
          }).then(() => {
                TABLE_DATA.innerHTML = generatedTableRows; 
          });
      });
      
    }
})