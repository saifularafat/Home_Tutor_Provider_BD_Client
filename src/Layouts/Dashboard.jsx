import { useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import {
    FaUser,
    FaCalendarAlt,
    FaChartBar,
    FaHome,
    FaCog,
    FaWallet,
    FaComment,
    FaMoon,
    FaSun
} from 'react-icons/fa'
import { BiBookAdd } from 'react-icons/bi'
import { AiFillNotification } from 'react-icons/ai'
import { RiLiveFill } from 'react-icons/ri'
import { FaClipboardQuestion } from 'react-icons/fa6'
import { MdHomeWork } from 'react-icons/md'
import { IconContext } from 'react-icons'
import logo from '../assets/leaf.jpg'
import arrow from '../assets/leaf.jpg'
// import { useContext } from 'react'
// import { AuthContext } from '../Provider/AuthProvider'
// import useAdmin from '../Hooks/useAdmin/useAdmin'
// import useInstructor from '../Hooks/useInstructor/useInstructor'
// import Swal from 'sweetalert2'

const Dashboard = () => {
    // const { user, logOut } = useContext(AuthContext)
    const [open, setOpen] = useState(true)

    // const [isAdmin, isAdminLoading] = useAdmin()
    // const [isTutor, isInstructorLoading] = useInstructor()

    // Dark mode implementation
    // const dark = localStorage.getItem('customDarkTheme')
    // console.log(dark)
    // const [isDarkMode, setIsDarkMode] = useState(dark == 'true' ? true : false)

    // useEffect(() => {
    //     if (isDarkMode == true) {
    //         localStorage.removeItem('customDarkTheme')
    //         localStorage.setItem('customDarkTheme', 'true')

    //         document.documentElement.removeAttribute('data-theme')
    //         document.documentElement.setAttribute('data-theme', 'customDarkTheme')
    //     }
    //     else {

    //         localStorage.removeItem('customDarkTheme')
    //         localStorage.setItem('customDarkTheme', 'false')

    //         document.documentElement.removeAttribute('data-theme')
    //         document.documentElement.setAttribute('data-theme', 'customLightTheme')
    //     }
    // }, [isDarkMode, dark])

    // const toggleDarkMode = () => {
    //     setIsDarkMode(!isDarkMode)
    // }
    // Dark mode end





    const user = false;
    const isAdmin = false;
    const isTutor = false;
    const isParent = false;

    const handleLogout = () => {
        logOut()
            .then(() => {
                Swal.fire({
                    icon: 'success',
                    title: 'Log Out Successful',
                    showConfirmButton: false,
                    timer: 1500
                })
            })
            .catch(error => console.log(error))
    }

    // Add an useEffect to detect screen width on component mount and resize
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setOpen(false)
            } else {
                setOpen(true)
            }
        }

        // Initial call
        handleResize()

        // Attach event listener for window resize
        window.addEventListener('resize', handleResize)

        // Cleanup
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

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
        Blog: FaComment,
        Notice: AiFillNotification,
        BookAdd: BiBookAdd
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
            path: '/dashboard/TutorHome',
            icon: iconMappings.RoleHome,
            role: 'isTutor',
            gap: true
        },
        {
            title: 'Apply Job',
            path: '/dashboard/applyJob',
            icon: iconMappings.Question,
            role: 'isTutor'
        },
        {
            title: 'Update Profile',
            path: '/dashboard/UpdateProfile',
            icon: iconMappings.Live,
            role: 'isTutor'
        },
        {
            title: 'Add Blog',
            path: '/dashboard/addBlog',
            icon: iconMappings.Blog,
            role: 'isTutor'
        },
        {
            title: 'Join Meeting',
            path: '/dashboard/addMeeting',
            icon: iconMappings.Blog,
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
            path: '/dashboard/ParentHome',
            icon: iconMappings.RoleHome,
            role: 'isParent',
            gap: true
        },
        {
            title: 'Job Request History',
            path: '/dashboard/jobRequestHistory',
            icon: iconMappings.Payment,
            role: 'isParent'
        },
        {
            title: 'Enrol Premium History',
            path: '/dashboard/paymentHistory',
            icon: iconMappings.Payment,
            role: 'isParent'
        },
        {
            title: 'Notice Board',
            path: '/dashboard/parentNoticeBoard',
            icon: iconMappings.Notice,
            role: 'isParent'
        },
        {
            title: 'Add Meeting',
            path: '/dashboard/addMeeting',
            icon: iconMappings.Live,
            role: 'isParent'
        },
        {
            title: 'Student Analytics',
            path: '/dashboard/studentAnalytics',
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

    const adminMenus = Menus.filter(menu => menu.role === 'admin')
    const instructorMenus = Menus.filter(menu => menu.role === 'isTutor')
    const userMenus = Menus.filter(menu => menu.role === 'isParent')
    const generalMenus = Menus.filter(menu => menu.role === 'general')

    return (
        <div className='flex '>
            {/* Dashboard Sidebar content */}
            <div
                className={` ${open ? 'w-56 p-4' : 'w-14 text-center '
                    }  
                    h-screen  fixed left-0 top-0 bottom-0 z-50 pt-8  duration-500 transition-all`}
            >
                {/* ${isDarkMode ? 'bg-slate-600' : 'bg-zinc-400'}  */}
                <img
                    src={arrow}
                    className={`absolute cursor-pointer -right-3 top-9 w-7  
			 border-2 rounded-full  ${!open && 'rotate-180'}`}
                    onClick={() => setOpen(!open)}
                />
                <div className='flex items-center gap-x-4 p-2'>
                    <img
                        src={logo}
                        className={`cursor-pointer w-full md:w-9/12 p-1 duration-500 ${open}`}
                    />
                </div>
                <ul
                    className={` ${open ? '' : ' flex flex-col items-center justify-center'
                        }`}
                >
                    {isAdmin
                        ? adminMenus.map((Menu, index) => (
                            <Link to={Menu.path} key={index} className={`flex rounded-md p-2 cursor-pointer hover: hover:bg-primary text-sm items-center gap-x-4 ${Menu.gap ? 'mt-9' : 'mt-2'
                                } ${index === 0 && ' hover:bg-primary'}`}>
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
                            </Link>
                        ))
                        : //  Instructor menus
                        isTutor
                            ? instructorMenus.map((Menu, index) => (
                                <Link to={Menu.path} key={index} className={`flex rounded-md p-2 cursor-pointer hover: hover:bg-primary text-sm items-center gap-x-4 ${Menu.gap ? 'mt-9' : 'mt-2'
                                    } ${index === 0 && ' hover:bg-primary'}`}>
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
                                </Link>
                            ))
                            : // User menus
                            userMenus.map((Menu, index) => (
                                <Link to={Menu.path} key={index} className={`flex rounded-md p-2 cursor-pointer hover: hover:bg-primary text-sm items-center gap-x-4 ${Menu.gap ? 'mt-9' : 'mt-2'
                                    } ${index === 0 && ' hover:bg-primary'}`}>
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
                                </Link>
                            ))}
                    {generalMenus.map((Menu, index) => (
                        <Link to={Menu.path} key={index} className={`flex rounded-md p-2 cursor-pointer hover: hover:bg-primary text-sm items-center gap-x-4 ${Menu.gap ? 'mt-9' : 'mt-2'
                            } ${index === 0 && ' hover:bg-primary'}`}>
                            <li

                                className='flex items-center gap-x-4'
                            >

                                <IconContext.Provider value={{ className: 'react-icon' }}>
                                    <Menu.icon />
                                </IconContext.Provider>
                                <span
                                    className={`${!open && 'hidden'} origin-left duration-200`}
                                >
                                    {Menu.title}
                                </span>
                            </li>
                        </Link>
                    ))}
                </ul>

                {/* User info */}
                <div className='absolute flex items-center space-x-4 mt-28 bottom-5 p-2'>
                    <div className='avatar w-10 h-10'>
                        <img
                            src={user?.photoURL}
                            alt=''
                            className='rounded-full '
                        />
                    </div>
                    <div className={`${!open && 'hidden'} flex items-center origin-left duration-200`}>
                        <div>
                            <h2 className='text-sm font-semibold'>{user?.displayName}</h2>

                            <span className='flex items-center space-x-1'>
                                <a
                                    onClick={handleLogout}
                                    rel='noopener noreferrer'
                                    href='#'
                                    className='text-xs hover:underline'
                                >
                                    Logout
                                </a>
                            </span>
                        </div>
                        <div>
                            <button
                                // onClick={toggleDarkMode} 
                                className='mx-3 text-lg'>
                                {/* {isDarkMode == true ? <FaSun className=''></FaSun> : <FaMoon></FaMoon>} */}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* Dashboard main content */}
            <div
                className={` ${open ? 'pl-60 pr-4' : 'pl-16 pr-2'
                    }  flex-1  overflow-y-auto  duration-500 transition-all h-[100vh]
                    ${isAdmin
                        ? ''
                        : isTutor
                            ? ''
                            : isParent
                                ? ''
                                : ''
                    }`}
            >
                <Outlet></Outlet>
            </div>
        </div>
    )
}

export default Dashboard
