import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root/Root';
import About from './components/About/About';
import Blog from './components/Blog/Blog';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Home from './components/Home/Home';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Admin from './components/Admin/Admin';
import Contact from './components/Contact/Contact';
import AuthProvider from './components/provider/AuthProvider';
import Users from './components/Users/Users';
import PrivateRoute from './PrivateRoute/PrivateRoute';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement:<ErrorPage/>,
    children:[
      {
        path:'/',
        element: <Home/>,
        loader: () => fetch('http://localhost:5000/craft')
    
      },
      {
        path:'/about',
        element:<About/>
      },
      {
        path:'/blog',
        element:<Blog/>
      },
      {
        path:'/login',
        element:<Login/>
      },
      {
        path:'/register',
        element:<Register/>
      },
      {
        path:'/admin',
        element:<PrivateRoute><Admin/></PrivateRoute>
      },
      {
        path:'/contact',
        element:<PrivateRoute><Contact/></PrivateRoute>
      },
      {
        path:'/users',
        element:<Users/>,
        loader:() => fetch('http://localhost:5000/users')
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
