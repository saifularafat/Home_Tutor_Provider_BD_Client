import { useState } from 'react';
import { FaBlog, FaCalendarAlt, FaCartArrowDown, FaChartBar, FaChevronRight, FaCog, FaComment, FaHome, FaUser, FaWallet } from 'react-icons/fa';
import DashboardHeader from '../Share/DashboardHeader/DashboardHeader';
import logo from './../assets/leaf.jpg'
import { MdCastForEducation, MdHomeWork, MdWorkHistory } from 'react-icons/md';
import { FaClipboardQuestion, FaMessage, FaPersonCircleQuestion, FaSchoolCircleCheck, FaTemperatureQuarter, FaUserPen, FaUsersRays, FaUsersViewfinder } from 'react-icons/fa6';
import { RiLiveFill } from 'react-icons/ri';
import { AiFillNotification } from 'react-icons/ai';
import { BiBookAdd } from 'react-icons/bi';
import { IconContext } from 'react-icons';
import { Link, NavLink, Outlet } from 'react-router-dom';
import DashboardFooter from '../Share/DashboardFooter/DashboardFooter';
import { IoBagAdd } from 'react-icons/io5';
import { SiFampay } from 'react-icons/si';
import { CiSquareQuestion } from 'react-icons/ci';
import { PiHandshakeFill } from 'react-icons/pi';
import { TbMessage2Question } from 'react-icons/tb';

const Dashboard = () => {
    const [open, setOpen] = useState(true);



    // user identity
    const isAdmin = true;
    const isTutor = false;
    const isParent = false;

    const iconMappings = {
        RoleHome: MdHomeWork,
        Users: FaUser,
        Schedule: FaCalendarAlt,
        Question: FaClipboardQuestion,
        Analytics: FaChartBar,
        Home: FaHome,
        Setting: FaCog,
        Payment: SiFampay,
        Live: RiLiveFill,
        Blog: FaBlog,
        Notice: AiFillNotification,
        BookAdd: BiBookAdd,
        AddJob: IoBagAdd,
        Profile: FaUserPen,
        Meeting: FaUsersViewfinder,
        ReqJob: MdWorkHistory,
        TutorReq: PiHandshakeFill,
        JobTutor: MdHomeWork,
        SubDownZone: FaCartArrowDown,
        InboxMessage: FaMessage,
        TermsMessage: TbMessage2Question,
        AllTutor: MdCastForEducation,
        CoachingCenter: FaSchoolCircleCheck,
    }

    const Menus = [
        {
            title: 'Admin Home',
            path: '/dashboard/admin-home',
            icon: iconMappings.RoleHome,
            role: 'admin',
            gap: true
        },
        {
            title: 'Users',
            path: '/dashboard/manage-all-users',
            icon: iconMappings.Users,
            role: 'admin'
        },
        {
            title: 'All Payments',
            path: '/dashboard/all-payments',
            icon: iconMappings.Payment,
            role: 'admin'
        },
        {
            title: 'All Request&Approve',
            path: '/dashboard/all-request-approve-jobs',
            icon: iconMappings.ReqJob,
            role: 'admin'
        },
        {
            title: 'Tutor Jobs Request',
            path: '/dashboard/tutor-jobs-request',
            icon: iconMappings.TutorReq,
            role: 'admin'
        },
        {
            title: 'Create Notice',
            path: '/dashboard/create-notice',
            icon: iconMappings.Notice,
            role: 'admin'
        },
        {
            title: 'All Job Tuition',
            path: '/dashboard/all-job-tuition',
            icon: iconMappings.JobTutor,
            role: 'admin'
        },
        {
            title: 'All Tutor',
            path: '/dashboard/all-tutor',
            icon: iconMappings.AllTutor,
            role: 'admin'
        },
        {
            title: 'Coaching Center',
            path: '/dashboard/coaching-center',
            icon: iconMappings.CoachingCenter,
            role: 'admin'
        },
        {
            title: 'All Blog',
            path: '/dashboard/all-blog',
            icon: iconMappings.Blog,
            role: 'admin'
        },
        {
            title: 'Download & PDF Zone',
            path: '/dashboard/download-and-pdf-zone',
            icon: iconMappings.SubDownZone,
            role: 'admin'
        },
        {
            title: 'Inbox',
            path: '/dashboard/admin-inbox-message',
            icon: iconMappings.InboxMessage,
            role: 'admin'
        },
        {
            title: 'Terms And Condition',
            path: '/dashboard/terms-and-condition',
            icon: iconMappings.TermsMessage,
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
            path: '/dashboard/add-blog',
            icon: iconMappings.Blog,
            role: 'isTutor'
        },
        {
            title: 'Join Meeting',
            path: '/dashboard/join-meeting',
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
            path: '/dashboard/join-meeting',
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
            <div className={`${open ? 'md:w-64 p-3' : 'md:w-16 p-1 text-center'} shadow-2xl duration-200 fixed transition-all bg-white relative`}>
                <FaChevronRight
                    onClick={() => setOpen(!open)}
                    className={`${open && 'rotate-180 transition-all duration-500'} absolute top-9 md:-right-3 -right-[5px] md:w-8 md:h-8 w-5 h-5 bg-slate-800 text-white cursor-pointer rounded-full border-2 border-blue-200 p-1`}
                />

                {
                    isTutor && isParent &&
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
                }
                {isAdmin &&
                    <div className={`flex gap-x-4 items-center ${open ? 'mb-0' : 'md:mb-5 mb-0'}`}>
                        <div className='text-center w-full'>
                            <Link to="/">
                                <img src={logo} alt="" className={`${open ? 'w-12 h-12 mx-auto' : ' md:w-9 md:h-9 w-7 h-7  mx-auto'} cursor-pointer duration-500 bg-white rounded-xl`} />
                            </Link>
                        </div>
                    </div>
                }

                {/* dashboard Nav Ber */}
                <ul
                    className={`${open ? '' : ''}  flex flex-col text-center`}>
                    {isAdmin
                        ? isAdminMenus.map((Menu, index) => (
                            <NavLink
                                to={Menu.path}
                                key={index}
                                title={Menu.title}
                                className={({ isActive }) => (isActive ?
                                    `flex rounded-md md:px-2 px-1 md:py-[6px] py-1 ${open ? '' : 'mx-auto'} cursor-pointer text-white bg-slate-800 text-sm items-center md:gap-x-4 ${Menu.gap ? 'md:mt-3' : 'md:mt-1'
                                    } ${index === 0 && ' hover:bg-slate-700'}` :
                                    `flex rounded-md md:px-2 px-1 md:py-[6px] py-1 ${open ? '' : 'mx-auto'} cursor-pointer hover:text-white hover:bg-slate-800 text-sm items-center md:gap-x-4 ${Menu.gap ? 'md:mt-3' : 'md:mt-1'
                                    } ${index === 0 && ' hover:bg-primary'}`
                                )}>
                                <li

                                    className='flex items-center md:gap-x-4 gap-1'
                                >

                                    <IconContext.Provider value={{ className: 'react-icon md:text-lg text-sm' }}>
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
                                        `flex rounded-md md:px-2 px-1 md:py-[6px] py-1 ${open ? '' : 'mx-auto'} cursor-pointer text-white bg-slate-800 text-sm items-center md:gap-x-4 ${Menu.gap ? 'md:mt-3' : 'md:mt-1'
                                        } ${index === 0 && ' hover:bg-slate-700'}` :
                                        `flex rounded-md md:px-2 px-1 md:py-[6px] py-1 ${open ? '' : 'mx-auto'} cursor-pointer hover:text-white hover:bg-slate-800 text-sm items-center md:gap-x-4 ${Menu.gap ? 'md:mt-3' : 'md:mt-1'
                                        } ${index === 0 && ' hover:bg-primary'}`
                                    )}>
                                    <li

                                        className='flex items-center md:gap-x-4 gap-1'
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
                                        `flex rounded-md md:px-2 px-1 md:py-[6px] py-1 ${open ? '' : 'mx-auto'} cursor-pointer text-white bg-slate-800 text-sm items-center md:gap-x-4 ${Menu.gap ? 'md:mt-3' : 'md:mt-1'
                                        } ${index === 0 && ' hover:bg-slate-700'}` :
                                        `flex rounded-md md:px-2 px-1 md:py-[6px] py-1 ${open ? '' : 'mx-auto'} cursor-pointer hover:text-white hover:bg-slate-800 text-sm items-center md:gap-x-4 ${Menu.gap ? 'md:mt-3' : 'md:mt-1'
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
                        <Link
                            to={Menu.path}
                            key={index}
                            title={Menu.title}
                            className={`flex rounded-md ${isAdmin ? 'py-[2px] px-2' : 'p-2'} ${open ? '' : 'mx-auto mt-16'} cursor-pointer hover: hover:bg-primary text-sm items-center gap-x-4 ${Menu.gap ? `${isAdmin ? 'mt-4' : 'mt-5'}` : 'mt-2'
                                } ${index === 0 && ' hover:bg-blue-500 hover:text-white'}`}>
                            <li

                                className='flex items-center md:gap-x-4 gap-1'
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
            <div className={` ${open ? 'md:pl-10 pl-2 md:pr-5 pr-2' : `md:pl-16 pl-2 md:pr-8 pr-2`
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