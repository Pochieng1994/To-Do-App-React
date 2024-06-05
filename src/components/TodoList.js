import TodoShow from "./TodoShow";
import { useContext } from "react";
import TodosContext from "../context/todos";

function TodoList() {

  const {todos} = useContext(TodosContext);

  const renderedTodos = todos.map((todo) => {
    return <TodoShow key={todo.id}  todo = {todo} />
  })


  return(
    <div>
      {renderedTodos}
    </div>
  )
}

export default TodoList;