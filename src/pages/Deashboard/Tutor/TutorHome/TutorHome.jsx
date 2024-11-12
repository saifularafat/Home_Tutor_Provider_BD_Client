import { Link } from "react-router-dom";
import DBButton from "../../../../Components/Button/DBButton";
import MarqueeSliderPage from "../../../../Components/MarqueeSliderPage/MarqureeSliderPage";
import { IoBagAdd } from "react-icons/io5";
import { BsMenuUp } from "react-icons/bs";
import { FaUsers } from "react-icons/fa";
import { PiStudent } from "react-icons/pi";

const TutorHome = () => {
    return (
        <div className="md:overflow-x-hidden overflow-x-auto">
            <MarqueeSliderPage
                notice="Notice"
                noticeBG='bg-orange-600'
                marquessText="আপনার প্রফাইল আপডেট করুন। প্রোফাইল আপডেট না করলে আপনি কোন টিউশনে আবেদন করতে পারবেন না এবং আপনার প্রফাইল এর কোন ফিচার দেখতে পারবেন না। তাই প্রোফাইল আপডেট করে আমাদের টিউশনে অ্যাপ্লাই করুন।"
            />
            <div className="grid grid-cols-1 md:grid-cols-6 md:max-w-5xl md:space-y-6 space-y-5 mx-auto py-6 text-center">
                <div className="col-span-6 grid grid-cols-1 md:grid-cols-3 gap-5">
                    <Link to=""
                        className="text-xl font-medium py-8 px-4 hover:scale-105 bg-white hover:bg-slate-600 hover:text-white duration-300 shadow-xl rounded-lg flex items-center justify-center gap-3"
                    >
                        <IoBagAdd className="text-2xl" /><span>Apply Job <span className="text-sm font-normal">(3)</span></span>
                    </Link>
                    <Link to=""
                        className="text-xl font-medium py-8 px-4 hover:scale-105 bg-white hover:bg-slate-600 hover:text-white duration-300 shadow-xl rounded-lg flex items-center justify-center gap-3"
                    >
                        <PiStudent className="text-2xl" /><span>C. Student <span className="text-sm font-normal">(4)</span></span>
                    </Link>
                    <Link to=""
                        className="text-xl font-medium py-8 px-4 hover:scale-105 bg-white hover:bg-slate-600 hover:text-white duration-300 shadow-xl rounded-lg flex items-center justify-center gap-3"
                    >
                        <FaUsers className="text-2xl" /><span>Parent Apply <span className="text-sm font-normal">(6)</span></span>
                    </Link>
                </div>
                <div className="md:col-start-2 md:col-span-4 grid md:grid-cols-2 gap-5">
                    <Link to=""
                        className="text-xl font-medium py-8 px-4 hover:scale-105 bg-white hover:bg-slate-600 hover:text-white duration-300 shadow-xl rounded-lg flex items-center justify-center gap-3"
                    >
                        <BsMenuUp className="text-2xl" /><span>Your Blog <span className="text-sm font-normal">(0)</span></span>
                    </Link>
                    <Link to=""
                        className="text-xl font-medium py-8 px-4 hover:scale-105 bg-red-400 hover:bg-red-600 text-white duration-300 shadow-xl rounded-lg flex items-center justify-center gap-3"
                    >
                        <BsMenuUp className="text-2xl" /><span>Cancel Tuition <span className="text-sm font-normal">(0)</span></span>
                    </Link>
                </div>
            </div>

            {/* <div className="pt-7">
                <DBButton link='/dashboard/tutor-update-profile' buttonBG='bg-blue-500' hoverBG='hover:bg-blue-700' title='update Profile' />
            </div> */}
        </div>
    );
};

export default TutorHome;