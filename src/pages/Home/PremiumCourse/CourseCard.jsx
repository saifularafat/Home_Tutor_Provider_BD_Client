import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import course1 from "./../../../assets/premium/tutor1.jpg"
import course2 from "./../../../assets/premium/tutor2.jpg"
import course3 from "./../../../assets/premium/tutor3.jpg"

const CourseCard = () => {
    return (
        <>
            <div className=" container md:mx-auto md:pb-16 pb-5 pt-6 md:pt-12">
                <SectionTitle sectionName="Premium Course" />

                <div className="grid md:grid-cols-4 grid-cols-1 gap-4 md:pt-9 pt-5">
                    <div className="md:max-w-[320px] space-y-2 rounded-lg border-b-[3px] border-l border-r-2 border-t hover:border-b-[#0084ff] hover:border-l-[#005eb6] hover:border-r-[#0084ff] hover:border-t-[#005eb6] bg-white py-4 pl-4 shadow-sm hover:shadow-2xl transition-all duration-200 dark:bg-[#18181B]">
                        <div className="flex items-center justify-between">
                            <h1 className="w-[55%] text-2xl font-bold tracking-wider text-sky-900 dark:text-[#289DFF] md:text-3xl"><sup className="md:text-2xl text-xl font-extrabold">৳</sup>২০০</h1>
                            <div className=" w-[45%] rounded-bl-full rounded-tl-full bg-gradient-to-r from-[#52b7ff] to-[#0084ff] px-4 py-1 md:px-6 md:py-3">
                                <h3 className="font-semibold tracking-wider text-white md:text-xl text-base">Premium</h3>
                            </div>
                        </div>
                        <div className="pr-4">
                            <img width={350} height={190} className="md:h-[190px] w-full rounded-md bg-gray-400" src={course1} alt="premium course" />
                        </div>
                        <div>
                            <h2 className="font-medium text-slate-800 md:text-lg text-xl dark:text-white/90">Videos Course</h2>
                            <p className="text-sm font-medium text-slate-600">Mohammad Saiful Arafat</p>
                        </div>
                        <div className="md:mr-4 text-center md:pt-0 pt-2">
                            <button className="md:px-5 px-4 rounded-full bg-gradient-to-r from-[#52b7ff] to-[#0084ff] py-1 md:text-lg text-base md:font-semibold font-medium tracking-wider text-white">Purchase</button>
                        </div>
                    </div>
                    <div className="md:max-w-[320px] space-y-2 rounded-lg border-b-[3px] border-l border-r-2 border-t hover:border-b-[#0084ff] hover:border-l-[#005eb6] hover:border-r-[#0084ff] hover:border-t-[#005eb6] bg-white py-4 pl-4 shadow-sm hover:shadow-2xl transition-all duration-200 dark:bg-[#18181B]">
                        <div className="flex items-center justify-between">
                            <h1 className="w-[55%] text-2xl font-bold tracking-wider text-sky-900 dark:text-[#289DFF] md:text-3xl"><sup className="md:text-2xl text-xl font-extrabold">৳</sup>২০০</h1>
                            <div className=" w-[45%] rounded-bl-full rounded-tl-full bg-gradient-to-r from-[#52b7ff] to-[#0084ff] px-4 py-1 md:px-6 md:py-3">
                                <h3 className="font-semibold tracking-wider text-white md:text-xl text-base">Premium</h3>
                            </div>
                        </div>
                        <div className="pr-4">
                            <img width={350} height={190} className="md:h-[190px] w-full rounded-md bg-gray-400" src={course2} alt="premium course" />
                        </div>
                        <div>
                            <h2 className="font-medium text-slate-800 md:text-lg text-xl dark:text-white/90">Videos Course</h2>
                            <p className="text-sm font-medium text-slate-600">Mohammad Saiful Arafat</p>
                        </div>
                        <div className="md:mr-4 text-center md:pt-0 pt-2">
                            <button className="md:px-5 px-4 rounded-full bg-gradient-to-r from-[#52b7ff] to-[#0084ff] py-1 md:text-lg text-base md:font-semibold font-medium tracking-wider text-white">Purchase</button>
                        </div>
                    </div>
                    <div className="md:max-w-[320px] space-y-2 rounded-lg border-b-[3px] border-l border-r-2 border-t hover:border-b-[#0084ff] hover:border-l-[#005eb6] hover:border-r-[#0084ff] hover:border-t-[#005eb6] bg-white py-4 pl-4 shadow-sm hover:shadow-2xl transition-all duration-200 dark:bg-[#18181B]">
                        <div className="flex items-center justify-between">
                            <h1 className="w-[55%] text-2xl font-bold tracking-wider text-sky-900 dark:text-[#289DFF] md:text-3xl"><sup className="md:text-2xl text-xl font-extrabold">৳</sup>২০০</h1>
                            <div className=" w-[45%] rounded-bl-full rounded-tl-full bg-gradient-to-r from-[#52b7ff] to-[#0084ff] px-4 py-1 md:px-6 md:py-3">
                                <h3 className="font-semibold tracking-wider text-white md:text-xl text-base">Premium</h3>
                            </div>
                        </div>
                        <div className="pr-4">
                            <img width={350} height={190} className="md:h-[190px] w-full rounded-md bg-gray-400" src={course3} alt="premium course" />
                        </div>
                        <div>
                            <h2 className="font-medium text-slate-800 md:text-lg text-xl dark:text-white/90">Videos Course</h2>
                            <p className="text-sm font-medium text-slate-600">Mohammad Saiful Arafat</p>
                        </div>
                        <div className="md:mr-4 text-center md:pt-0 pt-2">
                            <button className="md:px-5 px-4 rounded-full bg-gradient-to-r from-[#52b7ff] to-[#0084ff] py-1 md:text-lg text-base md:font-semibold font-medium tracking-wider text-white">Purchase</button>
                        </div>
                    </div>
                    <div className="md:max-w-[320px] space-y-2 rounded-lg border-b-[3px] border-l border-r-2 border-t hover:border-b-[#0084ff] hover:border-l-[#005eb6] hover:border-r-[#0084ff] hover:border-t-[#005eb6] bg-white py-4 pl-4 shadow-sm hover:shadow-2xl transition-all duration-200 dark:bg-[#18181B]">
                        <div className="flex items-center justify-between">
                            <h1 className="w-[55%] text-2xl font-bold tracking-wider text-sky-900 dark:text-[#289DFF] md:text-3xl"><sup className="md:text-2xl text-xl font-extrabold">৳</sup>২০০</h1>
                            <div className=" w-[45%] rounded-bl-full rounded-tl-full bg-gradient-to-r from-[#52b7ff] to-[#0084ff] px-4 py-1 md:px-6 md:py-3">
                                <h3 className="font-semibold tracking-wider text-white md:text-xl text-base">Premium</h3>
                            </div>
                        </div>
                        <div className="pr-4">
                            <img width={350} height={190} className="md:h-[190px] w-full rounded-md bg-gray-400" src={course2} alt="premium course" />
                        </div>
                        <div>
                            <h2 className="font-medium text-slate-800 md:text-lg text-xl dark:text-white/90">Videos Course</h2>
                            <p className="text-sm font-medium text-slate-600">Mohammad Saiful Arafat</p>
                        </div>
                        <div className="md:mr-4 text-center md:pt-0 pt-2">
                            <button className="md:px-5 px-4 rounded-full bg-gradient-to-r from-[#52b7ff] to-[#0084ff] py-1 md:text-lg text-base md:font-semibold font-medium tracking-wider text-white">Purchase</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CourseCard;