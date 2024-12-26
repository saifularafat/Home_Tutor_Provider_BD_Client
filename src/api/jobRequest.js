import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { serverApiUrl } from "../../ApiSecret";

const allTuitionJobs = (page = 1, searchText = "") => {
    const { data: tuitionJobs = {}, refetch, isLoading } = useQuery({
        queryKey: ['tuitionJobs', page],
        queryFn: async () => {
            const res = await axios.get(`${serverApiUrl}/api/tuition-job?page=${page}&search=${searchText}`);
            return res.data.payload;
        },
        keepPreviousData: true,
    });

    return [tuitionJobs, refetch, isLoading];
};

export default allTuitionJobs;
