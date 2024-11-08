import { FaUserEdit } from "react-icons/fa";
import { Link } from "react-router-dom";

const DBButton = ({ link, title, buttonBG, hoverBG}) => {
    return (
        <div className="flex items-center justify-center">
            <Link to={link} className={`${buttonBG} ${hoverBG} transition duration-200 flex items-center gap-2  text-2xl capitalize font-medium text-white px-6 py-5 tracking-wide rounded-xl`}>
                <FaUserEdit className="text-4xl" /> {title}
            </Link>
        </div>
    );
};

export default DBButton;