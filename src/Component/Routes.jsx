import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./MainLayout";
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
import Dashboard from "./DashBoard/Dashboard";

import Profile from "./DashBoard/Profile";
import Settings from "./DashBoard/Settings";

import AiAssistant from "./DashBoard/AiAssistant";
import AdminRoutes from "../Component/AdminRoutes/AdminRoutes"

import HomeMain from "./pages/HomeMain";
import Templates from "./pages/Templates";
import ResumeForm1 from "./DashBoard/ResumeFormPage/ResumeFrom1";




const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element:<Home></Home>,
      },
       {
        path: "login",
        element:<Login></Login>
      },
      {
        path: "register",
        element:<Register></Register>
      },
    
      {
        path: "dashboard",
        element:<AdminRoutes><Dashboard></Dashboard></AdminRoutes>,
         children: [
        {
        path: "profile",
        element:<Profile></Profile>
      },
        {
        path: "settings",
        element:<Settings></Settings>
      },
        {
        path: "resume",
        element:<HomeMain></HomeMain>,
         
      },

      {
      path: "templates",
      element: <Templates/> 
    },
      {
      path: "templates/from1",
      element: <ResumeForm1></ResumeForm1>
    },
        {
        path: "ai-coach",
        element:<AiAssistant></AiAssistant>
      },
      ],
        
      },
      
       
    ],
  },
]);
export default router; 