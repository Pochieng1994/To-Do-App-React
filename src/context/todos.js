import { createContext, useState } from "react";
import axios from "axios";

const TodosContext = createContext();

function Provider({children}) {

  const [todos, setTodos] = useState([]);

  const fetchTodos = async () => {
    const response = await axios.get('http://localhost:3001/todos');

    setTodos(response.data);
  }

  const createTodo = async (todoItem) => {
    const response =  await axios.post('http://localhost:3001/todos', {
      todoItem:todoItem
    });

    const updatedTodos = [
      ...todos, response.data
    ];

    setTodos(updatedTodos)
  }

  const editTodoById = async (id, newTodo) => {
    const response = await axios.put(`http://localhost:3001/todos/${id}`, {
      todoItem: newTodo
    });


    const updatedTodos = todos.map((todo) => {
      if(todo.id === id) {
        return {...todo, ...response.data};
      }

      return todo;
    })

    setTodos(updatedTodos);
  }

  const deleteTodoById = async (id) => {
    await axios.delete(`http://localhost:3001/todos/${id}`);

    const updatedTodos = todos.filter((todo) => {
      return todo.id !== id;
    })

    setTodos(updatedTodos)
  }

  const valueToShare = {
    todos,
    editTodoById,
    deleteTodoById,
    createTodo,
    fetchTodos,
  }

  return (
    <TodosContext.Provider value = {valueToShare}>
      {children} 
    </TodosContext.Provider>
  )
}

export {Provider};
export default TodosContext;

// Children represents all the components that are wrapped around
// the TodosContext Provider