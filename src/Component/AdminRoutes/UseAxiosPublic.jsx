import axios from "axios";


const UseAxiosPublic = () => {
     const axiosSecure = axios.create({
        baseURL:'https://resume-builder-server-nu.vercel.app'
    })
    return axiosSecure;
};

export default UseAxiosPublic;