import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import course1 from "./../../../assets/premium/tutor1.jpg"
import course2 from "./../../../assets/premium/tutor2.jpg"
import course3 from "./../../../assets/premium/tutor3.jpg"

const CourseCard = () => {
    return (
        <>
            <div className=" container md:mx-auto mx-4 pb-16 pt-12">
                <SectionTitle sectionName="Premium Course" />

                <div className="grid md:grid-cols-4 grid-cols-1 gap-4 pt-9">
                    <div className="max-w-[320px] space-y-2 rounded-lg border-b-[3px] border-l border-r-2 border-t hover:border-b-[#0084ff] hover:border-l-[#005eb6] hover:border-r-[#0084ff] hover:border-t-[#005eb6] bg-white py-4 pl-4 shadow-sm hover:shadow-2xl transition-all duration-200 dark:bg-[#18181B]">
                        <div className="flex items-center justify-between">
                            <h1 className="w-[55%] text-2xl font-bold tracking-wider text-sky-900 dark:text-[#6aa4d3] md:text-3xl"><sup className="text-2xl font-extrabold">৳</sup>২০০</h1>
                            <div className=" w-[45%] rounded-bl-full rounded-tl-full bg-gradient-to-r from-blue-300 to-sky-400 px-4 py-2 md:px-6 md:py-3">
                                <h3 className="font-semibold tracking-wider text-white md:text-xl">Premium</h3>
                            </div>
                        </div>
                        <div className="pr-4">
                            <img width={350} height={190} className="h-[190px] w-full rounded-md bg-gray-400" src={course1} alt="premium course" />
                        </div>
                        <div>
                            <h2 className="font-medium text-slate-800 sm:text-lg md:text-xl dark:text-white/90">Videos Course</h2>
                            <p className="text-sm font-medium text-slate-600">Mohammad Saiful Arafat</p>
                        </div>
                        <div className="mr-4 text-center">
                            <button className="px-5 rounded-full bg-gradient-to-r from-[#52b7ff] to-[#0084ff] py-1 text-lg font-semibold tracking-wider text-white">Purchase</button>
                        </div>
                    </div>
                    <div className="max-w-[320px] space-y-2 rounded-lg border-b-[3px] border-l border-r-2 border-t hover:border-b-[#0084ff] hover:border-l-[#005eb6] hover:border-r-[#0084ff] hover:border-t-[#005eb6] bg-white py-4 pl-4 shadow-sm hover:shadow-2xl transition-all duration-200 dark:bg-[#18181B]">
                        <div className="flex items-center justify-between">
                            <h1 className="w-[55%] text-2xl font-bold tracking-wider text-sky-900 dark:text-[#289DFF] md:text-3xl"><sup className="text-2xl font-extrabold">৳</sup>২০০</h1>
                            <div className=" w-[45%] rounded-bl-full rounded-tl-full bg-gradient-to-r from-[#52b7ff] to-[#0084ff] px-4 py-2 md:px-6 md:py-3">
                                <h3 className="font-semibold tracking-wider text-white md:text-xl">Premium</h3>
                            </div>
                        </div>
                        <div className="pr-4">
                            <img width={350} height={190} className="h-[190px] w-full rounded-md bg-gray-400" src={course2} alt="premium course" />
                        </div>
                        <div>
                            <h2 className="font-medium text-slate-800 sm:text-lg md:text-xl dark:text-white/90">Videos Course</h2>
                            <p className="text-sm font-medium text-slate-600">Mohammad Saiful Arafat</p>
                        </div>
                        <div className="mr-4 text-center">
                            <button className="px-5 rounded-full bg-gradient-to-r from-[#52b7ff] to-[#0084ff] py-1 text-lg font-semibold tracking-wider text-white">Purchase</button>
                        </div>
                    </div>
                    <div className="max-w-[320px] space-y-2 rounded-lg border-b-[3px] border-l border-r-2 border-t hover:border-b-[#0084ff] hover:border-l-[#005eb6] hover:border-r-[#0084ff] hover:border-t-[#005eb6] bg-white py-4 pl-4 shadow-sm hover:shadow-2xl transition-all duration-200 dark:bg-[#18181B]">
                        <div className="flex items-center justify-between">
                            <h1 className="w-[55%] text-2xl font-bold tracking-wider text-sky-900 dark:text-[#289DFF] md:text-3xl"><sup className="text-2xl font-extrabold">৳</sup>২০০</h1>
                            <div className=" w-[45%] rounded-bl-full rounded-tl-full bg-gradient-to-r from-[#52b7ff] to-[#0084ff] px-4 py-2 md:px-6 md:py-3">
                                <h3 className="font-semibold tracking-wider text-white md:text-xl">Premium</h3>
                            </div>
                        </div>
                        <div className="pr-4">
                            <img width={350} height={190} className="h-[190px] w-full rounded-md bg-gray-400" src={course3} alt="premium course" />
                        </div>
                        <div>
                            <h2 className="font-medium text-slate-800 sm:text-lg md:text-xl dark:text-white/90">Videos Course</h2>
                            <p className="text-sm font-medium text-slate-600">Mohammad Saiful Arafat</p>
                        </div>
                        <div className="mr-4 text-center">
                            <button className="px-5 rounded-full bg-gradient-to-r from-[#52b7ff] to-[#0084ff] py-1 text-lg font-semibold tracking-wider text-white">Purchase</button>
                        </div>
                    </div>
                    <div className="max-w-[320px] space-y-2 rounded-lg border-b-[3px] border-l border-r-2 border-t hover:border-b-[#0084ff] hover:border-l-[#005eb6] hover:border-r-[#0084ff] hover:border-t-[#005eb6] bg-white py-4 pl-4 shadow-sm hover:shadow-2xl transition-all duration-200 dark:bg-[#18181B]">
                        <div className="flex items-center justify-between">
                            <h1 className="w-[55%] text-2xl font-bold tracking-wider text-sky-900 dark:text-[#289DFF] md:text-3xl"><sup className="text-2xl font-extrabold">৳</sup>২০০</h1>
                            <div className=" w-[45%] rounded-bl-full rounded-tl-full bg-gradient-to-r from-[#52b7ff] to-[#0084ff] px-4 py-2 md:px-6 md:py-3">
                                <h3 className="font-semibold tracking-wider text-white md:text-xl">Premium</h3>
                            </div>
                        </div>
                        <div className="pr-4">
                            <img width={350} height={190} className="h-[190px] w-full rounded-md bg-gray-400" src={course2} alt="premium course" />
                        </div>
                        <div>
                            <h2 className="font-medium text-slate-800 sm:text-lg md:text-xl dark:text-white/90">Videos Course</h2>
                            <p className="text-sm font-medium text-slate-600">Mohammad Saiful Arafat</p>
                        </div>
                        <div className="mr-4 text-center">
                            <button className="px-5 rounded-full bg-gradient-to-r from-[#52b7ff] to-[#0084ff] py-1 text-lg font-semibold tracking-wider text-white">Purchase</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CourseCard;