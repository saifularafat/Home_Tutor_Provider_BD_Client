import { useQuery } from "@tanstack/react-query"
import axios from "axios";
import { serverApiUrl } from "../../ApiSecret";

const allCoaching = () => {
    const { data: coaching = [], refetch, isLoading } = useQuery({
        queryKey: ['coaching'],
        queryFn: async () => {
            try {
                const res = await axios.get(`${serverApiUrl}/api/users`);
                const allData = res.data.payload || [];
                return allData.filter((data) => data?.isCoaching === true);
            } catch (err) {
                throw new Error(err.response?.data?.message || "Error fetching data");
            }
        },
    });
    return [coaching, refetch, isLoading];
};

export default allCoaching;