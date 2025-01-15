import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import Lottie from "lottie-react";
import loginLottie from "./../../assets/Animation/login.json";
import PageTitleShow from "../../Components/PageTitleShow/PageTitleShow";
import axios from "axios";
import Swal from "sweetalert2";
import { imageURLKey, serverApiUrl } from "../../../ApiSecret";

const Registration = () => {
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [passShow, setPassShow] = useState(false);
    const [passConShow, setPassConShow] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [imageError, setImageError] = useState(null);

    const {
        register,
        reset,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onPasswordChange = (e) => {
        setPassword(e.target.value);
        if (e.target.value !== confirmPassword) {
            setErrorMessage("Passwords do not match. Please try again.");
        } else {
            setErrorMessage("");
        }
    };
    const onConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
        if (e.target.value !== password) {
            setErrorMessage("Passwords do not match. Please try again.");
        } else {
            setErrorMessage("");
        }
    };

    const location = useLocation();
    const { registerRole } = location.state || {};
    console.log(registerRole);

    const imageURL = `https://api.imgbb.com/1/upload?key=${imageURLKey}`;

    const onSubmit = async (data) => {
    try {
        console.log("Form data:", data);

        // Prepare form data for image upload
        const formData = new FormData();
        let selectedImage;

        // Determine the image based on role
        if (registerRole === "Coaching" && data.coachingLogoImage?.[0]) {
            selectedImage = data.coachingLogoImage[0];
        } else if (registerRole === "Parent" && data.parentImage?.[0]) {
            selectedImage = data.parentImage[0];
        } else if (registerRole === "Tutor" && data.tutorImage?.[0]) {
            selectedImage = data.tutorImage[0];
        } else {
            setImageError("No image provided for the selected role.");
            return;
        }

        formData.append("image", selectedImage);

        // Upload image
        const imageResponse = await fetch(imageURL, {
            method: "POST",
            body: formData,
        });
        const imageData = await imageResponse.json();

        if (!imageData.success) {
            throw new Error("Failed to upload image");
        }

        const imgURL = imageData.data.display_url; 

        // Map role to boolean fields
        const roleMapping = {
            Admin: { isAdmin: true, isTutor: false, isParent: false, isCoaching: false },
            Tutor: { isAdmin: false, isTutor: true, isParent: false, isCoaching: false },
            Parent: { isAdmin: false, isTutor: false, isParent: true, isCoaching: false },
            Coaching: { isAdmin: false, isTutor: false, isParent: false, isCoaching: true },
        };

        const roleData = roleMapping[registerRole] || {};

        // Prepare user data
        const userData = {
            name: data.name,
            email: data.email,
            phone: data.phone,
            address: data.address,
            password: data.password,
            gender: data.gender,
            image: imgURL,
            ...roleData, 
        };

        console.log("Prepared user data:", userData);

        // Post data to backend
        const response = await axios.post(`${serverApiUrl}/api/users/process-register`, userData);

        if (response.status === 200) {
            console.log("Response data:", response?.data);
            reset();
            Swal.fire({
                position: "top-center",
                icon: "success",
                title: response.data.message || "Please Check Your Email",
                showConfirmButton: false,
                timer: 1500,
            });
        }
    } catch (error) {
        if (error.response?.status === 409) {
            Swal.fire({
                title: "User Exists",
                text: error.response.data.message || "This email is already registered.",
                icon: "error",
            });
        } else if (error.response?.status === 422) {
            const errorMessages = error.response.data?.errors || [];
            Swal.fire({
                title: "Validation Error",
                icon: "error",
                html: errorMessages
                    .map((err) => `<p>${err.field}: ${err.message}</p>`)
                    .join(""),
            });
        } else {
            Swal.fire({
                title: "Error",
                text: error.message || "Something went wrong",
                icon: "error",
            });
        }
    }
};

    return (
        <div className=" footerBg h-screen">
            <PageTitleShow currentPage="Registration |" />

            <div className="container mx-auto">
                <div className="items-center justify-between gap-12 p-3 md:flex">
                    <div className="mb-8 md:w-1/2 md:mb-0">
                        <Lottie
                            animationData={loginLottie}
                            loop={true}
                            className="w-full md:h-[500px]"
                        />
                    </div>
                    <div className="flex-shrink-0 w-full border-[.5px] border-sky-100 rounded-lg shadow-lg shadow-sky-200 bg-transparent md:w-1/2 card backdrop-blur-sm">
                        <div className="text-center ">
                            <h1 className="md:pb-2 md:pt-4 md:py-0 py-3 md:text-3xl text-2xl font-bold md:font-extrabold tracking-wider"><span className="capitalize text-blue-500">{registerRole}</span> Registration</h1>
                        </div>
                        <div className="p-6">
                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                                {/* Name Field */}
                                <div className="relative space-y-1">
                                    <label className="block text-slate-700 font-medium">
                                        <span className="font-bold text-slate-500 tracking-wider capitalize">{registerRole} Name* </span>
                                    </label>
                                    <input
                                        {...register("name", {
                                            required: "Name field is required",
                                            minLength: {
                                                value: 3,
                                                message: "The length of the name must be at least 3 characters",
                                            },
                                            maxLength: {
                                                value: 31,
                                                message: "The length of the name can be a maximum of 31 characters",
                                            },
                                            validate: (value) =>
                                                value.trim().length >= 3 || "Name cannot be empty or only spaces",
                                        })}
                                        type="text"
                                        id="name"
                                        placeholder="Enter your name"
                                        className="bg-transparent input border border-sky-300 rounded-lg outline-sky-600 px-4 py-3 w-full placeholder:text-sm placeholder:tracking-wider text-sm"
                                    />
                                    {errors.name && (
                                        <span className="mt-1 text-red-500">
                                            {errors.name.message}
                                        </span>
                                    )}
                                </div>

                                {/* Email Field */}
                                <div className="relative space-y-1">
                                    <label className="block text-slate-700 font-medium">
                                        <span className="font-bold text-slate-500 tracking-wider">Email* </span>
                                    </label>
                                    <input
                                        {...register("email", {
                                            required: "Email field is required",
                                            pattern: {
                                                value: /^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/,
                                                message: "Please enter a valid email",
                                            },
                                        })}
                                        type="email"
                                        id="email"
                                        placeholder="Enter your email"
                                        className="bg-transparent input border border-sky-300 rounded-lg outline-sky-600 px-4 py-3 w-full placeholder:text-sm placeholder:tracking-wider text-sm"
                                    />
                                    {errors.email && (
                                        <span className="mt-1 text-red-500">
                                            {errors.email.message}
                                        </span>
                                    )}
                                </div>
                                <div className="space-y-1">
                                    <label className="block text-slate-700 font-medium">
                                        <span className="font-bold text-slate-500 tracking-wider">Phone* </span>
                                    </label>
                                    <input
                                        {...register("phone", {
                                            required: "Phone field is required",
                                            pattern: {
                                                value: /^(\+8801|8801|01)[3-9]\d{8}$/,
                                                message: "Please enter a valid phone number starting with +8801, 8801, or 01",
                                            },
                                        })}
                                        type="text"
                                        placeholder="Enter Your Phone (e.g., +8801XXXXXXXXX)"
                                        className="bg-transparent input border border-sky-300 rounded-lg outline-sky-600 px-4 py-3 w-full placeholder:text-sm placeholder:tracking-wider text-sm"
                                    />
                                    {errors.phone && (
                                        <span className="mt-1 text-red-500">
                                            {errors.phone.message}
                                        </span>
                                    )}
                                </div>
                                <div className=" space-y-1">
                                    <label className="block text-slate-700  font-medium">
                                        <span className="font-bold text-slate-500 tracking-wider">Address* </span>
                                    </label>
                                    <input
                                        {...register("address", { required: true })}
                                        type="text"
                                        placeholder="Enter Your Address"
                                        className="bg-transparent input border border-sky-300 rounded-lg outline-sky-600 px-4 py-3 w-full placeholder:text-sm placeholder:tracking-wider text-sm"
                                    />
                                    {errors.address && (
                                        <span className="mt-1 text-red-500">
                                            Address field is required
                                        </span>
                                    )}
                                </div>
                                {/* Password Field */}
                                <div className="relative space-y-1">
                                    <label className="block text-slate-700 font-medium">
                                        <span className="font-bold text-slate-500 tracking-wider">Password* </span>
                                    </label>
                                    <input
                                        {...register("password", {
                                            required: "Password field is required",
                                            minLength: {
                                                value: 8,
                                                message: "The length of the password must be at least 8 characters",
                                            },
                                            pattern: {
                                                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                                                message: "Password must include at least one uppercase, one lowercase, one number, and one special character",
                                            },
                                        })}
                                        type={passShow ? "text" : "password"}
                                        id="password"
                                        value={password}
                                        onChange={onPasswordChange}
                                        placeholder="***********"
                                        className="bg-transparent input border border-sky-300 rounded-lg outline-sky-600 px-4 py-3 w-full placeholder:text-sm placeholder:tracking-wider text-sm"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setPassShow(!passShow)}
                                        className="absolute top-9 right-3 text-lg cursor-pointer bg-transparent border-none"
                                    >
                                        {passShow ? "🙉" : "🙈"}
                                    </button>
                                    {errors.password && (
                                        <span className="mt-1 text-red-500">
                                            {errors.password.message}
                                        </span>
                                    )}
                                </div>

                                {/* Confirm Password Field */}
                                <div className="relative space-y-1">
                                    <label className="block text-slate-700 font-medium">
                                        <span className="font-bold text-slate-500 tracking-wider">Confirm Password* </span>
                                    </label>
                                    <input
                                        {...register("confirmPassword", {
                                            required: "Confirm Password field is required",
                                            validate: (value) =>
                                                value === password || "Passwords do not match",
                                        })}
                                        type={passConShow ? "text" : "password"}
                                        id="confirm-password"
                                        value={confirmPassword}
                                        onChange={onConfirmPasswordChange}
                                        placeholder="***********"
                                        className="bg-transparent input border border-sky-300 rounded-lg outline-sky-600 px-4 py-3 w-full placeholder:text-sm placeholder:tracking-wider text-sm"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setPassConShow(!passConShow)}
                                        className="absolute top-9 right-3 text-lg cursor-pointer bg-transparent border-none"
                                    >
                                        {passConShow ? "🙉" : "🙈"}
                                    </button>
                                    {errors.confirmPassword && (
                                        <span className="mt-1 text-red-500">
                                            {errors.confirmPassword.message}
                                        </span>
                                    )}
                                </div>
                                <div className="space-y-1 hidden">
                                    <input
                                        {...register("isAdmin")}
                                        name="isAdmin"
                                        defaultValue={registerRole === 'Admin'}
                                    />
                                    <input
                                        {...register("isParent")}
                                        name="isParent"
                                        defaultValue={registerRole === 'Parent'}
                                    />
                                    <input
                                        {...register("isTutor")}
                                        name="isTutor"
                                        defaultValue={registerRole === 'Tutor'}
                                    />
                                    <input
                                        {...register("isCoaching")}
                                        name="isCoaching"
                                        defaultValue={registerRole === 'Coaching'}
                                    />
                                </div>

                                {/*  Condition Photo session section */}
                                {
                                    registerRole === "Coaching" ?
                                        (
                                            <div className="flex items-center justify-between gap-5">
                                                {/* coaching Logo Image File */}
                                                <div className="md:w-2/3 w-full">
                                                    <label htmlFor="coachingLogoImage" className="block text-slate-700 font-medium pb-1">
                                                        <span className="font-bold text-slate-500 tracking-wider">Coaching Center Logo</span>
                                                    </label>
                                                    <div className='form-control rounded-lg border-2   items-center '>
                                                        <input
                                                            {...register('coachingLogoImage', { required: true })}
                                                            name='coachingLogoImage'
                                                            type='file'
                                                            className='file-input file-input-bordered file-input-md w-full max-w-md'
                                                        />
                                                        {errors.coachingLogoImage && (
                                                            <span className="mt-1 text-red-500">
                                                                Logo Image is required
                                                            </span>
                                                        )}
                                                        {imageError && (
                                                            <p className="text-red-500 text-sm">{imageError}</p>
                                                        )}
                                                    </div>
                                                </div>


                                            </div>
                                        )
                                        :
                                        <>
                                            {
                                                registerRole === "Parent" ?
                                                    (
                                                        <div className="md:flex items-center justify-between gap-5">
                                                            {/* parent Image File */}
                                                            <div className="md:w-2/3 w-full">
                                                                <label htmlFor="parentImage" className="block text-slate-700 font-medium pb-1">
                                                                    <span className="font-bold text-slate-500 tracking-wider">Upload Your Photo</span>
                                                                </label>
                                                                <div className='form-control rounded-lg border-2   items-center '>
                                                                    <input
                                                                        {...register('parentImage', { required: true })}
                                                                        name='parentImage'
                                                                        type='file'
                                                                        className='file-input file-input-bordered file-input-md w-full max-w-md'
                                                                    />
                                                                    {errors.parentImage && (
                                                                        <span className="mt-1 text-red-500">
                                                                            Image is required
                                                                        </span>
                                                                    )}
                                                                    {imageError && (
                                                                        <p className="text-red-500 text-sm">{imageError}</p>
                                                                    )}
                                                                </div>
                                                            </div>

                                                            {/* gender */}
                                                            <div className="md:w-1/3 w-full">
                                                                <label htmlFor='' className='block text-slate-700 font-medium pb-1'>
                                                                    <span className="font-bold text-slate-500 tracking-wider">Gender</span>
                                                                </label>
                                                                <select {...register("gender")} className="bg-transparent capitalize input border border-sky-300 rounded-lg outline-sky-600 px-4 py-3 w-full placeholder:text-sm placeholder:tracking-wider text-sm">
                                                                    <option value="Male">Male</option>
                                                                    <option value="Female">Female</option>
                                                                    <option value="Other">Other</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    )
                                                    :
                                                    (
                                                        <div className="flex items-center justify-between gap-5">
                                                            {/* Tutor Image File */}
                                                            <div className="md:w-2/3 w-full">
                                                                <label htmlFor="" className="block text-slate-700 font-medium pb-1">
                                                                    <span className="font-bold text-slate-500 tracking-wider">Upload Your Photo</span>
                                                                </label>
                                                                <div className='form-control rounded-lg border-2   items-center '>
                                                                    <input
                                                                        {...register('tutorImage', { required: true })}
                                                                        name='tutorImage'
                                                                        type='file'
                                                                        className='file-input file-input-bordered file-input-md w-full max-w-md'
                                                                    />
                                                                    {errors.tutorImage && (
                                                                        <span className="mt-1 text-red-500">
                                                                            Image is required
                                                                        </span>
                                                                    )}
                                                                    {imageError && (
                                                                        <p className="text-red-500 text-sm">{imageError}</p>
                                                                    )}
                                                                </div>
                                                            </div>

                                                            <div className="md:w-1/3 w-full">
                                                                <label htmlFor='' className='block text-slate-700 font-medium pb-1'>
                                                                    <span className="font-bold text-slate-500 tracking-wider">Gender</span>
                                                                </label>
                                                                <select {...register("gender")} className="bg-transparent capitalize input border border-sky-300 rounded-lg outline-sky-600 px-4 py-3 w-full placeholder:text-sm placeholder:tracking-wider text-sm">
                                                                    <option value="Male">Male</option>
                                                                    <option value="Female">Female</option>
                                                                    <option value="Other">Other</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    )

                                            }
                                        </>
                                }
                                {/* accept Terms Condition */}
                                <label className=" inline-flex mt-2">
                                    <input
                                        type="checkbox"
                                        name="checkbox"
                                        {...register("checkbox")}
                                        required
                                        className="w-4 h-4 rounded-full" />
                                    <p className='md:pl-3 pl-1 text-sm font-open'>Accept
                                        <Link to='/terms-condition' className='text-blue-600 text-sm underline md:pl-2'>Terms and Condition
                                        </Link>
                                    </p>
                                </label>
                                <div className="my-5 text-center">
                                    <button type="submit" className="relative inline-block h-14 w-40 text-lg font-medium overflow-hidden border-sky-500 px-5 py-2 
                                    text-sky-500 shadow-lg before:absolute before:inset-0 before:-z-10 before:block before:translate-x-[90%] 
                                    before:rounded-s-full before:bg-sky-600 before:duration-200 after:absolute after:inset-0 after:-z-10 after:block after:-translate-x-[90%] after:rounded-e-full 
                                    after:bg-sky-600 tracking-wider after:duration-500  hover:text-white before:hover:translate-x-0 after:hover:translate-x-0">Submit</button>
                                </div>
                            </form>
                            <div className="text-center my-5">
                                <div className="divider divide-red-50"></div>
                                <p className="text-center text-sm font-semibold">
                                    Already registered?
                                    <Link className="text-base font-bold text-red-600 tracking-wider" to="/login"> Login
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    );
};

export default Registration;