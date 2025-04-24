// fetch Api
/*

const API_URL = "https://jsonplaceholder.typicode.com/todos";

const getTodos = async () => {
  const response = await fetch(`${API_URL}?_limit=7`);
  return await response.json();
};

const addTodo = async (title) => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title,
      completed: false,
      userId: 1,
    }),
  });
  return await response.json();
};



const deleteTodo = async (id) => {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
      method: "DELETE",
    });
    return response.ok;
  } catch (error) {
    console.error("Error deleting task:", error);
    return false;
  }
};



/*
const deleteTodo = async (id) => {
    try {
      await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
        method: 'DELETE',
      });

      // Update state using id (real one)
      setTodolist(todolist.filter((task) => task.id !== id));
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };
  */
 // Axios
 import axios from 'axios';

 const API_URL = "https://jsonplaceholder.typicode.com/todos";

// Get todos (limit 7)
const getTodos = async () => {
  const response = await axios.get(API_URL, {
    params: {
      _limit: 7
    }
  });
  return response.data;
};


const addTodo = async (title) => {
  const response = await axios.post(API_URL, {
    title,
    completed: false,
    userId: 1
  });
  return response.data;
};


const deleteTodo = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.status === 200;
  } catch (error) {
    console.error("Error deleting task:", error);
    return false;
  }
};


export { getTodos, addTodo, deleteTodo };


