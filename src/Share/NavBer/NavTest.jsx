import './Navbar.css'
import { AiFillBell } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import logo from '../../assets/leaf.jpg'
import Headroom from 'react-headroom'
import { FaMoon, FaSun } from 'react-icons/fa'
import { useEffect, useState } from 'react'

const NavTest = () => {
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
            <nav className='z-50 text-white backdrop-blur-lg bg-black/40'>
                <div className='navbar z-[40]  container mx-auto  sticky top-0'>
                    <div className='navbar-start'>
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
                                className='z-50 p-2 shadow dropdown-content rounded-box bg-black/80 md:bg-black/40 backdrop-blur'
                            >
                                <li>
                                    <Link to='/'>Home</Link>
                                </li>
                                <li>
                                    <Link to='/instructors'>Instructors</Link>
                                </li>
                                <li>
                                    <Link to='/blog'>Blog</Link>
                                </li>
                                <li>
                                    <Link to='/about'>About us</Link>
                                </li>
                                <li>
                                    <Link to='/forum'>Forum</Link>
                                </li>
                                {user && (
                                    <li>
                                        {isAdmin ? (
                                            ''
                                        ) : isInstructor ? (
                                            <Link to='/createLiveExam'>Create Live Exam</Link>
                                        ) : (
                                            <Link to='/joinLiveExam'>Join Live Exam</Link>
                                        )}
                                    </li>
                                )}
                            </ul>
                        </div>
                        <Link to='/'>
                            <img
                                className='w-[200px] h-16 hover:-translate-y-0.5 duration-200'
                                src={logo}
                                alt=''
                            />
                        </Link>
                    </div>
                    <div className='hidden navbar-center lg:flex'>
                        <ul className='px-1 menu menu-horizontal'>
                            <li>
                                <Link to='/'>Home</Link>
                            </li>
                            <li>
                                <Link to="tuition-jobs">Tuition Jobs</Link>
                            </li>
                            <li>
                                <Link to='/tutor-profile'>Tutor Profile</Link>
                            </li>
                            <li>
                                <Link to='/about-us'>About us</Link>
                            </li>
                            <li>
                                <Link to='/contact-us'>Contact Us</Link>
                            </li>
                            {user && (
                                <li>
                                    {isAdmin ? (
                                        ''
                                    ) : isInstructor ? (
                                        <Link to='/createLiveExam'>Create Live Exam</Link>
                                    ) : (
                                        <Link to='/joinLiveExam'>Join Live Exam</Link>
                                    )}
                                </li>
                            )}
                        </ul>
                    </div>
                    <div className='navbar-end '>
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
                                        className='p-2 mt-3 text-white shadow-md bg-black/80 menu menu-compact backdrop-blur-lg dropdown-content rounded-box w-52'
                                    >
                                        <li>
                                            <Link
                                                to='/leaderboard'
                                                className='justify-between w-full'
                                            >
                                                LeaderBoard
                                            </Link>
                                        </li>
                                        {/* Navigate to different dashboard route based on user role */}
                                        {user && (
                                            <li>
                                                {isAdmin ? (
                                                    <Link to='/dashboard/adminHome'>Dashboard</Link>
                                                ) : isInstructor ? (
                                                    <Link to='/dashboard/instructorHome'>Dashboard</Link>
                                                ) : (
                                                    <Link to='/dashboard/userHome'>Dashboard</Link>
                                                )}
                                            </li>
                                        )}
                                        <li>
                                            <Link to='/profile'>Profile</Link>
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
            </nav>
        </Headroom>
    )
}

export default NavTest
