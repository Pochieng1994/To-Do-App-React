import { useState, useContext } from "react";
import TodoEdit from "./TodoEdit";
import TodosContext from "../context/todos";
import '../css/style.css';

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
    <div className="show-div">
      <div className="content-div">{content}</div>


        <button className="button is-rounded mr-1" onClick={handleEditClick}>
          Edit
        </button>

        <button className="button is-danger is-rounded" onClick={handleDeleteClick}>
          Delete
        </button>  
      
    </div>
  )
}

export default TodoShow;

//{showEdit ? <TodoEdit/> : todo.todoItem}