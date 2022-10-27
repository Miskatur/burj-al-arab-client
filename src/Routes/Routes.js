import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import AboutUs from "../pages/AboutUs/AboutUs";
import Contact from "../pages/Contact/Contact";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Rooms from "../pages/Rooms/Rooms";
import SignUp from "../pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoutes/PrivateRoute";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/suits',
                element: <PrivateRoute><Rooms></Rooms></PrivateRoute>
            },
            {
                path: '/about',
                element: <AboutUs></AboutUs>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            }
        ]
    }
])