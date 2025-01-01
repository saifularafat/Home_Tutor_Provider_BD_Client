import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { serverApiUrl } from "../../ApiSecret";

export const useAllUsers = (page = 1, searchText = "") => {
    const { data: usersResponse = {}, refetch, isLoading } = useQuery({
        queryKey: ['users', page, searchText],
        queryFn: async () => {
            const res = await axios.get(`${serverApiUrl}/api/users?page=${page}&search=${searchText}`);
            return res.data.payload;
        },
        keepPreviousData: true,
    });
    const users = usersResponse.users || [];
    return [users, refetch, isLoading];
};