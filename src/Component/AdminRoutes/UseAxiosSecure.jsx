import axios from "axios";
import { useNavigate } from "react-router-dom";
import UseAuth from "./UseAuth";



const axiosSecure = axios.create({
  baseURL: 'https://resume-builder-server-nu.vercel.app'
});

const UseAxiosSecure = () => {
   const navigate = useNavigate()
   const { logOut } = UseAuth();
  



 
  axiosSecure.interceptors.request.use(function (config) {
   const token =   localStorage.getItem('access-token')
   
    config.headers.authorization = `Bearer ${token}`;
   
    return config;
  }, function (error) {
   
    return Promise.reject(error);
  });

 


//   intercepts 401 and 403 status
axiosSecure.interceptors.response.use(
   function (response) {
     return response;
   },
    async(error)=> {
      const status = error.response?.status;
    //  console.log('status error in the interceptors', status);
     //here 401 and 403 logout the page and send the user to the login page
     if(status === 401 ||status === 403){
      await logOut();
      navigate('/login');

     }
     return Promise.reject(error);
   }
 );
 

  return axiosSecure;
};

export default UseAxiosSecure;
