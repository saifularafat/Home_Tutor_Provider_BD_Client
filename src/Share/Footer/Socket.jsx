import { Link } from "react-router-dom";

const Socket = () => {
    return (
        <div className="bg-slate-900 text-center py-2">
            <p className="text-white md:text-base text-sm font-medium">
                HTProvider <sup className="md:text-xs text-[10px] font-semibold text-red-400">BD</sup> © 2024 All rights reserved. Developed by - <Link
                    to="https://www.hometutorproviderbd.com/"
                    className="hover:text-orange-600 hover:underline hover:animate-pulse transition-all duration-200">
                     Home Tutor Provider BD
                </Link>
            </p>
        </div>
    );
};

export default Socket;