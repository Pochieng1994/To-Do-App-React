import TodoShow from "./TodoShow";
import { useContext } from "react";
import TodosContext from "../context/todos";

function TodoList({profile}) {

  const {todos} = useContext(TodosContext);


  const renderedTodos = todos.map((todo) => {
    return <TodoShow profile = {profile} key={todo.id}  todo = {todo} />
  })


  return(
    <div className="list-div mt-5 is-size-3">
      {renderedTodos}
    </div>
  )
}

export default TodoList;