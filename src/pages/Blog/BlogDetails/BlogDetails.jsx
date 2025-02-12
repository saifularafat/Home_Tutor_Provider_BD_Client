import { useParams } from "react-router-dom";
import { useSingleBlog } from "../../../api/useAllBlog";

const BlogDetails = () => {
    const { id } = useParams();
    const { blogs, refetch, isLoading, isError } = useSingleBlog(id)
    return (
        <div>

        </div>
    );
};

export default BlogDetails;