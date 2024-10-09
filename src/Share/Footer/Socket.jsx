import { Link } from "react-router-dom";

const Socket = () => {
    return (
        <div className="bg-slate-900 text-center py-2">
            <p className="text-white text-base font-medium">
                HTprovider © 2024 All rights reserved. Developed by - <Link
                    to="https://www.hometutorproviderbd.com/"
                    className="hover:text-orange-600 hover:underline hover:animate-pulse transition-all duration-200">
                     Home Tutor Provider BD
                </Link>
            </p>
        </div>
    );
};

export default Socket;