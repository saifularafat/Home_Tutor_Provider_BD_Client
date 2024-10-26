import { Link } from "react-router-dom";
import ceo from "./../../../../assets/ceo.jpg"
import it from "./../../../../assets/me_photo.jpg"
import call from "./../../../../assets/me.jpg"
import SectionTitle from "../../../../Components/SectionTitle/SectionTitle";
const TeamCard = () => {
    return (
        <div className="md:max-w-6xl mx-auto md:my-16 my-8">
            <SectionTitle sectionName="Meet Our Team" />

            <div className="grid md:grid-cols-3 md:gap-5 gap-3 mx-4">
                <div className="md:max-w-[350px] w-full md:space-y-3 space-y-2 rounded-lg bg-white md:p-6 p-3 shadow-md hover:shadow-xl hover:shadow-sky-200 transition-all duration-300 dark:bg-[#18181B]">
                    <img width={400} height={400} className="md:h-[220px] h-[200px] md:w-[300px] w-full rounded-lg object-cover" src={ceo} alt="CEO Photo" />
                    <div className="text-center">
                        <h1 className="text-2xl font-bold text-slate-800 capitalize">Md Mohibur Rahman</h1>
                        <h1 className="text-sm font-medium text-slate-600 uppercase pt-2">CEO</h1>
                        <p className="text-base text-gray-700 font-medium leading-6 text-justify md:py-3 py-2 dark:text-white/60">
                            Md Mohibur Rahman leads our team with passion and dedication, ensuring we deliver the best results for our clients.
                        </p>
                    </div>
                </div>
                <Link to="" className="">
                    <div className="md:max-w-[350px] w-full md:space-y-3 space-y-2 rounded-lg bg-white md:p-6 p-3 shadow-md hover:shadow-xl hover:shadow-sky-200 transition-all duration-300 dark:bg-[#18181B]">
                        <img width={400} height={400} className="md:h-[220px] h-[200px] md:w-[300px] w-full rounded-lg object-cover" src={it} alt="IT Photo" />
                        <div className="text-center">
                            <h1 className="text-2xl font-bold text-slate-800 capitalize">Saiful Islam</h1>
                            <h1 className="text-sm font-medium text-slate-600 uppercase pt-2">IT Specialist</h1>
                            <p className="text-base text-gray-700 font-medium leading-6 text-justify md:py-3 py-2 dark:text-white/60">
                                Saiful Islam ensures our technology runs smoothly, providing the technical support and innovations needed to keep us at the forefront.
                            </p>
                        </div>
                    </div>
                </Link>
                <div className="md:max-w-[350px] w-full md:space-y-3 space-y-2 rounded-lg bg-white md:p-6 p-3 shadow-md hover:shadow-xl hover:shadow-sky-200 transition-all duration-300 dark:bg-[#18181B]">
                    <img width={400} height={400} className="md:h-[220px] h-[200px] md:w-[300px] w-full rounded-lg object-cover" src={call} alt="call Photo" />
                    <div className="text-center">
                        <h1 className="text-2xl font-bold text-slate-800 capitalize">Md Mohibur Rahman</h1>
                        <h1 className="text-sm font-medium text-slate-600 uppercase pt-2">Customer Care Executive</h1>
                        <p className="text-base text-gray-700 font-medium leading-6 text-justify md:py-3 py-2 dark:text-white/60">
                            Md Habibur Rahman is dedicated to providing outstanding customer service, ensuring that our clients needs are met with care and efficiency.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeamCard;