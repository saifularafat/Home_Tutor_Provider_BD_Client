import Loading from "../../../../../Components/Loading/Loading";

const PendingBlog = ({ pendingBlog, isLoading }) => {
    console.log('pending Blog ====>', pendingBlog);

    // TODO ACTION APPROVE AND DELETED

    if (isLoading) {
        return <Loading />
    }
    return (
        <div className="grid md:grid-cols-3 grid-cols-1 gap-5 pb-5">
            {pendingBlog?.map((blog) => (
                <div key={blog?._id} className="w-full bg-white rounded-xl shadow-md hover:shadow-xl hover:shadow-sky-200 flex flex-col transition-all duration-300">
                    <div>
                        <img
                            className="h-[250px] w-full rounded-t-lg object-cover"
                            src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt=""
                        />
                    </div>
                    <div className="px-3 py-2 flex-grow">
                        <h3 className="text-base font-bold text-left">{blog?.title}</h3>
                        <p className="text-sm font-normal text-justify">{blog?.description}</p>
                        <p className="text-sm font-normal pt-2">
                            A. Name: <span className="font-semibold">{blog?.authorName}</span>
                        </p>
                        <p className="text-sm font-normal">
                            Time: <span className="font-normal">
                                {new Date(blog?.createdAt).toLocaleDateString()}{" "}
                                <span className="font-semibold"> {new Date(blog?.createdAt).toLocaleTimeString()}</span>
                            </span>
                        </p>
                    </div>
                    <div className="flex items-center justify-between px-4 py-3 mt-auto">
                        <button className="text-sm font-medium px-3 py-1 bg-blue-400 hover:bg-blue-600 hover:text-slate-100 hover:scale-105 transition-all duration-200 tracking-wider text-slate-800 rounded-lg">
                            Approve
                        </button>
                        <button className="text-sm font-medium px-3 py-1 bg-red-400 hover:bg-red-600 hover:text-slate-100 hover:scale-105 transition-all duration-200 tracking-wider text-slate-800 rounded-lg">
                            Delete
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default PendingBlog;
