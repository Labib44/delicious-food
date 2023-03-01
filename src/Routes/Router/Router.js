import { createBrowserRouter } from "react-router-dom";
import Blog from "../../Home/Blog/Blog";
import Home from "../../Home/Home/Home";
import MoreMenu from "../../Home/MoreMenu/MoreMenu";
import Main from "../../Layout/Main/Main";
import About from "../../Pages/About/About";
import Contact from "../../Pages/Contact/Contact";
import Details from "../../Pages/Details/Details";
import Error from "../../Shared/Error/Error";
import Login from "../../Shared/Login/Login";
import SignUp from "../../Shared/SignUp/SignUp";

const router=createBrowserRouter([
    {path:'/', element:<Main></Main>, children:[
        {path:'/', element:<Home></Home>},
        {path:'/blog', element:<Blog></Blog>},
        {path:'/login', element:<Login></Login>},
        {path:'/signUp', element:<SignUp></SignUp>},
        {path:'/contact', element:<Contact></Contact>},
        {path:'/about', element:<About></About>},
        {path:'/more', element:<MoreMenu></MoreMenu>},
        {path:'/detail/:id', element:<Details></Details>},
    ]},
    {path:'/*', element:<Error></Error>}
])

export default router;