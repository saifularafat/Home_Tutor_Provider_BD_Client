import { Link } from "react-router-dom";
import ceo from "./../../../../assets/ceo.jpg"
import it from "./../../../../assets/me_photo.jpg"
import call from "./../../../../assets/me.jpg"
import SectionTitle from "../../../../Components/SectionTitle/SectionTitle";
const TeamCard = () => {
    return (
        <div className="max-w-6xl mx-auto my-16">
            <SectionTitle sectionName="Meet Our Tea" />
            
            <div className="grid grid-cols-3 gap-5">
                <div className="max-w-[350px] space-y-3 rounded-lg bg-white p-6 shadow-md hover:shadow-xl hover:shadow-sky-200 transition-all duration-300 md:w-[350px] dark:bg-[#18181B]">
                    <img width={400} height={400} className="h-[220px] w-[300px] rounded-lg object-cover" src={ceo} alt="CEO Photo" />
                    <div className="text-center">
                        <h1 className="text-2xl font-bold text-slate-800 capitalize">Md Mohibur Rahman</h1>
                        <h1 className="text-sm font-medium text-slate-600 uppercase pt-2">CEO</h1>
                        <p className="text-base text-gray-700 font-medium leading-6 text-justify py-3 dark:text-white/60">
                            Md Mohibur Rahman leads our team with passion and dedication, ensuring we deliver the best results for our clients.
                        </p>
                    </div>
                </div>
                <Link to="" className="">
                    <div className="max-w-[350px] space-y-3 rounded-lg bg-white p-6 shadow-md hover:shadow-xl hover:shadow-sky-200 transition-all duration-300 md:w-[350px] dark:bg-[#18181B]">
                        <img width={400} height={400} className="h-[220px] w-[300px] rounded-lg object-cover" src={it} alt="CEO Photo" />
                        <div className="text-center">
                            <h1 className="text-2xl font-bold text-slate-800 capitalize">Saiful Islam</h1>
                            <h1 className="text-sm font-medium text-slate-600 uppercase pt-2">IT Specialist</h1>
                            <p className="text-base text-gray-700 font-medium leading-6 text-justify py-3 dark:text-white/60">
                                Saiful Islam ensures our technology runs smoothly, providing the technical support and innovations needed to keep us at the forefront.
                            </p>
                        </div>
                    </div>
                </Link>
                <div className="max-w-[350px] space-y-3 rounded-lg bg-white p-6 shadow-md hover:shadow-xl hover:shadow-sky-200 transition-all duration-300 md:w-[350px] dark:bg-[#18181B]">
                    <img width={400} height={400} className="h-[220px] w-[300px] rounded-lg object-cover" src={call} alt="CEO Photo" />
                    <div className="text-center">
                        <h1 className="text-2xl font-bold text-slate-800 capitalize">Md Habibur Rahman</h1>
                        <h1 className="text-sm font-medium text-slate-600 uppercase pt-2">Customer Care Executive</h1>
                        <p className="text-base text-gray-700 font-medium leading-6 text-justify py-3 dark:text-white/60">
                            Md Habibur Rahman is dedicated to providing outstanding customer service, ensuring that our clients' needs are met with care and efficiency.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeamCard;