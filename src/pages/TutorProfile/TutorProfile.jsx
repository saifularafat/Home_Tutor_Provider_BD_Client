import { FaLocationDot } from "react-icons/fa6";
import PageTitleShow from "../../Components/PageTitleShow/PageTitleShow";

const TutorProfile = () => {
    return (
        <>
        <PageTitleShow currentPage="Tutor Profile"/>
            <div className="md:max-w-5xl mx-auto md:py-12 py-6">
                <div className="grid md:grid-cols-6 grid-cols-1 md:gap-8 gap-5 mx-3 md:mx-0">
                    {/* 1st profile */}
                    <div className="col-span-1 md:col-span-2 flex md:max-w-[320px] w-full flex-col items-center justify-center md:space-y-4 space-y-2 rounded-xl bg-white md:p-8 p-4 shadow-lg hover:shadow-2xl hover:shadow-sky-300 transition-all duration-200 shadow-blue-400 dark:bg-[#18181B]">
                        <div className="group relative">
                            <img width={110} height={110} className="h-[110px] w-[110px] rounded-full bg-slate-500 object-cover" src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2080&auto=format&fit=crop" alt="card navigate ui" />
                            <span className="absolute bottom-3 right-0 h-5 w-5 rounded-full border-[3px] border-white bg-green-500 dark:border-[#18181B]"></span>
                            <span className="absolute bottom-3 right-0 h-5 w-5 animate-ping rounded-full bg-green-500"></span>
                        </div>
                        <div className="space-y-1 text-center">
                            <h1 className="md:text-2xl text-xl font-bold text-[#0369A1] ">Nullify</h1>
                            <div className="flex items-center justify-center gap-1">
                                <FaLocationDot className="text-slate-600" />
                                <span className="text-slate-600 font-medium">Dhaka</span>
                            </div>
                        </div>
                        {/* bio  */}
                        <p className="pb-2 text-center text-sm text-gray-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                        <button className="w-full rounded-full py-2 text-[12px] font-semibold text-sky-700 ring-1 ring-sky-700 hover:bg-sky-700 hover:text-white sm:text-sm md:text-base">View Profile</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TutorProfile;