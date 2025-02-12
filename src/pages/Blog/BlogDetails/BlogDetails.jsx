import { useParams } from "react-router-dom";
import { useSingleBlog } from "../../../api/useAllBlog";
import Loading from "../../../Components/Loading/Loading";
import { useEffect, useState } from "react";
import { useAllUsers } from "../../../api/useAllUsers";
import PageTitleShow from "../../../Components/PageTitleShow/PageTitleShow";

const BlogDetails = () => {
    const [userBlog, setUserBlog] = useState([])
    const { id } = useParams();
    const { blogs, refetch, isLoading, isError } = useSingleBlog(id);
    console.log('object single blog', blogs);


    const [users] = useAllUsers();
    const userArray = users.users || [];

    const getUserInfo = (userEmail) => {
        return userArray.find(user => user.email === userEmail);
    };

    useEffect(() => {
        // if (blogs && userArray.length > 0) {
        //     const matchedUsersWithBlogs = blogs.map((blog) => {
        //         const user = getUserInfo(blog.email);
        //         return user ? { ...blog, userInfo: user } : null;
        //     }).filter(review => review !== null);
        //     setUserBlog(matchedUsersWithBlogs);
        // }
    }, [blogs, userArray]);

    if (isLoading) {
        return <Loading />;
    }
    if (isError) {
        return <p className="text-red-500">Error fetching user data</p>;
    }
    if (!blogs?.blog) {
        return <p>No blog data found</p>;
    }

    const { image, name, title, description, studentHelp, category, subject } = blogs.blog;

    return (
        <div className=" my-6 ">
            <PageTitleShow currentPage="Blogs  Details |" />
            <h2 className="text md:text-2xl text-lg font-semibold text-slate-700 text-center">{title}</h2>
            <div className=" mx-auto md:max-w-[450px] max-w-full rounded-lg bg-white shadow-lg dark:bg-[#18181B]">
                <div className="flex items-center justify-between gap-10 px-4 py-4">
                    {/* Avatar image  */}
                    <div className="flex items-center gap-3">
                        <img
                            width={100}
                            height={100}
                            className="h-16 w-16 rounded-full bg-black/40 object-cover"
                            src={image || "https://images.unsplash.com/photo-1460904577954-8fadb262612c?q=80&w=1990&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
                            alt="card navigate ui" />
                        <div className="flex flex-col">
                            <h2 className="text-xl font-semibold">{name || 'Yoan Lee'}</h2>
                            <p className="text-gray-400">2 days ago</p>
                        </div>
                    </div>
                </div>
                {/* Post Image */}
                <div className="flex flex-col gap-1">
                    <div className="w-full"><img width={400} height={200} className="h-[150px] w-full bg-black/40" src="https://images.unsplash.com/photo-1459908676235-d5f02a50184b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="card navigate ui" /></div>
                    <div className="flex gap-1 overflow-hidden">
                        <img width={201} height={201} className="h-[150px] w-[49.5%] bg-black/40" src="https://images.unsplash.com/photo-1452802447250-470a88ac82bc?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="card navigate ui" />
                        <img width={202} height={202} className="h-[150px] w-[49.5%] bg-black/40" src="https://images.unsplash.com/photo-1460398495418-62c9b5d79fbf?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="card navigate ui" />
                    </div>
                </div>
                {/* Post content */}
                <div className="mt-3 space-y-2 px-4">
                    <h2 className="text-xl font-semibold text-slate-800 dark:text-white/90">{title}</h2>
                    <h2 className="text-sm text-gray-500 dark:text-white/50">{description}</h2>
                    <h2 className="text-sm text-gray-500 dark:text-white/50">{studentHelp}</h2>
                    <h2 className="text-sm text-gray-500 dark:text-white/50">{subject}</h2>
                    <h2 className="text-sm text-gray-500 dark:text-white/50">{category}</h2>
                </div>
                {/* icons */}
                <div className="mt-4 flex justify-between px-4 pb-4">

                </div>
            </div>
        </div>
    );
};

export default BlogDetails;