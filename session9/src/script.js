// const TABLE_DATA = document.getElementById('table-data')
const TABLE_DATA = document.querySelector('#table-data')
let generatedTableRows = ''

/** 
* Read this resource https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch and 
* Explain the fetch() function
*/

fetch("https://jsonplaceholder.typicode.com/todos") // Retrieve todos
    .then( response => response.json() )
    .then( json => {

        let todos = json
        
        if (todos && todos.length > 0) { // Check whether there are some todos

            todos.forEach( todo => { //Explain what this does
                /** 
                 * At every iteration the todo is like below
                 * todo = { 'userId': 1, 'id': 1, 'title': 'title', 'complete': false }
               */
                fetch(`https://jsonplaceholder.typicode.com/users/${todo.userId}`) //Retrieve the name of the user who owns the todo item.
                    .then(response => response.json()) // Convert response to json
                    .then( user => { // Get the converted the json
                        
                        generatedTableRows += `
                            <tr>
                                <td>${todo.id}</td>
                                <td>${user.name}</td>
                                <td>${todo.title}</td>
                                <td>${todo.completed ? "Completed" : "Incomplete"}</td>
                            </tr>`; //Explain this block of code
                        
                        TABLE_DATA.innerHTML += generatedTableRows
                    })
            })  
        }
        
        // TABLE_DATA.innerHTML = generatedTableRows;
        // console.log(json)
    })
    .catch(err => console.log(err));