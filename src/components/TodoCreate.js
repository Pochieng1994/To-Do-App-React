import { useState, useContext } from "react";
import TodosContext from "../context/todos";
import '../css/style.css';


function TodoCreate({profile}) {
  
  const [todoItem, setTodoItem] = useState('');
  const { createTodo} = useContext(TodosContext);

  const handleChange = (event) => {
    setTodoItem(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    createTodo(todoItem, profile);
    setTodoItem('');
  }


  return(
    <div>
      <h3 className="is-size-2 has-text-weight-bold">To Do List</h3>
      <form className="mt-5" onSubmit={handleSubmit}>
        <input className="create-input input is-medium is-rounded" value = {todoItem} onChange = {handleChange} placeholder="Enter a Task To Do ..." />
        <button className="button is-rounded is-medium ml-2 has-text-weight-bold">ADD</button>
      </form>
    </div>
  )
}

export default TodoCreate;