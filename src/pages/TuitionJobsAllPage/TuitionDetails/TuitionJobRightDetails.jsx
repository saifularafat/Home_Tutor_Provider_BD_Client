import { BiSolidTimer } from "react-icons/bi";
import { FaGenderless } from "react-icons/fa";
import { FaSchoolFlag } from "react-icons/fa6";
import { GiSandsOfTime } from "react-icons/gi";
import Loading from "../../../Components/Loading/Loading";

const TuitionJobRightDetails = (tuition, isLoading) => {
    const { subject, duration, studentGender, studentSchool, fixedTime } = tuition?.tuition;

    if (isLoading.isLoading) {
        return <Loading />;
    }
    return (
        <>
            {/* Table section */}
            {/* first table start */}
            <div className="space-y-6">
                <div className="bg-slate-200 rounded-lg" >
                    <div className="w-full md:h-64">
                        <div className="flex items-center justify-between text-left md:px-5 px-3 py-2 md:py-3 bg-sky-200 rounded-tl-xl rounded-tr-xl">
                            <h6 className="md:text-xl text-base md:font-bold font-semibold tracking-wide text-slate-700 text-left"> Class</h6>
                            <h6 className="md:text-xl text-base md:font-bold font-semibold tracking-wide text-slate-700 justify-start"> Subject</h6>
                        </div>
                        <div className="flex items-center justify-between border-b-[1px] px-5 border-slate-300 py-3 rounded-br-md rounded-bl-md">
                            <h6 className="md:font-medium font-normal text-sm tracking-wide text-slate-500"> {tuition?.tuition?.className}</h6>
                            <h6 className="md:font-medium font-normal text-sm tracking-wide text-[#4B5563]"> {subject}</h6>
                        </div>
                        <div className="flex items-center justify-between border-b-[1px] px-5 border-slate-300 py-3 rounded-br-md rounded-bl-md">
                            <h6 className="md:font-medium font-normal text-sm tracking-wide text-slate-500"> 1 to 5</h6>
                            <h6 className="md:font-medium font-normal text-sm tracking-wide text-[#4B5563]"> All</h6>
                        </div>
                    </div>
                </div >
                {/* first table end */}

                {/* second table start*/}
                <div className="bg-slate-100 rounded-lg md:pb-6" >
                    <div className="w-full md:h-52 md:p-5 p-2">
                        <h2 className="text-xl font-medium md:p-4 p-2">More Information</h2>
                        <div className="flex items-center">
                            <div className="w-1/2 flex items-center justify-between">
                                <div className="py-3">
                                    <div className="flex items-center gap-x-2">
                                        <GiSandsOfTime className=" text-blue-500 md:text-[26px] text-xl" />
                                        <div>
                                            <span className="md:text-base text-sm md:font-semibold font-medium text-slate-800">Duration:</span>
                                            <p className="font-normal md:text-base text-sm text-slate-700">{duration}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="py-3">
                                    <div className="flex items-center gap-x-2">
                                        <FaGenderless className=" text-green-500 md:text-[26px] text-xl" />
                                        <div>
                                            <span className="md:text-base text-sm md:font-semibold font-medium text-slate-800">Student Gender:</span>
                                            <p className="font-normal md:text-base text-sm text-slate-700">{studentGender}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center pb-8">
                            <div className="w-1/2 flex items-center justify-between">
                                <div className="py-3">
                                    <div className="flex items-center gap-x-2">
                                        <FaSchoolFlag className=" text-orange-500 md:text-[26px] text-xl" />
                                        <div>
                                            <span className="md:text-base text-sm md:font-semibold font-medium text-slate-800">Student School:</span>
                                            <p className="font-normal md:text-sm text-xs text-slate-600">{studentSchool}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className=" py-3">
                                    <div className="flex items-center gap-x-2">
                                        <BiSolidTimer className=" text-red-600 md:text-[26px] text-xl" />
                                        <div>
                                            <span className="md:text-base text-sm md:font-semibold font-medium text-slate-800">Fixed Time:</span>
                                            <p className="md:text-base text-sm md:font-semibold font-medium text-slate-700">{fixedTime}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
                {/* second table end*/}
            </div>
        </>
    );
};

export default TuitionJobRightDetails;