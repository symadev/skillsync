import { FaGoogle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import UseAxiosPublic from "./AdminRoutes/UseAxiosPublic";
import UseAuth from "./AdminRoutes/UseAuth";




const SocialLogin = () => {
    const navigate = useNavigate()
    const axiosPublic = UseAxiosPublic()
    const {googleSignIn} = UseAuth()
    const handleGoogleSubmit =() =>{
        googleSignIn()
        .then((result) => {
        console.log(result.user);
        
        const userInfo={
           
            email:result.user?.email,
           
        }
        axiosPublic.post('/users',userInfo)
        .then(res=>{
            console.log(res.data)
            navigate ('/');
        })
        })
        

    }
    return (
        <button  onClick={handleGoogleSubmit }className="btn bg-white text-black">
     <FaGoogle className="text-yellow-400"></FaGoogle>
        Google
      </button>
    );
};

export default SocialLogin;