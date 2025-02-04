import { useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { serverApiUrl } from "../../../ApiSecret"; // Your API URL
import axios from "axios";
import Lottie from "lottie-react";
import loginLottie from "./../../assets/Animation/login.json";
import PageTitleShow from "../../Components/PageTitleShow/PageTitleShow";
import { useNavigate } from "react-router-dom";

const Login = () => {

    const [password, setPassword] = useState("");
    const [passShow, setPassShow] = useState(false);
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    // onSubmit function for the login form
    const onSubmit = async (data) => {
        const userData = {
            email: data.email,
            password: data.password,
        };

        try {
            // Ensure that the credentials (cookies) are included in the request
            const response = await axios.post(
                `${serverApiUrl}/api/auth/login`,
                userData,
                { withCredentials: true } // This ensures that cookies are sent with the request
            );

            if (response.status === 200) {
                console.log("accessToken  3888888======>>>>>", response?.data?.payload?.token)
                localStorage.setItem('accessToken', response?.data?.payload?.token)

                // On successful login, the server will set the cookies (accessToken and refreshToken)
                Swal.fire({
                    position: "top-center",
                    icon: "success",
                    title: response.data.message,
                    showConfirmButton: false,
                    timer: 1500,
                });
                navigate('/')
            }
        } catch (error) {
            if (error.response?.status === 401) {
                Swal.fire({
                    title: "Error",
                    text: "Invalid email or password",
                    icon: "error",
                });
            } else if (error.response?.status === 403) {
                Swal.fire({
                    title: "Banned",
                    text: "Your account is banned. Please contact the authorities.",
                    icon: "error",
                });
            } else {
                Swal.fire({
                    title: "Error",
                    text: error.message || "Something went wrong. Please try again.",
                    icon: "error",
                });
            }
        }
    };
    return (
        <div className="footerBg h-screen">
            <PageTitleShow currentPage="Login | " />

            <div className="container mx-auto py-12">
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
                            <h1 className="my-5 text-3xl font-bold font-mono">Login</h1>
                        </div>
                        <div className="p-6">
                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                                <div className=" space-y-1">
                                    <label className="block text-slate-700  font-medium">
                                        <span className="font-bold text-slate-500 tracking-wider">Email </span>
                                    </label>
                                    <input
                                        {...register("email", { required: true })}
                                        type="email"
                                        placeholder="Enter Your Email"
                                        className="bg-transparent input border border-sky-300 rounded-lg outline-sky-600 px-4 py-3 w-full placeholder:text-sm placeholder:tracking-wider text-sm"
                                    />
                                    {errors.email && (
                                        <span className="mt-1 text-red-500">
                                            Email field is required
                                        </span>
                                    )}
                                </div>
                                <div className="relative space-y-1">
                                    <label className="block text-slate-700 font-medium">
                                        <span className="font-bold text-slate-500 tracking-wider">Password</span>
                                    </label>
                                    <input
                                        {...register("password", { required: true })}
                                        type={passShow ? "text" : "password"}
                                        id="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
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
                                </div>
                                <div className="my-5 text-center">
                                    <button type="submit" className="relative inline-block h-14 w-40 overflow-hidden border-sky-500 px-5 py-2 
                                    text-sky-500 shadow-lg before:absolute before:inset-0 before:-z-10 before:block before:translate-x-[90%] 
                                    before:rounded-s-full before:bg-sky-600 before:duration-200 after:absolute after:inset-0 after:-z-10 after:block after:-translate-x-[90%] after:rounded-e-full 
                                    after:bg-sky-600 tracking-wider after:duration-500  hover:text-white before:hover:translate-x-0 after:hover:translate-x-0">Submit</button>
                                </div>
                            </form>
                            <div className="text-center my-5">
                                <div className="divider divide-red-50"></div>
                                <p className="text-center text-sm font-semibold">
                                    Not a tutor yet?
                                    <a className="text-base font-bold text-red-600 tracking-wider" href="/registrationview"> Register Here
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
