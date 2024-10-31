import { Link } from "react-router-dom";
import logo from "./../../assets/Home_Tutor_Provider_BD.jpg"
import PageTitleShow from "../../Components/PageTitleShow/PageTitleShow";
const Logo = () => {
    return (
        <Link to='/'>
            <PageTitleShow currentPage="Home" />
            <img
                className='w-[350px] '
                src={logo}
                alt=''
            />
        </Link>
    );
};

export default Logo;