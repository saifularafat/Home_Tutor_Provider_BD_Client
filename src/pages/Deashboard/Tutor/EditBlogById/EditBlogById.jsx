import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useAllBlogs } from "../../../../api/useAllBlog";
import Loading from "../../../../Components/Loading/Loading";
import PageTitleShow from "../../../../Components/PageTitleShow/PageTitleShow";
import { imageURLKey } from "../../../../../ApiSecret";
import { BlogCategory, BlogMedium, StudentHelpKeywords } from "../../../../Helpers/blogAlldata";
import AllSubjects from "../../../../Helpers/SubjectData";
import EditDropdownField from "./EditDropdownField";
import { handleEditById } from "../../../../Components/EditItem/EditItem";

const EditBlogById = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [imageError, setImageError] = useState(null);

    const [blogs, refetch, isLoading] = useAllBlogs(1, "");
    const { blogs: blogList = [] } = blogs || {};
    const singleBlog = blogList.find((findBlog) => findBlog?._id === id) || {};

    const { title, description, image, medium, category, subject, studentHelp } = singleBlog;

    const {
        register,
        formState: { errors },
        handleSubmit,
        setValue,
        watch,
    } = useForm();

    // Watch specific fields to dynamically update dropdown selections
    const blogCategory = watch("blogCategory") || category;
    const blogMedium = watch("blogMedium") || medium;
    const blogSubject = watch("blogSubject") || subject;
    const studentHelpKey = watch("studentHelpKey") || studentHelp;

    const imageURL = `https://api.imgbb.com/1/upload?key=${imageURLKey}`;

    const handleBlogEditById = async (data) => {
        setImageError(null);
        let imgURL = image;
        if (data.image && data.image[0]) {
            const imageFile = data.image[0];
            if (imageFile.size > 1 * 1024 * 1024) {
                setImageError("Image size should not exceed 1MB.");
                return;
            }

            try {
                const formData = new FormData();
                formData.append("image", imageFile);
                const imageResponse = await fetch(imageURL, {
                    method: "POST",
                    body: formData,
                });
                const imageData = await imageResponse.json();
                if (!imageData.success) {
                    setImageError("Image upload failed. Please try again.");
                    return;
                }
                imgURL = imageData.data.display_url;
            } catch (error) {
                setImageError("An unexpected error occurred during image upload.");
                return;
            }
        }
        const updateDetails = {
            title: data.title || title,
            description: data.blogDescription || description,
            image: imgURL,
            medium: blogMedium,
            category: blogCategory,
            subject: blogSubject,
            studentHelp: studentHelpKey,
        };
        // console.log("EDIT BLOG Number 101 ===>>>", updateDetails);

        const editOption = `api/blog/${singleBlog._id}`;
        const updateTitle = "Blog";
        const navigateLink = "/dashboard/your-blog";

        try {
            await handleEditById(editOption, updateDetails, refetch, updateTitle, navigate, navigateLink);
        } catch (error) {
            console.error("Failed to edit the blog:", error);
        }
    };

    if (isLoading) {
        return <Loading />;
    }

    return (
        <div className="pb-5">
            {/* Page Title */}
            <PageTitleShow currentPage="Blog Edit |" />

            {/* Form Container */}
            <div className="md:max-w-5xl w-full mx-2 md:mx-auto bg-white p-5 rounded-xl shadow-md mt-8">
                <h2 className="py-4 text-3xl font-semibold text-slate-700 text-center">Edit Blog</h2>

                {/* Edit Form */}
                <form onSubmit={handleSubmit(handleBlogEditById)} className="text-center">
                    <div className="grid md:grid-cols-2 gap-5 p-5">

                        {/* Blog Image Input */}
                        <div className="space-y-1">
                            <label className="block text-slate-700 font-medium">
                                Blog Image <span className="text-xs">(Max 1MB)</span>
                            </label>
                            <input
                                type="file"
                                className="file-input file-input-bordered file-input-info w-full"
                                {...register("image", {
                                    validate: (value) => {
                                        if (!value?.[0]) return true; // Optional field
                                        const isValidType = ["image/png", "image/jpg", "image/jpeg"].includes(value[0]?.type);
                                        return isValidType || "Only PNG, JPG, and JPEG files are allowed.";
                                    },
                                })}
                                accept=".png, .jpg, .jpeg"
                            />
                            {errors.image && <p className="text-red-500 text-sm mt-1">{errors.image.message}</p>}
                            {imageError && <p className="text-red-500 text-sm mt-1">{imageError}</p>}
                            {image && (
                                <div className="mt-1">
                                    <label className="text-slate-700 font-medium text-sm">Old image:</label>
                                    <img
                                        src={image}
                                        alt="Blog"
                                        className="w-full max-h-20 object-contain border rounded-lg"
                                    />
                                </div>
                            )}
                        </div>

                        {/* Blog Title */}
                        <div className="space-y-1">
                            <label className="block text-slate-700 font-medium">Blog Title</label>
                            <input
                                {...register("title")}
                                type="text"
                                defaultValue={title}
                                placeholder="Enter Your Blog Title Name.."
                                className="bg-transparent input border border-sky-300 rounded-lg outline-sky-600 px-4 py-3 w-full placeholder:text-sm placeholder:tracking-wider text-sm"
                            />
                        </div>

                        {/* Dropdown Inputs */}
                        <EditDropdownField
                            label="Blog Medium"
                            defaultTextValue={medium}
                            selectedValue={blogMedium}
                            options={BlogMedium}
                            setValue={(value) => setValue("blogMedium", value, { shouldValidate: true })}
                        />
                        <EditDropdownField
                            label="Category"
                            defaultTextValue={category}
                            selectedValue={blogCategory}
                            options={BlogCategory}
                            setValue={(value) => setValue("blogCategory", value, { shouldValidate: true })}
                        />
                        <EditDropdownField
                            label="Subject"
                            defaultTextValue={subject}
                            selectedValue={blogSubject}
                            options={AllSubjects}
                            setValue={(value) => setValue("blogSubject", value, { shouldValidate: true })}
                        />
                        <EditDropdownField
                            label="Student Help Key"
                            defaultTextValue={studentHelp}
                            selectedValue={studentHelpKey}
                            options={StudentHelpKeywords}
                            setValue={(value) => setValue("studentHelpKey", value, { shouldValidate: true })}
                        />

                        {/* Blog Description */}
                        <div className="md:col-span-2 col-span-1 space-y-2">
                            <label className="block text-slate-700 font-medium">Blog Description</label>
                            <textarea
                                cols="20"
                                rows="3"
                                defaultValue={description}
                                placeholder="Blog Description"
                                {...register("blogDescription")}
                                className="border border-sky-300 rounded-lg outline-sky-400 placeholder:text-sm overflow-hidden w-full p-2"
                            ></textarea>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div>
                        <input
                            className="bg-blue-400 text-white py-2 px-4 rounded-lg hover:bg-blue-500 transition-all duration-200 mb-1"
                            type="submit"
                            value="Edit Blog"
                        />
                    </div>
                </form>
            </div>
        </div>
    );
};


export default EditBlogById;
