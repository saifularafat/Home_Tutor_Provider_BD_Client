import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { serverApiUrl } from "../../ApiSecret";

export const useAllContactMessage = (page = 1, searchText = "") => {
    const { data: payload = { contacts: [], pagination: {} }, refetch, isLoading } = useQuery({
        queryKey: ['contacts', page],
        queryFn: async () => {
            const res = await axios.get(`${serverApiUrl}/api/contact?page=${page}&search=${searchText}`);
            return res.data.payload;
        },
        keepPreviousData: true,
    });

    return [payload, refetch, isLoading];
};

