import { useState, useContext } from "react";
import TodosContext from "../context/todos";


function TodoCreate() {
  
  const [todoItem, setTodoItem] = useState('');
  const { createTodo} = useContext(TodosContext);

  const handleChange = (event) => {
    setTodoItem(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    createTodo(todoItem);
    setTodoItem('');
  }


  return(
    <div>
      <h3>To Do List</h3>
      <form onSubmit={handleSubmit}>
        <input value = {todoItem} onChange = {handleChange} placeholder="Enter a Task To Do ..." />
        <button>ADD</button>
      </form>
    </div>
  )
}

export default TodoCreate;