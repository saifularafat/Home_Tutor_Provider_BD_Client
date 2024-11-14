import { useForm } from "react-hook-form";

const AddBlog = () => {

    const {
        register,
        formState: { errors },
        handleSubmit
    } = useForm();

    const onSubmit = (data) => {
        const blogInfo = {
            blogPhoto: data.blogPhoto,
            blogTitle: data.blogTitle,
            publishingDate: data.publishingDate,
            instructorName: data.instructorName,
            blogDescription: data.blogDescription,
        }
        console.log("Form data:", blogInfo);
    };

    //   const handleBlogAdding = (event) => {
    //     event.preventDefault();
    //     const form = event.target;
    //     const image_url = form.image_url.value;
    //     const title = form.title.value;
    //     const publishing_date = form.publishing_date.value;
    //     const content = form.content.value;
    //     const instructorName = form.instructorName.value;

    //     fetch("https://e-exam-pro-server.vercel.app/blogs", {
    //       method: "POST",
    //       headers: {
    //         "content-type": "application/json",
    //       },
    //       body: JSON.stringify(order),
    //     })
    //       .then((res) => res.json())
    //       .then((data) => {
    //         //console.log(data)
    //         if (data.insertedId) {
    //           Swal.fire({
    //             position: "middle-center",
    //             icon: "success",
    //             title: "Added Successfully",
    //             showConfirmButton: true,
    //             timer: 1500,
    //           });
    //         }

    //         form.reset();
    //       });
    //   };

    return (
        <div className="pb-5">
            <div className="md:max-w-4xl w-full mx-2 md:mx-auto rounded-lg bg-white p-5 rounded-xlshadow-md mt-8">
                <h2 className=" py-4 text-3xl font-semibold text-slate-700 text-center">Add Blog</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="text-center">
                    <div className="grid md:grid-cols-2 gap-5 p-5">
                        <div className="space-y-1">
                            <label className="block text-slate-700 font-medium">
                                <span className="font-semibold text-slate-600 tracking-wider">Blog Photo <span className="text-xs">(সর্বোচ্চ 2MB)</span></span>
                            </label>
                            <input
                                type="file"
                                className="file-input file-input-bordered file-input-info w-full"
                                {...register("blogPhoto", {
                                    required: "Blog Photo is required",
                                    validate: {
                                        fileType: (value) =>
                                            ["image/png", "image/jpg", "image/jpeg"].includes(value[0]?.type) || "Only PNG, JPG, and JPEG files are allowed.",
                                        fileSize: (value) =>
                                            value[0]?.size <= 2 * 1024 * 1024 || "File size should be less than or equal to 2MB.",
                                    },
                                })}
                                accept=".png, .jpg, .jpeg"
                            />
                        </div>
                        <div className="space-y-1">
                            <label className="block text-slate-700 font-medium">
                                <span className="font-semibold text-slate-600 tracking-wider">Blog Title </span>
                            </label>
                            <input
                                {...register("blogTitle", { required: true })}
                                type="text"
                                placeholder="Enter Your Blog Title Name.."
                                className="bg-transparent input border border-sky-300 rounded-lg outline-sky-600 px-4 py-3 w-full placeholder:text-sm placeholder:tracking-wider text-sm"
                            />
                        </div>
                        <div className="space-y-1">
                            <label className="block text-slate-700 font-medium">
                                <span className="font-semibold text-slate-600 tracking-wider">Publishing Date </span>
                            </label>
                            <input
                                {...register("publishingDate", { required: true })}
                                type="date"
                                placeholder="Publishing Date"
                                className="bg-transparent input border border-sky-300 rounded-lg outline-sky-600 px-4 py-3 w-full placeholder:text-sm placeholder:tracking-wider text-sm"
                            />
                        </div>
                        <div className="space-y-1">
                            <label className="block text-slate-700 font-medium">
                                <span className="font-semibold text-slate-600 tracking-wider">Publisher Name</span>
                            </label>
                            <input
                                {...register("instructorName", { required: true })}
                                type="text"
                                placeholder="Publisher_Name"
                                className="bg-transparent input border border-sky-300 rounded-lg outline-sky-600 px-4 py-3 w-full placeholder:text-sm placeholder:tracking-wider text-sm"
                            />
                        </div>
                        <div className="md:col-span-2 col-span-1 space-y-2">
                            <label className="block text-slate-700 font-medium">
                                <span className="font-semibold text-slate-600 tracking-wider">Blog Description</span>
                            </label>
                            <textarea
                                name=""
                                id=""
                                cols="20"
                                rows="3"
                                placeholder="Blog Description"
                                {...register("blogDescription")}
                                className="border border-sky-300 rounded-lg outline-sky-400 placeholder:text-sm overflow-hidden w-full p-2"
                            >
                            </textarea>
                        </div>
                    </div>
                    <div>
                        <input
                            className="bg-blue-400 text-white py-2 px-4 rounded-lg hover:bg-blue-500 transition-all duration-200 mb-1"
                            type="submit"
                            value="Add New Blog"
                        />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddBlog;
