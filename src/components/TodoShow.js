import { useState, useContext } from "react";
import TodoEdit from "./TodoEdit";
import TodosContext from "../context/todos";

function TodoShow({todo}) {

  const [showEdit, setShowEdit] = useState(false);
  
  const {deleteTodoById} = useContext(TodosContext);

  const handleEditClick = () => {
    setShowEdit(!showEdit);
  }

  const handleDeleteClick = () => {
   deleteTodoById(todo.id);
  }

  const handleSubmit = () => {
    setShowEdit(false);
  }

  let content = <h3>{todo.todoItem}</h3>
  if(showEdit) {
    content = <TodoEdit todo={todo} onSubmit = {handleSubmit}/>
  }

  return(
    <div>
      <div>{content}</div>

      <button onClick={handleEditClick}>
        Edit
      </button>

      <button onClick={handleDeleteClick}>
        Delete
      </button>  
    </div>
  )
}

export default TodoShow;

//{showEdit ? <TodoEdit/> : todo.todoItem}