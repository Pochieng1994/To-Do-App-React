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
      <h3>To Do List</h3>
      <form onSubmit={handleSubmit}>
        <input value = {todoItem} onChange = {handleChange} placeholder="Enter a Task To Do ..." />
        <button>ADD</button>
      </form>
    </div>
  )
}

export default TodoCreate;