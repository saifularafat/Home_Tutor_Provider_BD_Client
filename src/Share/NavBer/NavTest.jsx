import './Navbar.css'
import { AiFillBell } from 'react-icons/ai'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import Headroom from 'react-headroom'
import { FaMoon, FaSun } from 'react-icons/fa'
import { useEffect, useState } from 'react'
import Logo from './Logo'
import axios from 'axios'
import { serverApiUrl } from '../../../ApiSecret'
import Swal from 'sweetalert2'
import { useAllUsers } from '../../api/useAllUsers'

const NavTest = () => {
    const dark = localStorage.getItem('customDarkTheme')

    const navigate = useNavigate();
    const [isDarkMode, setIsDarkMode] = useState(dark == 'true' ? true : false)

    useEffect(() => {
        if (isDarkMode == true) {
            localStorage.removeItem('customDarkTheme')
            localStorage.setItem('customDarkTheme', 'true')

            document.documentElement.removeAttribute('data-theme')
            document.documentElement.setAttribute('data-theme', 'customDarkTheme')
        } else {
            localStorage.removeItem('customDarkTheme')
            localStorage.setItem('customDarkTheme', 'false')

            document.documentElement.removeAttribute('data-theme')
            document.documentElement.setAttribute('data-theme', 'customLightTheme')
        }
    }, [isDarkMode, dark])
    // const { user, logOut } = useContext(AuthContext)
    // const [isAdmin] = useAdmin()
    // const [isTutor] = useInstructor()
    // const [info] = useUser()



    // Temporary variables for testing
    // const user = { displayName: "Test User" };
    //user minings Coaching

    const {} = useAllUsers();
    const isAdmin = true;
    const isTutor = false;
    const isParent = false
    const user = false;

    const notices = [1, 2, 3, 4,];

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode)
    }

    // TODO LOGOUT HANDLE Error
    const handleLogout = async () => {
        try {
            const response = await axios.post(`${serverApiUrl}/api/auth/logout`, {}, { withCredentials: true });
            if (response.status === 200) {
                localStorage.removeItem('accessToken');
                sessionStorage.removeItem('accessToken');
                Swal.fire({
                    position: "top-center",
                    icon: "success",
                    title: response.data.message,
                    showConfirmButton: false,
                    timer: 1500,
                });
                navigate('/');
            }
        } catch (error) {
            Swal.fire({
                title: "Error",
                text: error.message || "Something went wrong. Please try again.",
                icon: "error",
            });
        }
    };

    //   const [notices] = useLiveExam()

    return (
        <Headroom
            style={{
                zIndex: '100',
                WebkitTransition: 'all .5s ease-in-out',
                MozTransition: 'all .5s ease-in-out',
                OTransition: 'all .5s ease-in-out',
                transition: 'all .5s ease-in-out'
            }}
        >
            <nav className='z-50 text-white backdrop-blur-lg bg-black/50'>
                <div className='navbar z-[40] container mx-auto sticky top-0'>
                    <div className='navbar-start'>
                        {/* mobile nav Ber section*/}
                        <div className='dropdown'>
                            <label tabIndex={0} className='btn btn-ghost lg:hidden'>
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    className='w-5 h-5'
                                    fill='none'
                                    viewBox='0 0 24 24'
                                    stroke='currentColor'
                                >
                                    <path
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        strokeWidth='2'
                                        d='M4 6h16M4 12h8m-8 6h16'
                                    />
                                </svg>
                            </label>
                            <ul
                                tabIndex={0}
                                className='z-50 h-screen w-40 space-y-3 dropdown-content -left-2 p-4 top-14 bg-black/90 md:bg-black/40 backdrop-blur'
                            >
                                <li>
                                    <NavLink to='/'
                                        className={({ isActive }) => (isActive ? "mobileActiveNav" : "mobileDefaultNav")}>
                                        Home
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="tuition-jobs"
                                        className={({ isActive }) => (isActive ? "mobileActiveNav" : "mobileDefaultNav")}>
                                        Tuition Jobs
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/tutor-profile'
                                        className={({ isActive }) => (isActive ? "mobileActiveNav" : "mobileDefaultNav")}>
                                        Tutor Profile
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/contact-us'
                                        className={({ isActive }) => (isActive ? "mobileActiveNav" : "mobileDefaultNav")}>
                                        Contact Us
                                    </NavLink>
                                </li>
                                {isAdmin && (
                                    <li>
                                        {isAdmin ? (
                                            ''
                                        ) : isTutor ? (
                                            <NavLink to='/createParentMeeting'
                                                className={({ isActive }) => (isActive ? "mobileActiveNav" : "mobileDefaultNav")}>
                                                Create Parent Meet
                                            </NavLink>
                                        ) : (
                                            <NavLink to='/joinTutorMeeting'
                                                className={({ isActive }) => (isActive ? "mobileActiveNav" : "mobileDefaultNav")}>
                                                Join Meeting
                                            </NavLink>
                                        )}
                                    </li>
                                )}
                            </ul>
                        </div>


                        {/* Logo Component */}
                        <Logo />
                    </div>
                    {/* Desktop middle nav Ber*/}
                    <div className='hidden navbar-center lg:flex'>
                        <ul className=' flex items-center gap-x-1 tracking-wide'>
                            <li>
                                <NavLink to='/'
                                    className={({ isActive }) => (isActive ? "activeNav" : "defaultNav")}>
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="tuition-jobs"
                                    className={({ isActive }) => (isActive ? "activeNav" : "defaultNav")}>
                                    Tuition Jobs
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/tutor-profile'
                                    className={({ isActive }) => (isActive ? "activeNav" : "defaultNav")}>
                                    Tutor Profile
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/contact-us'
                                    className={({ isActive }) => (isActive ? "activeNav" : "defaultNav")}>
                                    Contact Us
                                </NavLink>
                            </li>
                            {isAdmin && (
                                <li>
                                    {isAdmin ? (
                                        ''
                                    ) : isTutor ? (
                                        <Link to='/createLiveExam'>Create Live Meeting</Link>
                                    ) : isParent ? (
                                        <Link to='/joinLiveExam'>Join Live Meeting</Link>
                                    ) : (
                                        <Link to='/'>leader Board</Link>
                                    )
                                    }
                                </li>
                            )}
                        </ul>
                    </div>

                    {/* mobile right section navBer*/}
                    <div className='navbar-end '>
                        <div className='indicator me-5'>
                            <span
                                className={`${notices?.length > 0 && 'absolute -right-1 -top-3 flex size-5 items-center justify-center rounded-full bg-red-500 text-center text-[13px] text-white'
                                    } `}
                            >
                                {notices ? notices?.length : ''}
                            </span>
                            <button>
                                <Link to='notice' className='text-2xl'>
                                    {' '}
                                    <AiFillBell></AiFillBell>
                                </Link>
                            </button>
                        </div>
                        {
                            // user
                            // isTutor
                            isAdmin
                                // isParent
                                ? (
                                    <div className='ml-5 dropdown dropdown-end'>
                                        <div
                                            className='list-none tooltip tooltip-bottom'
                                            // data-tip={info?.displayName}
                                            data-tip={'DisplayName'}
                                        >
                                            <label
                                                tabIndex={0}
                                                className='btn btn-ghost btn-circle avatar'
                                            >
                                                <div className='w-10 rounded-full'>
                                                    <img src={user?.photoURL} />
                                                </div>
                                            </label>
                                        </div>

                                        <div className=''>
                                            <ul
                                                tabIndex={0}
                                                className='p-2 mt-[17px] text-white bg-black/80 menu menu-compact backdrop-blur-lg dropdown-content rounded-box w-52'
                                            >
                                                {
                                                    // user
                                                    // isTutor
                                                    isAdmin
                                                    // isCoaching
                                                    && (
                                                        <li>
                                                            {isAdmin ? (
                                                                <>
                                                                    <Link to='/dashboard/admin-home'>Dashboard</Link>
                                                                    <Link to='/dashboard/admin-home'>leader</Link>
                                                                </>
                                                            ) : isTutor ? (
                                                                <>
                                                                    <Link to='/dashboard/tutor-home'>Dashboard</Link>
                                                                    <Link to='/dashboard/admin-home'>leader</Link>
                                                                </>
                                                            ) : isParent ? (
                                                                <Link to='/dashboard/parent-Home'>Dashboard</Link>
                                                            ) : (
                                                                <>
                                                                    <Link to='/dashboard/coaching-home'>Dashboard</Link>
                                                                    <Link to='/dashboard/coaching'>Coaching</Link>
                                                                </>
                                                            )}
                                                        </li>
                                                    )}
                                                <li>
                                                    <Link to='/dashboard/profile'>Profile</Link>
                                                </li>
                                                <li>
                                                    <Link className='w-full' onClick={handleLogout}>
                                                        Log Out
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                ) : (
                                    <>
                                        <div className=''>
                                            <NavLink
                                                to="login"
                                                className={({ isActive }) => (isActive ? "regisLogin" : "regisLogin")}>
                                                Sign In
                                            </NavLink>

                                        </div>
                                    </>
                                )}
                        <div className='md:block hidden'>
                            <button onClick={toggleDarkMode} className='mx-3 text-lg'>
                                {isDarkMode == true ? (
                                    <FaSun className=''></FaSun>
                                ) : (
                                    <FaMoon></FaMoon>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        </Headroom>
    )
}

export default NavTest
