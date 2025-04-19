import React from 'react';
import { deleteTodo } from './Todo_Api';

function TodoListItem({ value, indexNumber, todolist, setTodolist }) {
  const deleteRow = () => {
    // Simulate delete with fake API (note: indexNumber+1 used for fake ID)
    deleteTodo(indexNumber + 1)
      .then((success) => {
        if (success) {
          const updatedList = todolist.filter((_, i) => i !== indexNumber);
          setTodolist(updatedList);
        } else {
          alert('Failed to delete task');
        }
      })
      .catch((err) => console.error('Delete error:', err));
  };

  return (
    <li>
      {value} <span onClick={deleteRow} style={{ cursor: 'pointer' }}>&times;</span>
    </li>
  );
}

export default TodoListItem;
