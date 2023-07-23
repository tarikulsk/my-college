import { createBrowserRouter } from "react-router-dom";
import Main from "../../laoyout/Main";
import Home from "../Pages/Home/Home";
import Colleges from "../Pages/Colleges/Colleges";
import Admission from "../Pages/Admission/Admission";
import MyCollege from "../Pages/MyCollege/MyCollege";
import Contact from "../Pages/Contact/Contact";
import Login from "../Auth/Login/Login";
import Register from "../Auth/Register/Register";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/colleges',
                element: <Colleges></Colleges>
            },
            {
                path: '/admission',
                element: <Admission></Admission>
            },
            {
                path: '/mycollege',
                element: <MyCollege></MyCollege>
            },
            {
                path: "/contact",
                element: <Contact></Contact>
            }
        ]
    },
]);

export default router;