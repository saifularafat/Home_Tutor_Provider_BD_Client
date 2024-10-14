import { FaCalendarAlt } from "react-icons/fa";
import { FaMedal, FaMedium, FaMoneyBillWave } from "react-icons/fa6";
import { IoDuplicateSharp } from "react-icons/io5";
import { TbGenderAndrogyne } from "react-icons/tb";

const TuitionJobCard = () => {
    return (
        <>
            <div className="grid grid-cols-4 gap-5 py-12">
                <div className="col-span-2  shadow-md hover:shadow-xl hover:shadow-sky-100 border border-slate-100 rounded-md p-5">
                    <h5 className="text-lg font-semibold pb-3">Banasree, Rampura, Dhaka, Dhaka</h5>
                    {/* first step */}
                    <div className="px-4 flex items-center justify-between">
                        <div className="flex items-center justify-between">
                            <div className=" py-3">
                                <div className="flex items-center gap-x-2">
                                    <FaMedal className="transform rotate-180 text-orange-500 text-lg" />
                                    <span className="text-base font-semibold text-slate-500">Tuition Code:</span>
                                </div>
                                <p className="font-normal text-base text-slate-600">Dha-2728</p>
                            </div>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className=" py-3">
                                <div className="flex items-center gap-x-2">
                                    <TbGenderAndrogyne className="transform rotate-90 text-pink-500 text-2xl" />
                                    <span className="text-base font-semibold text-slate-500">Gender:</span>
                                </div>
                                <p className="font-normal text-base text-slate-600">Female</p>
                            </div>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className=" py-3">
                                <div className="flex items-center gap-x-2">
                                    <FaMedium className=" text-orange-500 text-2xl" />
                                    <span className="text-base font-semibold text-slate-500">Medium:</span>
                                </div>
                                <p className="font-normal text-base text-slate-600">Bangla Medium</p>
                            </div>
                        </div>
                    </div>
                    {/* second step */}
                    <div className="px-4 flex items-center justify-between">
                        <div className="flex items-center justify-between">
                            <div className=" py-3">
                                <div className="flex items-center gap-x-2">
                                    <IoDuplicateSharp className="transform rotate-180 text-orange-500 text-lg" />
                                    <span className="text-base font-semibold text-slate-500">Category:</span>
                                </div>
                                <p className="font-normal text-base text-slate-600">Students Home</p>
                            </div>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className=" py-3">
                                <div className="flex items-center gap-x-2">
                                    <FaCalendarAlt className=" text-orange-500 text-lg" />
                                    <span className="text-base font-semibold text-slate-500">Per Week:</span>
                                </div>
                                <p className="font-normal text-base text-slate-600">4 Days</p>
                            </div>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className=" py-3">
                                <div className="flex items-center gap-x-2">
                                    <FaMoneyBillWave className=" text-orange-500 text-lg" />
                                    <span className="text-base font-semibold text-slate-500">Salary:</span>
                                </div>
                                <p className="font-normal text-base text-slate-600">Bangla Medium</p>
                            </div>
                        </div>
                    </div>
                    {/* Table section */}
                    <div>
                        <table className="">
                            <thead className="border-2 text-center p-5 w-full">
                                <th>Class</th>
                                <th>Subject</th>
                            </thead>
                        </table>
                    </div>
                </div>
                <div className="col-span-2 shadow-md hover:shadow-xl hover:shadow-sky-100 border border-slate-100 rounded-md px-3 py-5">
                    <h5 className="text-lg font-semibold">Banasree, Rampura, Dhaka, Dhaka</h5>
                </div>
            </div>
        </>
    );
};

export default TuitionJobCard;