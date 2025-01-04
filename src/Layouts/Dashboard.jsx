import { useState } from 'react';
import { FaChevronRight } from 'react-icons/fa';
import DashboardHeader from '../Share/DashboardHeader/DashboardHeader';
import logo from './../assets/leaf.jpg'
import { IconContext } from 'react-icons';
import { Link, NavLink, Outlet } from 'react-router-dom';
import DashboardFooter from '../Share/DashboardFooter/DashboardFooter';
import { useAllUsers } from '../api/useAllUsers';
import { Menus } from '../../data';
import DashboardLogo from '../Components/DashboardComponent/DashboardLogo';

const Dashboard = () => {
    const [open, setOpen] = useState(true);

    const [users] = useAllUsers();
    const allUsers = users.users || []; 
    console.log("Users ====>", users);
    const tutors = allUsers.filter((data) => data.isTutor === true)
    const coaching = allUsers.filter((data) => data.isCoaching === true)
    const parents = allUsers.filter((data) => data.isParent === true)
    // console.log('tutors', tutors);
    // console.log('coaching', coaching);
    // console.log('parents', parents);

    // user identity
    const isAdmin = false;
    const isTutor = true;
    const isParent = false;
    // const isCoaching = true;

    const isAdminMenus = Menus.filter(menu => menu.role === 'admin')
    const isTutorMenus = Menus.filter(menu => menu.role === 'isTutor')
    const isParentMenus = Menus.filter(menu => menu.role === 'isParent')
    const isCoachingMenus = Menus.filter(menu => menu.role === 'isCoaching')
    const generalMenus = Menus.filter(menu => menu.role === 'general')

    return (
        <div className="flex overflow-x-hidden overflow-y-auto bg-slate-200">
            {/* dashboard side Ber */}
            <div className={`${open ? 'md:w-64 p-3' : 'md:w-16 p-1 text-center'} shadow-2xl duration-200 fixed transition-all bg-white relative`}>
                <FaChevronRight
                    onClick={() => setOpen(!open)}
                    className={`${open && 'rotate-180 transition-all duration-500'} absolute top-9 md:-right-3 -right-[5px] md:w-8 md:h-8 w-5 h-5 bg-slate-800 text-white cursor-pointer rounded-full border-2 border-blue-200 p-1`}
                />
                {/* default logo */}
                <DashboardLogo open={open} isAdmin={isAdmin} />
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
                                    className='flex items-center md:gap-x-4 gap-1'>
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
                        : //  Tutor menus
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
                            : //  Parent menus
                            isParent
                                ? isParentMenus.map((Menu, index) => (
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
                                : // coaching menus
                                isCoachingMenus.map((Menu, index) => (
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
                                className='flex items-center md:gap-x-4 gap-1'>
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