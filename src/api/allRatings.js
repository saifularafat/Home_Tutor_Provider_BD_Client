import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { serverApiUrl } from "../../ApiSecret";

export const allRatings = (page = 1) => {
    const { data: payload = { rating: [], pagination: {} }, refetch, isLoading } = useQuery({
        queryKey: ['ratings', page],
        queryFn: async () => {
            const res = await axios.get(`${serverApiUrl}/api/rating?page=${page}`);
            return res.data.payload;
        },
        keepPreviousData: true,
    });

    return [payload, refetch, isLoading];
};

