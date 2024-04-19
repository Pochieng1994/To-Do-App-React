import { useState } from "react";

function TodoCreate({onCreate}) {
  
  const [todoItem, setTodoItem] = useState('');

  const handleChange = (event) => {
    setTodoItem(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    onCreate(todoItem);
    setTodoItem('');
  }


  return(
    <div>
      <form onSubmit={handleSubmit}>
        <label>Todo Item</label>
        <input value = {todoItem} onChange = {handleChange} />
        <button>ADD</button>
      </form>
    </div>
  )
}

export default TodoCreate;