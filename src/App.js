import { useEffect, useContext, useState } from "react";
import TodoCreate from './components/TodoCreate';
import TodoList from "./components/TodoList";
import TodosContext from "./context/todos";
import 'bulma/css/bulma.css';
import './css/style.css';
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import axios from "axios";

function App() {

  const [ user, setUser ] = useState(null);
  const [ profile, setProfile ] = useState(null);

  

  const login = useGoogleLogin({
        onSuccess: (codeResponse) => setUser(codeResponse),
        onError: (error) => console.log('Login Failed:', error)
    });

  useEffect(
      () => {
          if (user) {
              axios
                  .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
                      headers: {
                          Authorization: `Bearer ${user.access_token}`,
                          Accept: 'application/json'
                      }
                  })
                  .then((res) => {
                      setProfile(res.data);
                  })
                  .catch((err) => console.log(err));
          }
      },
      [ user ]
  );
    
  const logOut = () => {
    googleLogout();
    setProfile(null);
};



  const {fetchTodos} = useContext(TodosContext);
  
  useEffect(() => {
    fetchTodos();
  },[])
  
  return(
    <div className="app-div">
      {profile ? null : <h2 className="react-google has-text-weight-bold is-size-3">To-Do App</h2>  }
      <br />
      {
        profile ? (
          <div className="return-div ">
            <button className="button-1 button is-danger is-rounded" onClick={logOut}>Log out</button>
            <div className="user-info">
              <img src={profile.picture} alt="user image" />
                <br />
            </div>
              <TodoCreate/>
              <TodoList/>
          </div>
      ): (
          <button className="google-login button is-medium is-rounded" onClick={login}>Sign in with Google</button>
      )
      }
     
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