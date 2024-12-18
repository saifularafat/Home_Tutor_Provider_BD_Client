import { FaCalendarAlt } from "react-icons/fa";
import { FaMedal, FaMedium, FaMoneyBillWave } from "react-icons/fa6";
import { IoDuplicateSharp } from "react-icons/io5";
import { TbGenderAndrogyne } from "react-icons/tb";
import TuitionJobTabla from "./TuitionJobTabla";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import JobCategorySliderTabs from "./JobCategorySliderTabs";

const TuitionJobCard = () => {
    const { id } = useParams();
    const [searchText, setSearchText] = useState("");

    const handlerSearch = () => {
        console.log(searchText);
    }
    return (
        <>
            <div className="md:py-3">
                {/* search and filter section */}
                <div className="grid md:grid-cols-6 grid-cols-1 contain-content gap-5 rounded-lg md:py-6 py-3 md:pl-4 px-2 ">
                    <div className="md:col-span-2 col-span-1 md:px-6 px-3 md:py-0 py-2 rounded-xl md:shadow-xl shadow-md flex items-center gap-2">
                        <input
                            onChange={(e) => setSearchText(e.target.value)}
                            type="text"
                            placeholder="Search Your Tuition Code"
                            className=" md:px-9 px-2 md:py-[10px] py-2 placeholder:text-slate-300 text-slate-500 border border-blue-200 rounded-tl-md rounded-bl-md focus:outline-none focus:outline-blue-400 focus:outline-double" />
                        <button
                            onClick={handlerSearch}
                            className=" py-[9px] md:px-3 px-2 bg-sky-600 text-white rounded-br-md rounded-tr-md text-lg tracking-wider">
                            Search
                        </button>
                    </div>

                    {/* Job Category Slider Tabs section */}
                    <div className="md:col-span-4 col-span-1 w-full shadow-xl rounded-xl flex items-center md:gap-2 gap-1 md:py-6 py-2 md:px-8 md:mr-6">
                        <JobCategorySliderTabs />
                    </div>
                </div>
            </div>

            {/* tuition job cart*/}
            <div className="grid md:grid-cols-4 grid-cols-1 md:gap-5 md:space-y-0 space-y-5 md:mx-0 mx-2 md:py-12 py-5">
                {/* FIRST CART job tuition cart  */}
                <div className="md:col-span-2 col-span-1 md:max-h-[500px] shadow-md hover:shadow-xl hover:shadow-sky-100 border border-slate-100 rounded-md md:p-5 p-2">
                    <h5 className="md:text-xl text-lg font-semibold md:pb-3 pb-1">Banasree, Rampura, Dhaka, Dhaka</h5>
                    {/* first step */}
                    <div className="md:block hidden">
                        <div className="md:px-4 md:flex items-center justify-between">
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
                        <div className="px-4 md:flex items-center justify-between">
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
                    </div>
                    <div className="md:hidden flex items-center justify-between">
                        <div className="md:px-4 md:flex items-center justify-between">
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
                        <div className="px-4 md:flex items-center justify-between">
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
                    </div>

                    {/* Table section */}
                    <div className="md:mx-8 bg-[#F3F4F6] rounded-tl-lg rounded-tr-lg">
                        <TuitionJobTabla />
                    </div>

                    <div className="md:py-6 py-3">
                        <p className="font-medium text-slate-700">Create: <span className="font-normal"> 20 hours ago</span>
                            <br />
                            <span className="font-normal">Comment:</span> <span className="font-medium text-slate-700 italic">Public Varsity</span></p>
                    </div>
                    {/* link button */}
                    <div className="flex justify-end">
                        <Link to={`/tuition-job-details/${id}`}>
                            <button className="group relative z-20 md:h-10 h-8 md:w-32 w-24 rounded-lg overflow-hidden border-y-4 border-sky-950 bg-sky-700 md:text-xl text-base text-white duration-500"><span className="">View Detail</span><span className="absolute inset-0 z-10 flex items-center justify-center text-white opacity-0 duration-100 ease-out group-hover:opacity-100 group-hover:duration-1000 ">Job Detail</span><span className="absolute inset-0 -translate-y-full bg-sky-950 group-hover:translate-y-0 group-hover:duration-1000"></span><span className="absolute inset-0 translate-y-full bg-sky-950 group-hover:translate-y-0 group-hover:duration-1000"></span><span className="absolute inset-0 translate-x-full bg-sky-950 delay-100 duration-1000 group-hover:translate-x-0 group-hover:delay-300"></span><span className="absolute inset-0 -translate-x-full bg-sky-950 delay-100 duration-1000 group-hover:translate-x-0 group-hover:delay-300"></span></button>
                        </Link>
                    </div>
                </div>
                {/* SECOND CART job tuition cart  */}
                <div className="md:col-span-2 col-span-1 md:max-h-[500px] shadow-md hover:shadow-xl hover:shadow-sky-100 border border-slate-100 rounded-md md:p-5 p-2">
                    <h5 className="md:text-xl text-lg font-semibold md:pb-3 pb-1">Banasree, Rampura, Dhaka, Dhaka</h5>
                    {/* first step */}
                    <div className="md:block hidden">
                        <div className="md:px-4 md:flex items-center justify-between">
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
                        <div className="px-4 md:flex items-center justify-between">
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
                    </div>
                    <div className="md:hidden flex items-center justify-between">
                        <div className="md:px-4 md:flex items-center justify-between">
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
                        <div className="px-4 md:flex items-center justify-between">
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
                    </div>

                    {/* Table section */}
                    <div className="md:mx-8 bg-[#F3F4F6] rounded-tl-lg rounded-tr-lg">
                        <TuitionJobTabla />
                    </div>

                    <div className="md:py-6 py-3">
                        <p className="font-medium text-slate-700">Create: <span className="font-normal"> 20 hours ago</span>
                            <br />
                            <span className="font-normal">Comment:</span> <span className="font-medium text-slate-700 italic">Public Varsity</span></p>
                    </div>
                    {/* link button */}
                    <div className="flex justify-end">
                        <Link to={`/tuition-job-details/${id}`}>
                            <button className="group relative z-20 md:h-10 h-8 md:w-32 w-24 rounded-lg overflow-hidden border-y-4 border-sky-950 bg-sky-700 md:text-xl text-base text-white duration-500"><span className="">View Detail</span><span className="absolute inset-0 z-10 flex items-center justify-center text-white opacity-0 duration-100 ease-out group-hover:opacity-100 group-hover:duration-1000 ">Job Detail</span><span className="absolute inset-0 -translate-y-full bg-sky-950 group-hover:translate-y-0 group-hover:duration-1000"></span><span className="absolute inset-0 translate-y-full bg-sky-950 group-hover:translate-y-0 group-hover:duration-1000"></span><span className="absolute inset-0 translate-x-full bg-sky-950 delay-100 duration-1000 group-hover:translate-x-0 group-hover:delay-300"></span><span className="absolute inset-0 -translate-x-full bg-sky-950 delay-100 duration-1000 group-hover:translate-x-0 group-hover:delay-300"></span></button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TuitionJobCard;