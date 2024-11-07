import { AiOutlineCalendar, AiOutlineMail, AiOutlineSearch, AiOutlineStar } from "react-icons/ai";
import { BiLogIn, BiMessage, BiSun } from "react-icons/bi";
import { MdNotificationAdd } from "react-icons/md";
import { Link } from "react-router-dom";

const DashboardHeader = ({ open, setOpen }) => {
    return (
        <div className="md:py-4 md:px-5 bg-white text-black md:w-full w-auto flex items-center justify-between md:gap-5 shadow-xl rounded-md ">
            <div className="md:flex items-center gap-3 hidden">
                <Link to="#" className="flex">
                    <AiOutlineMail className="icon_style" /> <sup>(90)</sup>
                </Link>
                <Link to="#">
                    <BiMessage className="icon_style" />
                </Link>
                <Link to="#">
                    <AiOutlineCalendar className="icon_style" />
                </Link>
                <Link to="#">
                    <AiOutlineStar className="icon_style" />
                </Link>
            </div>
            <div className="flex items-center justify-between md:w-auto w-full md:gap-4 gap-2 md:p-0 p-2">
                <div className="flex items-center gap-2">
                    <span className="flag-icon flag-icon-bd text-xl"></span>
                    <span className="hidden md:block text-lg font-medium hover:text-transparent bg-clip-text bg-gradient-to-r from-[#006a4e] to-[#f42a41] duration-300 transition-all">Bangladesh</span>
                    <span className="block md:hidden text-base font-medium hover:text-transparent bg-clip-text bg-gradient-to-r from-[#006a4e] to-[#f42a41] duration-300 transition-all">BD</span>
                    <button
                        // onClick={toggleIsDarkAndSunMode} 
                        className="md:pr-0 pr-1 md:hidden block">
                        {/* {
                                isDarkMode == true ? 
                                <BiSun className="icon_style" /> 
                                : 
                                <FaMoon className="icon_style" />
                                } */}
                        <BiSun className="icon_style" />
                    </button>
                </div>
                <div className="flex items-center justify-between md:gap-8 gap-1">
                    <div className="flex items-center md:gap-4 gap-2 ">
                        <AiOutlineSearch className="icon_right_style md:block hidden" />
                        <BiLogIn className="icon_right_style  md:block hidden" />
                        <MdNotificationAdd className="icon_right_style  md:block hidden" />
                        <button
                            // onClick={toggleIsDarkAndSunMode} 
                            className="md:pr-0 pr-1 md:block hidden">
                            {/* {
                                isDarkMode == true ? 
                                <BiSun className="icon_style" /> 
                                : 
                                <FaMoon className="icon_style" />
                                } */}
                            <BiSun className="icon_style" />
                        </button>
                    </div>
                    {/* user avatar and info */}
                    <div className="flex items-end md:mx-5">
                        <div className="text-end leading-none">
                            <h3 className="text-sm md:font-semibold font-medium leading-none md:text-xl">Sen Watson</h3>
                            <p className="lowercase md:text-sm text-xs">Admin</p>
                        </div>
                        <div className="avatar md:ml-3 ml-1">
                            <div className="md:w-12 w-9 rounded-full">
                                <img src="https://i.ibb.co/TKMk2pK/coach2.jpg" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardHeader;