import { Link } from "react-router-dom";
import logo from "./../../assets/HTP1.png"
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