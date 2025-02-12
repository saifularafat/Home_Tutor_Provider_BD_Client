import { useQuery } from "@tanstack/react-query"
import axios from "axios";
import { serverApiUrl } from "../../ApiSecret";

export const useAllBlogs = (page = 1, searchText = "") => {
    const { data: blogs = {}, refetch, isLoading } = useQuery({
        queryKey: ['blogs', page, searchText],
        queryFn: async () => {
            const res = await axios.get(`${serverApiUrl}/api/blog?page=${page}&search=${searchText}`);
            return res.data.payload;
        },
        keepPreviousData: true,
    });

    return [blogs, refetch, isLoading];
};

export const useSingleBlog = (id) => {
    const { data: responseData, refetch, isLoading, isError } = useQuery({
        queryKey: ['singleBlog', id],
        queryFn: async () => {
            if (!id) throw new Error("ID must be provided");
            const res = await axios.get(`${serverApiUrl}/api/blog/${id}`);
            return res.data;
        },
        keepPreviousData: true,
        enabled: !!id,
    });

    // Extracting payload only if responseData is defined
    const blogs = responseData ? responseData.payload : null;

    return { blogs, refetch, isLoading, isError };
};
