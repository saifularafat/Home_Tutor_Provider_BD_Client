import { FaCalendarAlt } from "react-icons/fa";
import { FaMedal, FaMedium, FaMoneyBillWave } from "react-icons/fa6";
import { IoDuplicateSharp } from "react-icons/io5";
import { TbGenderAndrogyne } from "react-icons/tb";
import TuitionJobTabla from "./TuitionJobTabla";
import { Link } from "react-router-dom";

const TuitionJobCard = () => {
    return (
        <>
            <div className="grid grid-cols-4 gap-5 py-12">
                <div className="col-span-2 max-h-[500px] shadow-md hover:shadow-xl hover:shadow-sky-100 border border-slate-100 rounded-md p-5">
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
                                <p className="font-normal text-base text-slate-600">5k</p>
                            </div>
                        </div>
                    </div>
                    {/* Table section */}
                    <div className="mx-8 bg-[#F3F4F6] rounded-tl-lg rounded-tr-lg">
                        <TuitionJobTabla />
                    </div>

                    <div className="py-6">
                        <p className="font-medium text-slate-700">Create: <span className="font-normal"> 20 hours ago</span>
                            <br />
                            <span className="font-normal">Comment:</span> <span className="font-medium text-slate-700 italic">Public Versity</span></p>
                    </div>
                    <div className="flex justify-end">
                    <Link to="">
                        <button className="group relative z-20 h-10 w-32 rounded-lg overflow-hidden border-y-4 border-sky-950 bg-sky-700 text-xl text-white duration-500"><span className="">View Detail</span><span className="absolute inset-0 z-10 flex items-center justify-center text-white opacity-0 duration-100 ease-out group-hover:opacity-100 group-hover:duration-1000 ">Job Detail</span><span className="absolute inset-0 -translate-y-full bg-sky-950 group-hover:translate-y-0 group-hover:duration-1000"></span><span className="absolute inset-0 translate-y-full bg-sky-950 group-hover:translate-y-0 group-hover:duration-1000"></span><span className="absolute inset-0 translate-x-full bg-sky-950 delay-100 duration-1000 group-hover:translate-x-0 group-hover:delay-300"></span><span className="absolute inset-0 -translate-x-full bg-sky-950 delay-100 duration-1000 group-hover:translate-x-0 group-hover:delay-300"></span></button>
                    </Link>
                    </div>
                </div>
                <div className="col-span-2 max-h-[500px] shadow-md hover:shadow-xl hover:shadow-sky-100 border border-slate-100 rounded-md p-5">
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
                                <p className="font-normal text-base text-slate-600">4-5k </p>
                            </div>
                        </div>
                    </div>
                    {/* Table section */}
                    <div className="mx-8 bg-[#F3F4F6] rounded-tl-lg rounded-tr-lg">
                        <TuitionJobTabla />
                    </div>

                    <div className="py-6">
                        <p className="font-medium text-slate-700">Create: <span className="font-normal"> 20 hours ago</span>
                            <br />
                            <span className="font-normal">Comment:</span> <span className="font-medium text-slate-700 italic">Public Versity</span></p>
                    </div>
                    <div className="flex justify-end">
                    <Link to="">
                        <button className="group relative z-20 h-10 w-32 rounded-lg overflow-hidden border-y-4 border-sky-950 bg-sky-700 text-xl text-white duration-500"><span className="">View Detail</span><span className="absolute inset-0 z-10 flex items-center justify-center text-white opacity-0 duration-100 ease-out group-hover:opacity-100 group-hover:duration-1000 ">Job Detail</span><span className="absolute inset-0 -translate-y-full bg-sky-950 group-hover:translate-y-0 group-hover:duration-1000"></span><span className="absolute inset-0 translate-y-full bg-sky-950 group-hover:translate-y-0 group-hover:duration-1000"></span><span className="absolute inset-0 translate-x-full bg-sky-950 delay-100 duration-1000 group-hover:translate-x-0 group-hover:delay-300"></span><span className="absolute inset-0 -translate-x-full bg-sky-950 delay-100 duration-1000 group-hover:translate-x-0 group-hover:delay-300"></span></button>
                    </Link>
                    </div>
                </div>
            </div>Medium
        </>
    );
};

export default TuitionJobCard;