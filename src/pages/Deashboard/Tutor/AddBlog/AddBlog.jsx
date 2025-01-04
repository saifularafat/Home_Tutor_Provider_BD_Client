import { useForm } from "react-hook-form";
import { useState } from "react";
import SearchDropdown from "../../../../Components/SearchInputFuntion/SearchDropdown";
import { BlogCategory, BlogMedium, StudentHelpKeywords } from "../../../../Helpers/blogAlldata";
import AllSubjects from "../../../../Helpers/SubjectData";

const AddBlog = () => {
    // const [blogCategory, setBlogCategory] = useState("");
    const [imageError, setImageError] = useState(null);

    const {
        register,
        formState: { errors },
        handleSubmit,
        setValue,
        watch
    } = useForm();

    const blogCategory = watch("blogCategory");
    const blogMedium = watch("blogMedium");
    const blogSubject = watch("blogSubject");
    const studentHelpKey = watch("studentHelpKey");


    const onSubmit = (data) => {
        const imageFile = data.image[0];
        setImageError(null);
        if (imageFile.size > 1 * 1024 * 1024) {
            setImageError("Image size should not exceed 1MB.");
            return;
        }

        const blogInfo = {
            image: imageFile,
            title: data.blogTitle,
            category: data.blogCategory,
            medium: data.blogMedium,
            subject: data.blogSubject,
            studentHelp: data.studentHelpKey,
            blogDescription: data.blogDescription,
            authorName: 'Altap',
            authorEducationLevel: 'B.sc',
            authorStudySubject: 'Computer',
            authorProfession: 'Engineer',
            userId: '142563'
        };

        console.log("Form data:", blogInfo);
        // Proceed with form submission logic (e.g., upload to server)
    };
    return (
        <div className="pb-5">
            <div className="md:max-w-4xl w-full mx-2 md:mx-auto bg-white p-5 rounded-xl shadow-md mt-8">
                <h2 className="py-4 text-3xl font-semibold text-slate-700 text-center">Add Blog</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="text-center">
                    <div className="grid md:grid-cols-2 gap-5 p-5">
                        <div className="space-y-1">
                            <label className="block text-slate-700 font-medium">
                                <span className="font-semibold text-slate-600 tracking-wider">Blog Image <span className="text-xs">(Max 2MB)</span></span>
                            </label>
                            <input
                                type="file"
                                className="file-input file-input-bordered file-input-info w-full"
                                {...register("image", {
                                    required: "Blog Photo is required",
                                    validate: {
                                        fileType: (value) =>
                                            ["image/png", "image/jpg", "image/jpeg"].includes(value[0]?.type) || "Only PNG, JPG, and JPEG files are allowed.",
                                    },
                                })}
                                accept=".png, .jpg, .jpeg"
                            />
                            {errors.image && (
                                <p className="text-red-500 text-sm">{errors.image.message}</p>
                            )}
                            {imageError && (
                                <p className="text-red-500 text-sm">{imageError}</p>
                            )}
                        </div>

                        <div className="space-y-1">
                            <label className="block text-slate-700 font-medium">
                                <span className="font-semibold text-slate-600 tracking-wider">Blog Title</span>
                            </label>
                            <input
                                {...register("blogTitle", { required: true })}
                                type="text"
                                placeholder="Enter Your Blog Title Name.."
                                className="bg-transparent input border border-sky-300 rounded-lg outline-sky-600 px-4 py-3 w-full placeholder:text-sm placeholder:tracking-wider text-sm"
                            />
                            {errors.blogTitle && (
                                <p className="text-red-500 text-sm">Blog title is required</p>
                            )}
                        </div>

                        <div className="space-y-1">
                            <label className="block text-slate-700 font-medium">
                                <span className="font-semibold text-slate-600 tracking-wider">Blog Medium</span>
                            </label>
                            <SearchDropdown
                                options={BlogMedium}
                                selectedValue={blogMedium}
                                onSelect={(value) => setValue("blogMedium", value, { shouldValidate: true })}
                                hookPlaceholder="Please select a Medium"
                            />
                            {!blogMedium && (
                                <p className="text-red-500 text-sm">Medium is required</p>
                            )}
                        </div>
                        {/* <div className="space-y-1">
                            <label className="block text-slate-700 font-medium">
                                <span className="font-semibold text-slate-600 tracking-wider">Publishing Date</span>
                            </label>
                            <input
                                {...register("publishingDate", { required: true })}
                                type="date"
                                placeholder="Publishing Date"
                                className="bg-transparent input border border-sky-300 rounded-lg outline-sky-600 px-4 py-3 w-full placeholder:text-sm placeholder:tracking-wider text-sm"
                            />
                            {errors.publishingDate && (
                                <p className="text-red-500 text-sm">Publishing date is required</p>
                            )}
                        </div> */}
                        <div className="space-y-1">
                            <label className="block text-slate-700 font-medium">
                                <span className="font-semibold text-slate-600 tracking-wider">Category</span>
                            </label>
                            <SearchDropdown
                                options={BlogCategory}
                                selectedValue={blogCategory}
                                onSelect={(value) => setValue("blogCategory", value, { shouldValidate: true })}
                                hookPlaceholder="Please select a category"
                            />
                            {!blogCategory && (
                                <p className="text-red-500 text-sm">Category is required</p>
                            )}

                        </div>
                        <div className="space-y-1">
                            <label className="block text-slate-700 font-medium">
                                <span className="font-semibold text-slate-600 tracking-wider">Subject</span>
                            </label>
                            <SearchDropdown
                                options={AllSubjects}
                                selectedValue={blogSubject}
                                onSelect={(value) => setValue("blogSubject", value, { shouldValidate: true })}
                                hookPlaceholder="Please select a Subject"
                            />
                            {!blogSubject && (
                                <p className="text-red-500 text-sm">blog subject is required</p>
                            )}
                        </div>
                        <div className="space-y-1">
                            <label className="block text-slate-700 font-medium">
                                <span className="font-semibold text-slate-600 tracking-wider">Student Help</span>
                            </label>
                            <SearchDropdown
                                options={StudentHelpKeywords}
                                selectedValue={studentHelpKey}
                                onSelect={(value) => setValue("studentHelpKey", value, { shouldValidate: true })}
                                hookPlaceholder="Please select a Student Help Key"
                            />
                            {!studentHelpKey && (
                                <p className="text-red-500 text-sm">Student Help Key is required</p>
                            )}
                        </div>
                        <div className="md:col-span-2 col-span-1 space-y-2">
                            <label className="block text-slate-700 font-medium">
                                <span className="font-semibold text-slate-600 tracking-wider">Blog Description</span>
                            </label>
                            <textarea
                                cols="20"
                                rows="3"
                                placeholder="Blog Description"
                                {...register("blogDescription")}
                                className="border border-sky-300 rounded-lg outline-sky-400 placeholder:text-sm overflow-hidden w-full p-2"
                            ></textarea>
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
