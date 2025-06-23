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
import Resume from "./DashBoard/Resume";


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
        element:<Dashboard></Dashboard>,
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
        element:<Resume></Resume>
      },
      ],
        
      },
      
       
    ],
  },
]);
export default router; 