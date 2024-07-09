import { useState, useContext} from "react";
import TodoEdit from "./TodoEdit";
import TodosContext from "../context/todos";
import '../css/style.css';

function TodoShow({todo, profile}) {

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


  //If profile is true you can check to see if the profile email is the same as the user email
  //then and if they are the same the edit and delete button should show up for that todo

  return(
    <div className="show-div">
      <div className="content-div">{content}</div>


      {
        profile ? profile.email === todo.userEmail ? (
          <div>
            <button className="button is-rounded mr-1" onClick={handleEditClick}>
             Edit
            </button>

            <button className="button is-danger is-rounded" onClick={handleDeleteClick}>
              Delete
            </button>  
          </div>
        ) : null
        : null

      }

 


  
        
      
    </div>
  )
}

export default TodoShow;

//{showEdit ? <TodoEdit/> : todo.todoItem}