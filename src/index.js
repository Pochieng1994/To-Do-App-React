import React from "react";
import ReactDOM from "react-dom/client";
import App from './App';
import {Provider} from "./context/todos";
import { GoogleOAuthProvider } from "@react-oauth/google";

const element = document.getElementById('root');
const root = ReactDOM.createRoot(element);

root.render(

  <GoogleOAuthProvider clientId="632611395409-icea1qn99osh3ff9et1vc7eghi9rvb3i.apps.googleusercontent.com">
    <React.StrictMode>
      <Provider>
        <App/>
      </Provider>
    </React.StrictMode>
  </GoogleOAuthProvider>

);