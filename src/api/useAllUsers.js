import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { serverApiUrl } from "../../ApiSecret";

export const useAllUsers = (page = 1, searchText = "") => {
    const { data: users = {}, refetch, isLoading } = useQuery({
        queryKey: ['users', page, searchText],
        queryFn: async () => {
            const res = await axios.get(`${serverApiUrl}/api/users?page=${page}&search=${searchText}`);
            return res.data.payload;
        },
        keepPreviousData: true,
    });
    return [users, refetch, isLoading];
};

export const useSingleUser = (id) => {
    const { data: responseData, refetch, isLoading, isError } = useQuery({
        queryKey: ['singleUser', id],
        queryFn: async () => {
            if (!id) throw new Error("ID must be provided");
            const res = await axios.get(`${serverApiUrl}/api/users/${id}`);
            return res.data;
        },
        keepPreviousData: true,
        enabled: !!id,
    });

    // Extracting payload only if responseData is defined
    const user = responseData ? responseData.payload : null;

    return { user, refetch, isLoading, isError };
};