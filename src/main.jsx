import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './routes/Root';
import Home from './components/home/Home';
import Login from './components/login/Login';
import SignUp from './components/sign-up/SignUp';
import UserProvider from './provider/UserProvider';
import Tasks from './components/privet-routes/tasks/Tasks';
import PrivetRoute from './components/privet-routes/PrivetRoute';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/sign-up",
        element: <SignUp></SignUp>
      },
      {
        path: "/tasks",
        element: <PrivetRoute>
          <Tasks></Tasks>
        </PrivetRoute>
      },
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  </React.StrictMode>,
)
