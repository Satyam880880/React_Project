import React, { useEffect, useState } from 'react';
import TodoListItem from './TodoList';
import { getTodos, addTodo } from './Todo_Api';
import './todo.css';

function TodoItem() {
  const [todolist, setTodolist] = useState([]);

  useEffect(() => {
    getTodos()
      .then((data) => {
        const titles = data.map((todo) => todo.title);
        setTodolist(titles);
      })
      .catch((error) => console.error('Error fetching todos:', error));
  }, []);

  const saveData = (event) => {
    event.preventDefault();
    const toname = event.target.toname.value.trim();

    if (!toname) return;

    if (!todolist.includes(toname)) {
      addTodo(toname)
        .then((newTodo) => {
          setTodolist([...todolist, newTodo.title]);
          event.target.reset(); // clear input
        })
        .catch((error) => console.error('Error adding todo:', error));
    } else {
      alert('Task already exists');
    }
  };

  return (
    <div className="App">
      <h1>Todo List</h1>

      <form onSubmit={saveData}>
        <input type="text" name="toname" placeholder="Enter a task..." />
        <button>Add Task</button>
      </form>

      <div className="outerDiv">
        <ul>
          {todolist.map((value, index) => (
            <TodoListItem
              key={index}
              value={value}
              indexNumber={index}
              todolist={todolist}
              setTodolist={setTodolist}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TodoItem;
