import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { serverApiUrl } from "../../ApiSecret";

export const useAllRequestJobs = (page = 1) => {
    const { data: payloads = { tutorJobApplies: [], pagination: {} }, refetch, isLoading } = useQuery({
        queryKey: ['tutorJobApplies', page],
        queryFn: async () => {
            const res = await axios.get(`${serverApiUrl}/api/job-apply?page=${page}`);
            return res.data.payload;
        },
        keepPreviousData: true,
    });

    return [payloads, refetch, isLoading];
};

