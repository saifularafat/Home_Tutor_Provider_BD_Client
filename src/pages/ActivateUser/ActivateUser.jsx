import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import axios from "axios";
import { serverApiUrl } from "../../../ApiSecret";
import { useNavigate } from "react-router-dom";

const ActivateUser = () => {
    const { register, reset, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        try {
            const userActiveData = { token: data.token };

            const response = await axios.post(`${serverApiUrl}/api/users/activate`, userActiveData);
            console.log(response);
            if (response.status === 201) {
                reset();
                Swal.fire({
                    position: "top-center",
                    icon: "success",
                    title: response.data.message,
                    showConfirmButton: false,
                    timer: 1500,
                });
                navigate('/login')
            }
        } catch (error) {
            if (error.response?.data?.message) {
                Swal.fire({
                    title: "Error",
                    text: error.response.data.message,
                    icon: "error",
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
        <div
            className="hero min-h-screen"
            style={{
                backgroundImage: "url(https://i.ibb.co.com/F4DSWMH0/welcome-photo.webp)",
            }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="max-w-6xl mx-auto text-neutral-content text-center">
                <h3 className="md:text-3xl text-2xl font-bold text-center text-slate-100 md:pb-4 pb-2">Activate User</h3>
                <div className="max-w-5xl">
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 w-full">
                        <div className="space-y-2">
                            <label className="block font-medium text-slate-100">Enter Token*</label>
                            <input
                                {...register("token", { required: "Token is required" })}
                                type="text"
                                placeholder="Enter the token sent to your email"
                                className="input border border-sky-300 rounded-lg px-4 py-3 md:w-[500px] w-full"
                            />
                            {errors.token && (
                                <p className="text-red-300">{errors.token.message}</p>
                            )}
                        </div>
                        <div className="text-center">
                            <button type="submit" className="btn btn-primary">Activate</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ActivateUser;
