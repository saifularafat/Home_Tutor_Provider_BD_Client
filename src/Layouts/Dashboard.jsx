import { useState } from 'react';
import { FaCalendarAlt, FaChartBar, FaChevronRight, FaCog, FaComment, FaHome, FaUser, FaWallet } from 'react-icons/fa';
import DashboardHeader from '../Share/DashboardHeader/DashboardHeader';
import logo from './../assets/leaf.jpg'
import { MdAssignmentAdd, MdHomeWork } from 'react-icons/md';
import { FaClipboardQuestion, FaUserPen, FaUsersViewfinder } from 'react-icons/fa6';
import { RiLiveFill } from 'react-icons/ri';
import { AiFillNotification } from 'react-icons/ai';
import { BiBookAdd } from 'react-icons/bi';
import { IconContext } from 'react-icons';
import { Link, NavLink, Outlet } from 'react-router-dom';
import DashboardFooter from '../Share/DashboardFooter/DashboardFooter';
import { IoBagAdd } from 'react-icons/io5';

const Dashboard = () => {
    const [open, setOpen] = useState(true);



    // user identity
    const isAdmin = false;
    const isTutor = false;
    const isParent = true;

    const iconMappings = {
        RoleHome: MdHomeWork,
        Users: FaUser,
        Schedule: FaCalendarAlt,
        Question: FaClipboardQuestion,
        Analytics: FaChartBar,
        Home: FaHome,
        Setting: FaCog,
        Payment: FaWallet,
        Live: RiLiveFill,
        Blog: MdAssignmentAdd,
        Notice: AiFillNotification,
        BookAdd: BiBookAdd,
        AddJob: IoBagAdd,
        Profile: FaUserPen,
        Meeting: FaUsersViewfinder,
    }

    const Menus = [
        {
            title: 'Admin Home',
            path: '/dashboard/adminHome',
            icon: iconMappings.RoleHome,
            role: 'admin',
            gap: true
        },
        {
            title: 'Users',
            path: '/dashboard/manageUsers',
            icon: iconMappings.Users,
            role: 'admin'
        },
        {
            title: 'All Payments',
            path: '/dashboard/allPayments',
            icon: iconMappings.Payment,
            role: 'admin'
        },
        {
            title: 'All Request Job',
            path: '/dashboard/allRequestJob',
            icon: iconMappings.Payment,
            role: 'admin'
        },
        {
            title: 'All Tutor Request',
            path: '/dashboard/allTutorRequest',
            icon: iconMappings.Payment,
            role: 'admin'
        },
        {
            title: 'Create Notice',
            path: '/dashboard/createNotice',
            icon: iconMappings.Notice,
            role: 'admin'
        },
        {
            title: 'All Job Tuition',
            path: '/dashboard/allJobTuition',
            icon: iconMappings.BookAdd,
            role: 'admin'
        },
        {
            title: 'All Tutor',
            path: '/dashboard/allTutor',
            icon: iconMappings.BookAdd,
            role: 'admin'
        },
        {
            title: 'Post Download Zone',
            path: '/dashboard/postDownloadZone',
            icon: iconMappings.BookAdd,
            role: 'admin'
        },
        {
            title: 'All Download Zone',
            path: '/dashboard/allDownloadZone',
            icon: iconMappings.BookAdd,
            role: 'admin'
        },
        {
            title: 'inbox',
            path: '/dashboard/adminInbox',
            icon: iconMappings.BookAdd,
            role: 'admin'
        },
        {
            title: 'Add Terms And Condition',
            path: '/dashboard/addTermsAndCondition',
            icon: iconMappings.BookAdd,
            role: 'admin'
        },
        {
            title: 'All Terms And Condition',
            path: '/dashboard/allTermsAndCondition',
            icon: iconMappings.BookAdd,
            role: 'admin'
        },
        // Admin router END

        // Tutor router END
        {
            title: 'Tutor Home ',
            path: '/dashboard/tutor-home',
            icon: iconMappings.RoleHome,
            role: 'isTutor',
            gap: true
        },
        {
            title: 'Apply Job',
            path: '/dashboard/apply-jobs',
            icon: iconMappings.AddJob,
            role: 'isTutor'
        },
        {
            title: 'Profile',
            path: '/dashboard/profile',
            icon: iconMappings.Profile,
            role: 'isTutor'
        },
        {
            title: 'Add Blog',
            // path: '/dashboard/addBlog',
            path: "",
            icon: iconMappings.Blog,
            role: 'isTutor'
        },
        {
            title: 'Join Meeting',
            // path: '/dashboard/addMeeting',
            path: "",
            icon: iconMappings.Meeting,
            role: 'isTutor'
        },
        {
            title: 'Notice Board',
            path: '/dashboard/noticeBoard',
            icon: iconMappings.Notice,
            role: 'isTutor'
        },
        // tutor router END
        // parent router START
        {
            title: 'Parent Home',
            path: '/dashboard/parent-home',
            icon: iconMappings.RoleHome,
            role: 'isParent',
            gap: true
        },
        {
            title: 'Job Request History',
            path: '/dashboard/job-request-history',
            icon: iconMappings.Payment,
            role: 'isParent'
        },
        {
            title: 'Enrol Premium History',
            path: '/dashboard/payment-history',
            icon: iconMappings.Payment,
            role: 'isParent'
        },
        {
            title: 'Profile',
            path: "/dashboard/profile",
            icon: iconMappings.Profile,
            role: 'isParent'
        },
        {
            title: 'Notice Board',
            path: '/dashboard/parent-notice-board',
            icon: iconMappings.Notice,
            role: 'isParent'
        },
        {
            title: 'Add Meeting',
            path: '/dashboard/add-meeting',
            icon: iconMappings.Live,
            role: 'isParent'
        },
        {
            title: 'Student Analytics',
            path: '/dashboard/student-analytics',
            icon: iconMappings.Analytics,
            role: 'isParent'
        },

        {
            title: 'Home ',
            path: '/',
            icon: iconMappings.Home,
            role: 'general',
            gap: true
        }
    ]

    const isAdminMenus = Menus.filter(menu => menu.role === 'admin')
    const isTutorMenus = Menus.filter(menu => menu.role === 'isTutor')
    const isParentMenus = Menus.filter(menu => menu.role === 'isParent')
    const generalMenus = Menus.filter(menu => menu.role === 'general')

    return (
        <div className="flex overflow-x-hidden overflow-y-auto bg-slate-200">
            {/* dashboard side Ber */}
            <div className={`${open ? 'md:w-64 p-3' : 'w-16 p-1 text-center'} shadow-2xl duration-200 fixed transition-all bg-white relative`}>
                <FaChevronRight
                    onClick={() => setOpen(!open)}
                    className={`${open && 'rotate-180 transition-all duration-500'} absolute top-9 md:-right-3 -right-[5px] md:w-8 md:h-8 w-5 h-5 bg-slate-800 text-white cursor-pointer rounded-full border-2 border-blue-200 p-1`}
                />

                <div className={`flex gap-x-4 items-center`}>
                    <div className='text-center w-full'>
                        <Link to="/">
                            <img src={logo} alt="" className={`${open ? 'w-16 h-16 mx-auto' : ' w-9 h-9 mx-auto'} cursor-pointer duration-500 bg-white rounded-xl`} />
                        </Link>
                        {
                            open ? <>
                                <h2 className={`${!open && 'scale-0'} text-slate-800 text-xl md:py-2 font-medium origin-left duration-300`}>Home Tutor Provider<sup>BD</sup></h2>
                                <Link to="/"
                                    className='text-xs text-white text-center py-[2px] px-2 hover:bg-orange-700 hover:underline transition-all duration-300 bg-orange-500 rounded-full w-1/2 mx-auto '>
                                    visit website
                                </Link>
                            </>
                                :
                                ''
                        }
                    </div>
                </div>

                {/* dashboard Nav Ber */}
                <ul
                    className={`${open ? '' : ''}  flex flex-col text-center`}>
                    {isAdmin
                        ? isAdminMenus.map((Menu, index) => (
                            <NavLink to={Menu.path} key={index}
                                className={({ isActive }) => (isActive ?
                                    `flex rounded-md p-2 cursor-pointer text-white bg-slate-800 text-sm items-center gap-x-4 ${Menu.gap ? 'mt-6' : 'mt-2'
                                    } ${index === 0 && ' hover:bg-slate-700'}` :
                                    `flex rounded-md p-2 cursor-pointer hover:text-white hover:bg-slate-800 text-sm items-center gap-x-4 ${Menu.gap ? 'mt-6' : 'mt-2'
                                    } ${index === 0 && ' hover:bg-primary'}`
                                )}>
                                <li

                                    className='flex items-center gap-x-4'
                                >

                                    <IconContext.Provider value={{ className: 'react-icon' }}>
                                        <Menu.icon />
                                    </IconContext.Provider>
                                    <span
                                        className={`${!open && 'hidden'
                                            } origin-left duration-200`}
                                    >
                                        {Menu.title}
                                    </span>

                                </li>
                            </NavLink>
                        ))
                        : //  Instructor menus
                        isTutor
                            ? isTutorMenus.map((Menu, index) => (
                                <NavLink
                                    to={Menu.path}
                                    key={index}
                                    title={Menu.title}
                                    className={({ isActive }) => (isActive ?
                                        `flex rounded-md p-2 cursor-pointer text-white bg-slate-800 text-sm items-center gap-x-4 ${Menu.gap ? 'mt-6' : 'mt-2'
                                        } ${index === 0 && ' hover:bg-slate-700'}` :
                                        `flex rounded-md p-2 cursor-pointer hover:text-white hover:bg-slate-800 text-sm items-center gap-x-4 ${Menu.gap ? 'mt-6' : 'mt-2'
                                        } ${index === 0 && ' hover:bg-primary'}`
                                    )}>
                                    <li

                                        className='flex items-center gap-x-4'
                                    >

                                        <IconContext.Provider value={{ className: 'react-icon text-lg' }}>
                                            <Menu.icon />
                                        </IconContext.Provider>
                                        <span
                                            className={`${!open && 'hidden'
                                                } origin-left duration-200`}
                                        >
                                            {Menu.title}
                                        </span>

                                    </li>
                                </NavLink>
                            ))
                            : // User menus
                            isParentMenus.map((Menu, index) => (
                                <NavLink
                                    to={Menu.path}
                                    key={index}
                                    title={Menu.title}
                                    className={({ isActive }) => (isActive ?
                                        `flex rounded-md p-2 cursor-pointer text-white bg-slate-800 text-sm items-center gap-x-4 ${Menu.gap ? 'mt-6' : 'mt-2'
                                        } ${index === 0 && ' hover:bg-slate-700'}` :
                                        `flex rounded-md p-2 cursor-pointer hover:text-white hover:bg-slate-800 text-sm items-center gap-x-4 ${Menu.gap ? 'mt-6' : 'mt-2'
                                        } ${index === 0 && ' hover:bg-primary'}`
                                    )}>
                                    <li

                                        className='flex items-center gap-x-3'
                                    >

                                        <IconContext.Provider value={{ className: 'react-icon text-lg' }}>
                                            <Menu.icon />
                                        </IconContext.Provider>
                                        <span
                                            className={`${!open && 'hidden'
                                                } origin-left duration-200`}
                                        >
                                            {Menu.title}
                                        </span>

                                    </li>
                                </NavLink>
                            ))}
                    {generalMenus.map((Menu, index) => (
                        <Link to={Menu.path} key={index} className={`flex rounded-md p-2 cursor-pointer hover: hover:bg-primary text-sm items-center gap-x-4 ${Menu.gap ? 'mt-9' : 'mt-2'
                            } ${index === 0 && ' hover:bg-blue-500'}`}>
                            <li

                                className='flex items-center gap-x-4'
                            >

                                <IconContext.Provider value={{ className: 'react-icon text-lg' }}>
                                    <Menu.icon />
                                </IconContext.Provider>
                                <span
                                    className={`${!open && 'hidden'} origin-left duration-200 text-base`}
                                >
                                    {Menu.title}
                                </span>
                            </li>
                        </Link>
                    ))}
                </ul>
            </div>


            {/* Dashboard main content */}
            <div className={` ${open ? 'md:pl-10 pl-2 md:pr-5 pr-2' : 'md:pl-16 pl-2 md:pr-8 pr-2'
                }  flex-1  overflow-y-auto duration-500 transition-all h-[100vh] scroll-smooth relative ${isAdmin
                    ? ''
                    : isTutor
                        ? ''
                        : ''
                }`}
            >
                <div className='w-full sticky top-0 z-50 overflow-x-hidden'>
                    <DashboardHeader open={open} setOpen={setOpen} />
                </div>
                <div className="min-h-[calc(100vh-136px)]">
                    <Outlet />
                </div>

                <DashboardFooter />
            </div>
        </div >
    );
};

export default Dashboard;