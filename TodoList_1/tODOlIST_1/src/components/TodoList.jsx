import React from 'react'


function TodoListItem({value ,indexNumber,todolist,setTodolist}){
    let deleteRow=()=>{
     let finalData = todolist.filter((v,i)=> i!= indexNumber)
   //  console.log(finalData);
      setTodolist(finalData);
  
    }
    return(
      <li>{value} <span onClick={deleteRow}>&times;</span></li>
    )
  }

export default TodoListItem;