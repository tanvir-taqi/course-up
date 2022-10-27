import { createBrowserRouter } from "react-router-dom";
import Blog from "../components/Blog/Blog";
import CourseDetails from "../components/CourseDetails/CourseDetails";
import Courses from "../components/Courses/Courses";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import FAQ from "../components/FAQ/FAQ";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import PremiumCourse from "../components/PremiumCourse/PremiumCourse";
import ProfileUpdate from "../components/ProfileUpdate/ProfileUpdate";
import Register from "../components/Register/Register";
import Main from "../layouts/Main";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

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
                path:'/courses/premium/:id',
                element:<PrivateRoute><PremiumCourse></PremiumCourse></PrivateRoute>,
                loader:({params})=>fetch(`https://courseup-one.vercel.app/courses/${params.id}`)
            },
            {
                path:'/blogs',
                element:<Blog></Blog>
            },
            {
                path:'/faq',
                element:<FAQ></FAQ>
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
                path:'/update',
                element:<PrivateRoute><ProfileUpdate></ProfileUpdate></PrivateRoute>
            },
        ]  
    },
    {
        path:'*',
        element:<ErrorPage></ErrorPage>
    }
])