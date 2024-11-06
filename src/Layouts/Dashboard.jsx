import { useState } from 'react';
import { FaChevronRight } from 'react-icons/fa';
import DashboardHeader from '../Share/DashboardHeader/DashboardHeader';
import logo from './../assets/leaf.jpg'
const Dashboard = () => {
    const [open, setOpen] = useState(true);
    return (
        <div className="flex gap-x-5">
            <div className={`${open ? 'w-60 p-3' : 'w-16 p-1 text-center'} duration-200 h-screen transition-all bg-slate-500 relative`}>
                <FaChevronRight
                    onClick={() => setOpen(!open)}
                    className={`${open && 'rotate-180 transition-all duration-500'} absolute top-9 -right-3 w-9 h-9 bg-slate-800 text-white cursor-pointer rounded-full border-2 border-blue-200 p-1`}
                />

                <div className={`flex gap-x-4 items-center`}>
                    <div className='text-center w-full'>
                        <img src={logo} alt="" className={`${open ? 'w-16 h-16 mx-auto' : ' w-9 h-9 mx-auto'} cursor-pointer duration-500 bg-white rounded-xl`} />
                        {
                            open ? <h2 className={`${!open && 'scale-105'} text-white text-xl font-medium origin-left duration-300`}>Home Tutor Provider<sup>BD</sup></h2>
                                :
                                ''
                        }
                    </div>
                </div>
            </div>
            <div className='mt-3 w-full'>
                <DashboardHeader open={open} setOpen={setOpen} />
            </div>
        </div>
    );
};

export default Dashboard;