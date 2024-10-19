import { Link, useParams } from "react-router-dom";

const TutorProfileCard = () => {
    const { id } = useParams();
    return (
        <div className="col-span-2 max-w-[320px] h-96 space-y-5 rounded-2xl bg-slate-100 p-5 shadow-md dark:bg-[#18181B] md:max-w-[350px]">
            {/* profile image & bg  */}
            <div className="">
                <img width={110} height={110} className="h-[120px] w-[120px] mx-auto rounded-full bg-slate-500 object-cover" src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2080&auto=format&fit=crop" alt="tutor profile" />
            </div>
            {/* profile name & role */}
            <div className="flex items-center justify-between">
                <h1 className="text-sm font-medium text-slate-600 text-left w-1/2">Name <span className="pl-11">:</span></h1>
                <p className="text-sm font-normal text-gray-700 text-center w-1/2"> Shiyam Sarker</p>
            </div>
            <div className="flex items-center justify-between">
                <h1 className="text-sm font-medium text-slate-600 text-left w-1/2">Gender <span className="pl-9">:</span></h1>
                <p className="text-sm font-normal text-gray-700 text-center w-1/2"> Male</p>
            </div>
            <div className="flex items-center justify-between">
                <h1 className="text-sm font-medium text-slate-600 text-left w-1/2">Address <span className="pl-8">:</span></h1>
                <p className="text-sm font-normal text-gray-700 text-center w-full"> Nautara, Dimla, Nilphamari</p>
            </div>
            <div className="flex justify-center pt-6">
                <Link to={`/tutor-details/${id}`} className="w-full text-center rounded-full py-2 text-[12px] font-semibold text-sky-700 ring-1 ring-sky-700 hover:bg-sky-700 hover:text-white sm:text-sm md:text-base">View Profile</Link>
            </div>
        </div>
    );
};

export default TutorProfileCard;