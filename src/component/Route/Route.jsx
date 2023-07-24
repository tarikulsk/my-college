import { createBrowserRouter } from "react-router-dom";
import Main from "../../laoyout/Main";
import Home from "../Pages/Home/Home";
import Colleges from "../Pages/Colleges/Colleges";
import Admission from "../Pages/Admission/Admission";
import MyCollege from "../Pages/MyCollege/MyCollege";
import Contact from "../Pages/Contact/Contact";
import Login from "../Auth/Login/Login";
import Register from "../Auth/Register/Register";
import CollegeDetails from "../Pages/Colleges/CollegeDetails";
import Apply from "../Pages/Admission/Apply";
// import CollegesList from "../Pages/Admission/CollegesList";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/colleges')
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
                element: <Colleges></Colleges>,
                loader: () => fetch('http://localhost:5000/colleges')
            },
            {
                path: '/collegedetails/:collegedetailsId',
                element: <CollegeDetails></CollegeDetails>,
                loader: () => fetch('http://localhost:5000/colleges'),
            },
            {
                path: '/admission',
                element: <Admission></Admission>,
                loader: () => fetch('http://localhost:5000/colleges')
            },

            {
                path: '/apply/:applyId',
                element: <Apply></Apply>,
                loader: () => fetch('http://localhost:5000/colleges')

            },
            {
                path: '/mycollege',
                element: <MyCollege></MyCollege>,
                loader: () => fetch('http://localhost:5000/apply')
            },
            {
                path: "/contact",
                element: <Contact></Contact>
            }
        ]
    },
]);

export default router;