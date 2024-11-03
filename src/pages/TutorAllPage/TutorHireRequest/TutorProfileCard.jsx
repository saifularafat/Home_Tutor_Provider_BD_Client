import { Link, useParams } from "react-router-dom";

const TutorProfileCard = () => {
    const { id } = useParams();
    return (
        <div className="md:col-span-2 col-span-1 w-full md:h-96 md:space-y-5 space-y-3 rounded-2xl bg-slate-100 md:p-5 p-4 shadow-md dark:bg-[#18181B] md:max-w-[350px]">
            {/* profile image & bg  */}
            <div className="">
                <img width={100} height={100} className="md:h-[120px] h-24 md:w-[120px] w-24 mx-auto rounded-full bg-slate-500 object-cover"
                    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2080&auto=format&fit=crop"
                    alt="tutor profile"
                />
            </div>
            {/* profile name & role */}
            <div className="flex items-center justify-between">
                <h1 className="text-sm font-medium text-slate-600 text-left w-1/2">Name <span className="md:pl-11 pl-5">:</span></h1>
                <p className="text-sm font-normal text-gray-700 text-center w-1/2"> Shiyam Sarker</p>
            </div>
            <div className="flex items-center justify-between">
                <h1 className="text-sm font-medium text-slate-600 text-left w-1/2">Gender <span className="md:pl-9 pl-3">:</span></h1>
                <p className="text-sm font-normal text-gray-700 text-center w-1/2"> Male</p>
            </div>
            <div className="flex items-center justify-between">
                <h1 className="text-sm font-medium text-slate-600 text-left w-1/2">Address <span className="md:pl-8 pl-2">:</span></h1>
                <p className="text-sm font-normal text-gray-700 text-center w-full"> Nautara, Dimla, Nilphamari</p>
            </div>
            <div className="flex justify-center md:pt-6 pt-2">
                <Link to={`/tutor-details/${id}`} className="md:w-full w-1/2 mx-auto md:mx-0 text-center rounded-full py-2 text-[12px] font-semibold text-sky-700 ring-1 ring-sky-700 hover:bg-sky-700 hover:text-white sm:text-sm md:text-base">View Profile</Link>
            </div>
        </div>
    );
};

export default TutorProfileCard;