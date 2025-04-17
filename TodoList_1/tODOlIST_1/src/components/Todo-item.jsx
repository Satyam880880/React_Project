import "./todo.css";
import { useState } from "react";
import TodoListItem from "./TodoList";

import { useEffect } from "react";


function TodoItem() {

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=7") 
      .then((response) => response.json())
      //.then(json => console.log(json))
      .then((data) => {
        const titles = data.map((todo) => todo.title);
        setTodolist(titles);
      })
      .catch((error) => console.error("Error fetching todos:", error));
  }, []);



  let [todolist,setTodolist] = useState([]);
    let saveData = (evevt) =>{
      let toname = event.target.toname.value;
     // alert(toname);
  
     if(!todolist.includes(toname)){
      let finalTodolist = [...todolist,toname];
      setTodolist(finalTodolist);
     }else{
      alert("Task already exists");
     }
      evevt.preventDefault();
     
    }
  
    let list = todolist.map((value,index)=>{
      return (
        <TodoListItem value={value} key={index}  indexNumber={index} 
        todolist={todolist} setTodolist={setTodolist}
        />
  
      )
    })
  
    return (
    <div className='App'>
       <h1>TodoList</h1>
        
          <form onSubmit={saveData}>
            <input type="text" name='toname'/>
            <button>Add Task</button>
          </form>
  
          <div className='outerDiv'>
  
            <ul>
             
            {list}
            </ul>
          </div>
    </div>
    );
  }
  
export default TodoItem;