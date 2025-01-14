import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import Lottie from "lottie-react";
import loginLottie from "./../../assets/Animation/login.json";
import PageTitleShow from "../../Components/PageTitleShow/PageTitleShow";
import { imageURLKey } from "../../../ApiSecret";

const Registration = () => {
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [passShow, setPassShow] = useState(false);
    const [passConShow, setPassConShow] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const {
        register,
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

    const onSubmit = (data) => {
        const formData = new FormData();

        // Prepare user data
        const userDate = {
            name: data.name,
            email: data.email,
            phone: data.phone,
            address: data.address,
            password: data.password,
            confirmPassword: data.confirmPassword,
            isAdmin: registerRole === "Admin",
            isParent: registerRole === "Parent",
            isTutor: registerRole === "Tutor",
            isCoaching: registerRole === "Coaching",
            image: null,
            nidBirth: null,
        };

        if (data.coachingLogoImage && data.coachingLogoImage[0]) {
            formData.append("coachingLogoImage", data.coachingLogoImage[0]);
            userDate.image = data.coachingLogoImage[0];
        }
        if (data.coachingTedLicense && data.coachingTedLicense[0]) {
            formData.append("coachingTedLicense", data.coachingTedLicense[0]);
            userDate.nidBirth = data.coachingTedLicense[0];
        }
        if (data.parentImage && data.parentImage[0]) {
            formData.append("parentImage", data.parentImage[0]);
            userDate.image = data.parentImage[0];
        }
        if (data.parentNIDCart && data.parentNIDCart[0]) {
            formData.append("parentNIDCart", data.parentNIDCart[0]);
            userDate.nidBirth = data.parentNIDCart[0];
        }
        if (data.tutorImage && data.tutorImage[0]) {
            formData.append("tutorImage", data.tutorImage[0]);
            userDate.image = data.tutorImage[0];
        }
        if (data.tutorIDCart && data.tutorIDCart[0]) {
            formData.append("tutorIDCart", data.tutorIDCart[0]);
            userDate.nidBirth = data.tutorIDCart[0];
        }

        console.log(userDate);

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
                                        defaultValue={registerRole === 'admin'}
                                    />
                                    <input
                                        {...register("isParent")}
                                        name="isParent"
                                        defaultValue={registerRole === 'parent'}
                                    />
                                    <input
                                        {...register("isTutor")}
                                        name="isTutor"
                                        defaultValue={registerRole === 'tutor'}
                                    />
                                    <input
                                        {...register("isCoaching")}
                                        name="isCoaching"
                                        defaultValue={registerRole === 'coaching'}
                                    />
                                </div>

                                {/*  Condition Photo session section */}
                                {
                                    registerRole === "coaching" ?
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
                                                    </div>
                                                </div>

                                                {/* coaching Ted License file */}
                                                {/* <div className="md:1/3 w-full ">
                                                    <label htmlFor="coachingTedLicense" className="block text-slate-700 font-medium pb-1">
                                                        <span className="font-bold text-slate-500 tracking-wider">Coaching TED License</span>
                                                    </label>
                                                    <div className='form-control rounded-lg border-2   items-center '>
                                                        <input
                                                            {...register('coachingTedLicense', { required: true })}
                                                            name='coachingTedLicense'
                                                            type='file'
                                                            className='file-input file-input-bordered file-input-md w-full max-w-md'
                                                        />
                                                    </div>
                                                </div> */}
                                            </div>
                                        )
                                        :
                                        <>
                                            {
                                                registerRole === "parent" ?
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
                                                                </div>
                                                            </div>
                                                            {/* parent NID Image file */}
                                                            {/* <div className="md:col-span-2 col-span-1">
                                                                <label htmlFor="parentNIDCart" className="block text-slate-700 font-medium pb-1">
                                                                    <span className="font-bold text-slate-500 tracking-wider">Upload Your NID Cart</span>
                                                                </label>
                                                                <div className='form-control rounded-lg border-2   items-center '>
                                                                    <input
                                                                        {...register('parentNIDCart', { required: true })}
                                                                        name='parentNIDCart'
                                                                        type='file'
                                                                        className='file-input file-input-bordered file-input-md w-full max-w-md'
                                                                    />
                                                                </div>
                                                            </div> */}
                                                            {/* gender */}
                                                            <div className="md:w-1/3 w-full">
                                                                <label htmlFor='' className='block text-slate-700 font-medium pb-1'>
                                                                    <span className="font-bold text-slate-500 tracking-wider">Gender</span>
                                                                </label>
                                                                <select {...register("gender")} className="bg-transparent capitalize input border border-sky-300 rounded-lg outline-sky-600 px-4 py-3 w-full placeholder:text-sm placeholder:tracking-wider text-sm">
                                                                    <option value="male">male</option>
                                                                    <option value="female">female</option>
                                                                    <option value="other">other</option>
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
                                                                </div>
                                                            </div>
                                                            {/* tutor Student ID Image file */}
                                                            {/* <div className="md:col-span-2 col-span-1">
                                                                <label htmlFor="tutorIDCart" className="block text-slate-700 font-medium pb-1">
                                                                    <span className="font-bold text-slate-500 tracking-wider">Upload Student Id Cart</span>
                                                                </label>
                                                                <div className='form-control rounded-lg border-2   items-center '>
                                                                    <input
                                                                        {...register('tutorIDCart', { required: true })}
                                                                        name='tutorIDCart'
                                                                        type='file'
                                                                        className='file-input file-input-bordered file-input-md w-full max-w-md'
                                                                    />
                                                                </div>
                                                            </div> */}
                                                            <div className="md:w-1/3 w-full">
                                                                <label htmlFor='' className='block text-slate-700 font-medium pb-1'>
                                                                    <span className="font-bold text-slate-500 tracking-wider">Gender</span>
                                                                </label>
                                                                <select {...register("gender")} className="bg-transparent capitalize input border border-sky-300 rounded-lg outline-sky-600 px-4 py-3 w-full placeholder:text-sm placeholder:tracking-wider text-sm">
                                                                    <option value="male">male</option>
                                                                    <option value="female">female</option>
                                                                    <option value="other">other</option>
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
                                {/* <p className="mt-1 text-center text-red-400">{msg}</p> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    );
};

export default Registration;