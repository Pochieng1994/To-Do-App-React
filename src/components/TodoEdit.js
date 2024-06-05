import { useState, useContext } from "react";
import TodosContext from "../context/todos";

function TodoEdit({todo, onSubmit}) {
  const [todoItem, setTodoItem] = useState(todo.todoItem);

  const {editTodoById} = useContext(TodosContext);

  const handleChange = (event) => {
    setTodoItem(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit();
    editTodoById(todo.id, todoItem);
  }

  return(
    <div>
      <form onSubmit={handleSubmit}>
        <input value = {todoItem} onChange={handleChange}/>
        <button>
          Save
        </button>
      </form>
    </div>
  )
}

export default TodoEdit;