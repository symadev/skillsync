import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./MainLayout";
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";





import HomeMain from "./pages/HomeMain";
import Templates from "./pages/Templates";
import ResumeForm1 from "./DashBoard/ResumeFormPage/ResumeFrom1";
import ResumeForm2 from "./DashBoard/ResumeFormPage/ResumeFrom2";
import ResumeForm3 from "./DashBoard/ResumeFormPage/ResumeFrom3";
import ResumeForm4 from "./DashBoard/ResumeFormPage/ResumeFrom4";
import ResumeForm5 from "./DashBoard/ResumeFormPage/ResumeForm5";





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
        path: "resume",
        element:<HomeMain></HomeMain>,
         children: [
      //   {
       
      //   index: true, //  This makes DashboardHome the default
      //   element:<Profile></Profile>
      // },
    
    
     
      //   {
      //   path: "aiAssistant",
      //   element:<AiAssistant></AiAssistant>,
         
      // },

      {
        index: true,
      path: "templates",
      element: <Templates/> 
    },
      {
      path: "templates/from1",
      element: <ResumeForm1></ResumeForm1>
    },
      {
      path: "templates/from2",
      element: <ResumeForm2></ResumeForm2>
    },
      {
      path: "templates/from3",
      element: <ResumeForm3></ResumeForm3>
    },
      {
      path: "templates/from4",
      element: <ResumeForm4></ResumeForm4>
    },
      {
      path: "templates/from5",
      element: <ResumeForm5></ResumeForm5>
    },
       
      ],
        
      },
      
       
    ],
  },
]);
export default router; 