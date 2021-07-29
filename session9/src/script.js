const TABLE_DATA = document.getElementById('table-data')
let generatedHTMLRows =''
fetch("https://jsonplaceholder.typicode.com/todos")
  .then((response) =>response.json())
  .then((json)=>{
      let todos = json

      if (todos && todos.length>0){
          todos.forEach(todo => {
              generatedHTMLRows += `
              <tr>
                <td>${todo.id}</td>
                <td>${todo.userid}</td>
                <td>${todo.title}</td>
                <td>${todo.completed? "Completed":"Incomplete"}</td>
               </tr>  
              `;
              
          });
      }
      TABLE_DATA.innerHTML = generatedHTMLRows;
      //console.log(json)
  })