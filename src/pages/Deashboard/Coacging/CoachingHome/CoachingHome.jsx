import { Link } from "react-router-dom";
import MarqueeSliderPage from "../../../../Components/MarqueeSliderPage/MarqureeSliderPage";
import { IoBagAdd } from "react-icons/io5";
import { FaUsers } from "react-icons/fa";
import { PiStudent } from "react-icons/pi";
import { BsMenuUp } from "react-icons/bs";
import RecommendationTutor from "../../Parent/ParentHome/RecommendationTutor";
import { MdOutlineCancelPresentation } from "react-icons/md";
import { SiLivejournal } from "react-icons/si";

const CoachingHome = () => {
    return (
        <div className="md:overflow-x-hidden overflow-x-auto pb-10">
            <MarqueeSliderPage
                notice="Notice"
                noticeBG='bg-orange-600'
                marquessText="HOME TUTOR PROVIDEBD সারা দেশে 24/7 দক্ষ ও অভিজ্ঞ টিউটর সরবরাহ করে, আপনার চাহিদা অনুযায়ী যোগ্য শিক্ষক পেতে আমাদের সাথে থাকুন....... _________"
            />
            {/* notice board */}
            <div className="py-1 px-4 bg-white rounded-md ">
                <div className={`border-b md:text-xl text-sm text-orange-600 font-medium md:px-5 px-2 py-3 rounded-l-xl`}>
                    Notice
                </div>
                <p className="py-2 text-base font-medium text-slate-800">HOME TUTOR PROVIDE <sup className="text-xs text-slate-500">BD</sup> সারা দেশে 24/7 দক্ষ ও অভিজ্ঞ টিউটর সরবরাহ করে, আপনার চাহিদা অনুযায়ী যোগ্য শিক্ষক পেতে আমাদের সাথে থাকুন।
                </p>
            </div>

            <div className="grid md:grid-cols-6 grid-cols-1 gap-5 mx-5 py-8">
                <Link to=""
                    className="md:col-span-2 col-span-1 md:text-xl text-base font-medium py-8 px-4 hover:scale-105 bg-blue-400 hover:bg-blue-500 hover:text-white duration-200 shadow-xl rounded-lg flex items-center justify-center gap-3"
                >
                    <IoBagAdd className="md:text-2xl text-xl" /><span>Total Tuition Jobs <span className="text-sm font-normal">(3)</span></span>
                </Link>
                <Link to=""
                    className="md:col-span-2 col-span-1 md:text-xl text-base font-medium py-8 px-4 hover:scale-105 bg-green-400 hover:bg-green-500 hover:text-white duration-200 shadow-xl rounded-lg flex items-center justify-center gap-3"
                >
                    <PiStudent className="md:text-2xl text-xl" /><span>Total Request Tutor <span className="text-sm font-normal">(4)</span></span>
                </Link>
                <Link to=""
                    className="md:col-span-2 col-span-1 md:text-xl text-base font-medium py-8 px-4 hover:scale-105 bg-orange-300 hover:bg-orange-400 hover:text-white duration-200 shadow-xl rounded-lg flex items-center justify-center gap-3"
                >
                    <FaUsers className="md:text-2xl text-xl" /><span>Total Students <span className="text-sm font-normal">(6)</span></span>
                </Link>

                <Link to=""
                    className="md:col-span-2 col-span-1 md:text-xl text-base font-medium py-8 px-4 hover:scale-105 bg-red-400 hover:bg-red-500 hover:text-white duration-200 shadow-xl rounded-lg flex items-center justify-center gap-3"
                >
                    <MdOutlineCancelPresentation className="md:text-2xl text-xl" /><span>Cancel Tutor <span className="text-sm font-normal">(0)</span></span>
                </Link>
                <Link to=""
                    className="md:col-span-2 col-span-1 md:text-xl text-base font-medium py-8 px-4 hover:scale-105 bg-pink-300 hover:bg-pink-500 hover:text-white duration-200 shadow-xl rounded-lg flex items-center justify-center gap-3"
                >
                    <SiLivejournal className="md:text-2xl text-xl" /><span>Total Blogs<span className="text-sm font-normal">(0)</span></span>
                </Link>
            </div>



            <div className="pt-10">
                <RecommendationTutor />
            </div>
        </div>
    );
};

export default CoachingHome;