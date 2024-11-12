import { Link } from "react-router-dom";
import DBButton from "../../../../Components/Button/DBButton";
import MarqueeSliderPage from "../../../../Components/MarqueeSliderPage/MarqureeSliderPage";
import { IoBagAdd } from "react-icons/io5";
import { BsMenuUp } from "react-icons/bs";
import { FaUsers } from "react-icons/fa";
import { PiStudent } from "react-icons/pi";
import { CiWarning } from "react-icons/ci";

const TutorHome = () => {
    return (
        <div className="md:overflow-x-hidden overflow-x-auto pb-10">
            <MarqueeSliderPage
                notice="Notice"
                noticeBG='bg-orange-600'
                marquessText="আপনার প্রফাইল আপডেট করুন। প্রোফাইল আপডেট না করলে আপনি কোন টিউশনে আবেদন করতে পারবেন না এবং আপনার প্রফাইল এর কোন ফিচার দেখতে পারবেন না। তাই প্রোফাইল আপডেট করে আমাদের টিউশনে অ্যাপ্লাই করুন।"
            />
            <div className="grid md:grid-cols-6 grid-cols-1 gap-5 mx-5">
                <Link to=""
                    className="md:col-span-2 col-span-1 md:text-xl text-base font-medium py-8 px-4 hover:scale-105 bg-blue-400 hover:bg-blue-500 hover:text-white duration-200 shadow-xl rounded-lg flex items-center justify-center gap-3"
                >
                    <IoBagAdd className="md:text-2xl text-xl" /><span>Apply Tuition <span className="text-sm font-normal">(3)</span></span>
                </Link>
                <Link to=""
                    className="md:col-span-2 col-span-1 md:text-xl text-base font-medium py-8 px-4 hover:scale-105 bg-green-400 hover:bg-green-500 hover:text-white duration-200 shadow-xl rounded-lg flex items-center justify-center gap-3"
                >
                    <PiStudent className="md:text-2xl text-xl" /><span>C. Student <span className="text-sm font-normal">(4)</span></span>
                </Link>
                <Link to=""
                    className="md:col-span-2 col-span-1 md:text-xl text-base font-medium py-8 px-4 hover:scale-105 bg-orange-300 hover:bg-orange-400 hover:text-white duration-200 shadow-xl rounded-lg flex items-center justify-center gap-3"
                >
                    <FaUsers className="md:text-2xl text-xl" /><span>Parent Apply <span className="text-sm font-normal">(6)</span></span>
                </Link>

                {/* 4th card: Starts from column 2 and spans 2 columns */}
                <Link to=""
                    className="md:col-start-2 md:col-span-2 col-span-1 md:text-xl text-base font-medium py-8 px-4 hover:scale-105 bg-yellow-300 hover:bg-yellow-500 hover:text-white duration-200 shadow-xl rounded-lg flex items-center justify-center gap-3"
                >
                    <CiWarning className="md:text-2xl text-xl" /><span>Waiting Tuition <span className="text-sm font-normal">(6)</span></span>
                </Link>

                {/* 5th card: Starts from column 4 and spans 2 columns */}
                <Link to=""
                    className="md:col-start-4 md:col-span-2 col-span-1 md:text-xl text-base font-medium py-8 px-4 hover:scale-105 bg-sky-300 hover:bg-sky-400 hover:text-white duration-200 shadow-xl rounded-lg flex items-center justify-center gap-3"
                >
                    <BsMenuUp className="md:text-2xl text-xl" /><span>Your Blog <span className="text-sm font-normal">(0)</span></span>
                </Link>

                {/* 6th card: Starts with a two-column gap on each side and spans 2 columns */}
                <Link to=""
                    className="md:col-start-3 md:col-span-2 col-span-1 md:text-xl text-base font-medium py-8 px-4 bg-red-400 hover:bg-red-600 text-white duration-200 shadow-xl rounded-lg flex items-center justify-center gap-3"
                >
                    <BsMenuUp className="md:text-2xl text-xl" /><span>Cancel Tuition <span className="text-sm font-normal">(0)</span></span>
                </Link>
            </div>

            {/* <div className="pt-7">
                <DBButton link='/dashboard/tutor-update-profile' buttonBG='bg-blue-500' hoverBG='hover:bg-blue-700' title='update Profile' />
            </div> */}
        </div>
    );
};

export default TutorHome;
