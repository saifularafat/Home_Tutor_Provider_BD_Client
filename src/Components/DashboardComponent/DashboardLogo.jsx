import { Link } from "react-router-dom";
import logo from './../../assets/leaf.jpg'

const DashboardLogo = ({ open, isAdmin }) => {
    return (
        <div className={`flex gap-x-4 items-center ${open ? 'mb-0' : 'md:mb-5 mb-0'}`}>
            <div className='text-center w-full'>
                <Link to="/">
                    <img src={logo} alt="" className={`${open ? 'w-12 h-12 mx-auto' : ' md:w-9 md:h-9 w-7 h-7  mx-auto'} cursor-pointer duration-500 bg-white rounded-xl`} />
                </Link>

                {
                    isAdmin ? '' :
                        <div className={`${!open && 'hidden'}`}>
                            <h2 className={`${!open && 'scale-0'} text-slate-800 text-xl md:py-2 font-medium origin-left duration-300`}>Home Tutor Provider<sup>BD</sup></h2>
                            <Link to="/"
                                className='text-xs text-white text-center py-[2px] px-2 hover:bg-green-600 hover:underline transition-all duration-300 bg-orange-500 rounded-full w-1/2 mx-auto '>
                                visit website
                            </Link>
                        </div>
                }
            </div>
        </div>
    );
};

export default DashboardLogo;