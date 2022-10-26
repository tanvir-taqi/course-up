import { createBrowserRouter } from "react-router-dom";
import CourseDetails from "../components/CourseDetails/CourseDetails";
import Courses from "../components/Courses/Courses";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import ProfileUpdate from "../components/ProfileUpdate/ProfileUpdate";
import Register from "../components/Register/Register";
import Main from "../layouts/Main";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/home',
                element:<Home></Home>
            },
            {
                path:'/courses',
                element:<Courses></Courses>,
                loader:()=>fetch('https://courseup-one.vercel.app/courses')
            },
            {
                path:'/courses/:id',
                element:<CourseDetails></CourseDetails>,
                loader:({params})=>fetch(`https://courseup-one.vercel.app/courses/${params.id}`)
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/upddate',
                element:<ProfileUpdate></ProfileUpdate>
            },
        ]  
    },
    {
        path:'*',
        element:<ErrorPage></ErrorPage>
    }
])