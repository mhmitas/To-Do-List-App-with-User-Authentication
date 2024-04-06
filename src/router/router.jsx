import { createBrowserRouter } from "react-router-dom";
import Home from "../components/home/Home";
import Login from "../components/login/Login";
import PrivetRoute from "../components/privet-routes/PrivetRoute";
import Tasks from "../components/privet-routes/tasks/Tasks";
import SignUp from "../components/sign-up/SignUp";
import Root from "../routes/Root";
import Profile from "../components/pages/profile-page/Profile";

export const router = createBrowserRouter([
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
                path: "/profile",
                element: <Profile></Profile>
            },
            {
                path: "/tasks",
                element: <PrivetRoute>
                    <Tasks></Tasks>
                </PrivetRoute>
            },
        ]
    },
])