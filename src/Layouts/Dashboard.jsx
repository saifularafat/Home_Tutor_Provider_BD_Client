import { useState } from 'react';
import arrow from './../assets/leaf.jpg'
import { FaChevronRight } from 'react-icons/fa';
import DashboardHeader from '../Share/DashboardHeader/DashboardHeader';
const Dashboard = () => {
    const [open, setOpen] = useState(true);
    return (
        <div className="flex gap-x-5">
            <div className={`${open ? 'w-60 p-3' : 'w-16 p-1 text-center'} duration-200 h-screen transition-all bg-slate-500 relative`}>
                <FaChevronRight
                    onClick={() => setOpen(!open)}
                    className={`${open && 'rotate-180 transition-all duration-200'} absolute top-9 -right-3 w-9 h-9 bg-slate-800 text-white cursor-pointer rounded-full border-2 border-blue-200 p-1`}
                />
                {/* {Array(15).fill(<p>Lorem, ipsum dolor</p>)} */}
            </div>
            <div className='mt-3 w-full'>
                <DashboardHeader open={open} setOpen={setOpen} />
            </div>
        </div>
    );
};

export default Dashboard;