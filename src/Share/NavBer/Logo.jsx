import { Link } from "react-router-dom";
import logo from "./../../assets/Home_Tutor_Provider_BD.jpg"
import { Helmet } from "react-helmet-async";
const Logo = () => {
    return (
        <Link to="/" className="">
            <Helmet>
                <title>Home Tutor Provider BD</title>
            </Helmet>
            <img src={logo} alt="" className="md:w-full w-1/2 mx-auto object-cover" />
        </Link>
    );
};

export default Logo;