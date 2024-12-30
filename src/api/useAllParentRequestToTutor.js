import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { serverApiUrl } from "../../ApiSecret";

export const useParentRequestTutor = (page = 1) => {
    const { data: payload = { tutorRequest: [], pagination: {} }, refetch, isLoading } = useQuery({
        queryKey: ['tutorRequest', page],
        queryFn: async () => {
            const res = await axios.get(`${serverApiUrl}/api/tutor-request?page=${page}`);
            return res.data.payload;
        },
        keepPreviousData: true,
    });

    return [payload, refetch, isLoading];
};

