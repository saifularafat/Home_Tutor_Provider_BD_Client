import { useQuery } from "@tanstack/react-query"
import axios from "axios";
import { serverApiUrl } from "../../ApiSecret";

export const allTutor = (page = 1, searchText = "") => {
    const { data: tutors = {}, refetch, isLoading } = useQuery({
        queryKey: ['tutors', page, searchText],
        queryFn: async () => {
            const res = await axios.get(`${serverApiUrl}/api/users/all-tutor?page=${page}&search=${searchText}`);
            return res.data.payload;
        },
        keepPreviousData: true,
    });

    return [tutors, refetch, isLoading];
};


export const singleTutor = (id) => {
    const { data: responseData, refetch, isLoading, isError } = useQuery({
        queryKey: ['singleTutor', id],
        queryFn: async () => {
            if (!id) throw new Error("ID must be provided"); 
            const res = await axios.get(`${serverApiUrl}/api/users/all-tutor/${id}`);
            return res.data; 
        },
        keepPreviousData: true,
        enabled: !!id,
    });

    const tutors = responseData ? responseData.payload : null;

    return { tutors, refetch, isLoading, isError };
};