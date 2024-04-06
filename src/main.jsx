import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import UserProvider from './provider/UserProvider';
import { router } from './router/router';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Root></Root>,
//     children: [
//       {
//         path: "/",
//         element: <Home></Home>
//       },
//       {
//         path: "/login",
//         element: <Login></Login>
//       },
//       {
//         path: "/sign-up",
//         element: <SignUp></SignUp>
//       },
//       {
//         path: "/tasks",
//         element: <PrivetRoute>
//           <Tasks></Tasks>
//         </PrivetRoute>
//       },
//     ]
//   },
// ]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  </React.StrictMode>,
)
