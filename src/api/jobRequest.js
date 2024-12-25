import { useQuery } from "@tanstack/react-query"
import axios from "axios";
import { serverApiUrl } from "../../ApiSecret";

const allTuitionJobs = () => {
    const { data: tuitionJobs = [], refetch, isLoading } = useQuery({
        queryKey: ['tuitionJobs'],
        queryFn: async () => {
            const res = await axios.get(`${serverApiUrl}/api/tuition-job`)
            return res.data.payload.tuitionJobs;
        },
    });
    return [tuitionJobs, refetch, isLoading];
};

export default allTuitionJobs;