import { useEffect, useState } from "react";
import { AiFillBell } from "react-icons/ai";
import { FaMoon, FaSun } from "react-icons/fa6";
import { Link, NavLink } from "react-router-dom";

import it from "./../../assets/me_photo.jpg"

const Nav = () => {

    const dark = localStorage.getItem('customDarkTheme')
    console.log(dark)
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
    // const [isInstructor] = useInstructor()
    // const [info] = useUser()

    // Temporary variables for testing
    const user = { displayName: "Test User" };
    const isAdmin = true; // Change to true/false to test admin
    const isInstructor = false; // Change to true/false to test instructor
    const notices = [1, 2, 3]; // Example notice array for badge count

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode)
    }

    const handleLogout = () => {
        // logOut()
        //     .then(() => {
        //         Swal.fire({
        //             icon: 'success',
        //             title: 'Log Out Successful',
        //             showConfirmButton: false,
        //             timer: 1500
        //         })
        //     })
        //     .catch(error => console.log(error))
    }

    // const [notices] = useLiveExam()
    // const notices = true;
    return (
        <div className="flex items-center justify-between">
            <ul className="md:flex items-center gap-4 md:mx-3 mx-2 pt-4">
                {/* <li>
                    <NavLink
                        to="/"
                        className={({ isActive }) => (isActive ? "activeNav" : "defaultNav")}>
                        Home
                    </NavLink>
                </li> */}
                {/* <li>
                    <NavLink
                        to="tuition-jobs"
                        className={({ isActive }) => (isActive ? "activeNav" : "defaultNav")}>
                        Tuition Jobs
                    </NavLink>
                </li> */}
                {/* <li>
                    <NavLink
                        to="tutor-profile"
                        className={({ isActive }) => (isActive ? "activeNav" : "defaultNav")}>
                        Tutor Profile
                    </NavLink>
                </li> */}
                <li>
                    <NavLink
                        to="contact-us"
                        className={({ isActive }) => (isActive ? "activeNav" : "defaultNav")}>
                        Contact Us
                    </NavLink>
                </li>
            </ul>


            {/* Show this Right site */}
            <div className='navbar-end flex items-center justify-center'>
                <div className='indicator me-6'>
                    <span
                        className={`${notices?.length > 0 && 'indicator-item badge badge-warning'
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
                {user ? (
                    <div className='ml-5 z-50'>
                        <div
                            className='list-none tooltip tooltip-bottom z-50'
                            // data-tip={info?.displayName}
                            data-tip={'displayName'}
                        >
                            <label
                                tabIndex={0}
                                className='btn btn-ghost btn-circle avatar'
                            >
                                <div className='w-10 rounded-full'>
                                    {/* <img src={user?.photoURL} alt="userPhoto" /> */}
                                    <img src={it} alt="userPhoto" />
                                </div>
                            </label>
                        </div>

                        <div className=''>
                            {/* <ul
                                tabIndex={0}
                                className='p-2 text-white shadow-md bg-black/80  backdrop-blur-lg rounded-box w-52 z-50'
                            >
                                <li>
                                    <Link
                                        to='/leaderboard'
                                        className='justify-between w-full'
                                    >
                                        LeaderBoard
                                    </Link>
                                </li> */}
                                {/* Navigate to different dashboard route based on user role */}
                                {/* {user && (
                                    <li>
                                        {isAdmin ? (
                                            <Link to='/dashboard/adminHome'>Dashboard</Link>
                                        ) : isInstructor ? (
                                            <Link to='/dashboard/instructorHome'>Dashboard</Link>
                                        ) : (
                                            <Link to='/dashboard/userHome'>Dashboard</Link>
                                        )}
                                    </li>
                                )} */}
                                {/* <li>
                                    <Link to='/profile'>Profile</Link>
                                </li>
                                <li>
                                    <Link className='w-full' onClick={handleLogout}>
                                        Log Out
                                    </Link>
                                </li>
                            </ul> */}
                        </div>
                    </div>
                ) : (
                    <Link
                        to='/login'
                        className='border-none shadow-md btn btn-sm btn-primary'
                    >
                        Login
                    </Link>
                )}
                <div>
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
    );
};

export default Nav;