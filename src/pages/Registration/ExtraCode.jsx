
// comment image and nid cart
{/* coaching Ted License file */ }
<div className="md:1/3 w-full ">
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
        {errors.coachingTedLicense && (
            <span className="mt-1 text-red-500">
                Coaching Ted License is required
            </span>
        )}
        {imageError && (
            <p className="text-red-500 text-sm">{imageError}</p>
        )}
    </div>
</div> 


{/* parent NID Image file */ }
 <div className="md:col-span-2 col-span-1">
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
        {errors.parentNIDCart && (
            <span className="mt-1 text-red-500">
                NID Cart is required
            </span>
        )}
        {imageError && (
            <p className="text-red-500 text-sm">{imageError}</p>
        )}
    </div>
</div> 


{/* tutor Student ID Image file */ }
<div className="md:col-span-2 col-span-1">
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
        {errors.tutorIDCart && (
            <span className="mt-1 text-red-500">
                ID Cart is required
            </span>
        )}
        {imageError && (
            <p className="text-red-500 text-sm">{imageError}</p>
        )}
    </div>
</div> 


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
            // On successful login, the server will set the cookies (accessToken and refreshToken)
            Swal.fire({
                position: "top-center",
                icon: "success",
                title: response.data.message,
                showConfirmButton: false,
                timer: 1500,
            });

            // You can redirect the user to another page (e.g., dashboard)
            // Example: window.location.href = "/dashboard"; 
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
