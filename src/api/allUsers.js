import { useQuery } from "@tanstack/react-query"
import axios from "axios";
import { serverApiUrl } from "../../ApiSecret";

const allUsers = () => {
    const { data: users = [], refetch, isLoading } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axios.get(`${serverApiUrl}/api/users`)
            return res.data.payload.users;
        },
    });
    return [users, refetch, isLoading];
};

export default allUsers;