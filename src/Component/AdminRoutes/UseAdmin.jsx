import { useQuery } from "@tanstack/react-query";
import UseAuth from "./UseAuth";
import UseAxiosSecure from "./UseAxiosSecure";




const UseAdmin = () => {
    //using the tanstack query
const {user} = UseAuth()
const axiosSecure = UseAxiosSecure();
    const { data:isAdmin ,isPending:isAdminLoading} = useQuery({
        queryKey: [user?.email, 'isAdmin'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/admin/${user.email}`);
              console.log(res.data)
            return res.data?.admin;
        }

    })

return [isAdmin,isAdminLoading];
   
};

export default UseAdmin;


// React এর একটি কাস্টম হুক UseAdmin, যা ব্যবহারকারীর অ্যাডমিন কিনা তা যাচাই করে। 