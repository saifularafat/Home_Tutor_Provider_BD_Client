import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { serverApiUrl } from "../../ApiSecret";

export const allTuitionJobs = (page = 1, searchText = "") => {
    const { data: tuitionJobs = {}, refetch, isLoading } = useQuery({
        queryKey: ['tuitionJobs', page, searchText],
        queryFn: async () => {
            const res = await axios.get(`${serverApiUrl}/api/tuition-job?page=${page}&search=${searchText}`);
            return res.data.payload;
        },
        keepPreviousData: true,
    });

    return [tuitionJobs, refetch, isLoading];
};

export const singleTuitionJobs = (id) => {
    const { data: responseData, refetch, isLoading, isError } = useQuery({
        queryKey: ['singleJob', id],
        queryFn: async () => {
            if (!id) throw new Error("ID must be provided"); 
            const res = await axios.get(`${serverApiUrl}/api/tuition-job/${id}`);
            return res.data; 
        },
        keepPreviousData: true,
        enabled: !!id,
    });

    // Extracting payload only if responseData is defined
    const tuitionJob = responseData ? responseData.payload : null;

    return { tuitionJob, refetch, isLoading, isError };
};
