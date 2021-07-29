const TABLE_DATA = document.getElementById('table-data')
let generatedHTMLRows =''
//explain the fetch function
fetch("https://jsonplaceholder.typicode.com/todos")
  .then((response) =>response.json())
  .then((json)=>{
      let todos = json

      if (todos && todos.length>0){
          todos.forEach(todo => { //explain what this does
              generatedHTMLRows += `
              <tr>
                <td>${todo.id}</td>
                <td>${todo.userId}</td>
                <td>${todo.title}</td>
                <td>${todo.completed? "Completed":"Incomplete"}</td>
               </tr>  
              `;//explain this block of code
              
          });
      }
      TABLE_DATA.innerHTML = generatedHTMLRows;
      //console.log(json)
  })