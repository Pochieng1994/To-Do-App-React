import { useEffect, useContext } from "react";
import TodoCreate from './components/TodoCreate';
import TodoList from "./components/TodoList";
import TodosContext from "./context/todos";
import 'bulma/css/bulma.css';
import './css/style.css';

function App() {

  const {fetchTodos} = useContext(TodosContext);
  
  useEffect(() => {
    fetchTodos();
  },[])
  
  return(
    <div className="app-div">
      <TodoCreate/>
      <TodoList/>
    </div>
  )
}

export default App;

/* We can represent each todo item with an object that has id property and a todoItem property, and then 
for every object that gets created we can render a different instance of the todoshow property
... we can store every single object that gets created inside of an array so that we have 
one single data structure that keeps track of all the books that have been created throughout
time. Being that we would want the user to update the content on the screen we would use 
the state system.
*/

/*Inside of createtodo were going to do 2 things we are going to make a request off
  to JSON server were going to get a response and response is going to contain the newly
  created todo along with the ID that it was assigned were going to then take that response
  and add it in our new todos piece of state.*/