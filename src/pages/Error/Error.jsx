import Lottie from "lottie-react";
import errorLottie from "./../../assets/Animation/error.json"
import "./../../Share/Footer/footer.css"
import { Link } from "react-router-dom";
const Error = () => {
return (
    <div className="footerBg h-screen">
        <div className="w-5/12 mx-auto">
            <Lottie
                animationData={errorLottie}
                loop={true} className="" />
        </div>
        <div className="text-center">
            <Link to="/" className=" bg-orange-500 py-2 px-5 rounded-lg text-lg font-medium text-white  hover:bg-orange-600 transition-all duration-200">Go Home</Link>
        </div>
    </div>
);
};

export default Error;