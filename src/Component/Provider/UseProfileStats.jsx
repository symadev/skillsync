import { useQuery } from "@tanstack/react-query";
import UseAuth from "../AdminRoutes/UseAuth";
import UseAxiosSecure from "../AdminRoutes/UseAxiosSecure";

const UseProfileStats = () => {
  const { user } = UseAuth();
  const axiosSecure = UseAxiosSecure();

  const { data: stats = {}, isLoading } = useQuery({
    queryKey: ['profileStats', user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure.get(`/profile-metrics?email=${user.email}`);
      return res.data;
    },
  });

  return { stats, isLoading };
};

export default UseProfileStats;
