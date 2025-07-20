import { useContext } from "react";
import { AuthContext } from "../Provider/AuthContext";


const UseAuth = () => {

    const auth = useContext(AuthContext);
    return auth;

};

export default UseAuth;

