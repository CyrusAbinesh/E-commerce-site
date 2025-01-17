import * as React from "react";
import * as ReactDOM from "react-dom/client";

import App from './App.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import Home from './Home/Home.jsx';
import Login from './Login/Login.jsx';
import ContactUs from './ContactUs/ContactUs.jsx';
import Register from "./Register/Register.jsx";
import On_Off from "../On_Off/On_Off.jsx";
import Table from "./Table/Table.jsx";
import Api from "./Api/Api.jsx";

const router =createBrowserRouter([
  {path:'/', element:<App/>},
  {path:'/home', element:<Home/>},
  {path:'/contact', element:<ContactUs/>},
  {path:'/login', element:<Login/>},
  {path:'/register', element:<Register/>},
  {path:'/onoff', element:<On_Off/>},
  {path:'/table',element:<Table/>},
  {path:'/api',element:<Api/>}
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
