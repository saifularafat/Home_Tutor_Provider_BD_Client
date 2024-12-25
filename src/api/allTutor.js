import { useQuery } from "@tanstack/react-query"
import axios from "axios";
import { serverApiUrl } from "../../ApiSecret";

const allTutor = () => {
    const { data: tutors = [], refetch, isLoading } = useQuery({
        queryKey: ['tutors'],
        queryFn: async () => {
            const res = await axios.get(`${serverApiUrl}/api/users/all-tutor`)
            return res.data.payload.tutors;
        },
    });
    return [tutors, refetch, isLoading];
}; 

export default allTutor;