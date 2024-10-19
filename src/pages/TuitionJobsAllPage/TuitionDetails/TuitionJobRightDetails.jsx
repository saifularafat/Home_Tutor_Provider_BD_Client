import { BiSolidTimer } from "react-icons/bi";
import { FaGenderless } from "react-icons/fa";
import { FaSchoolFlag } from "react-icons/fa6";
import { GiSandsOfTime } from "react-icons/gi";

const TuitionJobRightDetails = () => {
    return (
        <>
            {/* Table section */}
            {/* first table start */}
            <div className="space-y-6">
                <div className="bg-slate-200 rounded-lg" >
                    <div className="w-full h-64">
                        <div className="flex items-center justify-between text-left px-5 py-3 bg-sky-200 rounded-tl-xl rounded-tr-xl">
                            <h6 className="text-xl font-bold text-slate-700 text-left"> Class</h6>
                            <h6 className="text-xl font-bold text-slate-700 justify-start"> Subject</h6>
                        </div>
                        <div className="flex items-center justify-between border-b-[1px] px-5 border-slate-300 py-3 rounded-br-md rounded-bl-md">
                            <h6 className=" font-normal tracking-wide text-slate-500"> Class-12</h6>
                            <h6 className=" font-medium tracking-wide text-[#4B5563]"> Accounting,</h6>
                        </div>
                        <div className="flex items-center justify-between border-b-[1px] px-5 border-slate-300 py-3 rounded-br-md rounded-bl-md">
                            <h6 className=" font-normal tracking-wide text-slate-500"> 1 to 5</h6>
                            <h6 className=" font-medium tracking-wide text-[#4B5563]"> All</h6>
                        </div>
                    </div>
                </div >
                {/* first table end */}

                {/* second table start*/}
                <div className="bg-slate-100 rounded-lg" >
                    <div className="w-full h-52 p-5">
                        <h2 className="text-xl font-medium p2-4">More Information</h2>
                        <div className="flex items-center">
                            <div className="w-1/2 flex items-center justify-between">
                                <div className="py-3">
                                    <div className="flex items-center gap-x-2">
                                        <GiSandsOfTime className=" text-blue-500 text-[26px]" />
                                        <div>
                                            <span className="text-base font-semibold text-slate-800">Duration:</span>
                                            <p className="font-normal text-base text-slate-700">Negotiable <span className="text-base font-semibold text-slate-700">Hour</span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className=" py-3">
                                    <div className="flex items-center gap-x-2">
                                        <FaGenderless className=" text-green-500 text-[26px]" />
                                        <div>
                                            <span className="text-base font-semibold text-slate-800">Student Gender:</span>
                                            <p className="font-normal text-base text-slate-700">Female</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <div className="w-1/2 flex items-center justify-between">
                                <div className=" py-3">
                                    <div className="flex items-center gap-x-2">
                                        <FaSchoolFlag className=" text-orange-500 text-[26px]" />
                                        <div>
                                            <span className="text-base font-semibold text-slate-800">Student School:</span>
                                            <p className="font-normal text-base text-slate-700">N/A <span className="text-base font-semibold text-slate-700">Hour</span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className=" py-3">
                                    <div className="flex items-center gap-x-2">
                                        <BiSolidTimer className=" text-red-600 text-[26px]" />
                                        <div>
                                            <span className="text-base font-semibold text-slate-800">Time:</span>
                                            <p className="font-normal text-base text-slate-700">Negotiable</p>
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