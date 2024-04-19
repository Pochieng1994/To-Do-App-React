import { useState } from "react";
import TodoCreate from './components/TodoCreate';

function App() {
  const [todos, setTodos] = useState([]);

  const createTodo = (todoItem) => {
    console.log('You need to:', todoItem);
  }

  return(
    <div>
      <TodoCreate onCreate = {createTodo} />
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