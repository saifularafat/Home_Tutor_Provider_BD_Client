import { FaCalendarAlt, FaFilter } from "react-icons/fa";
import { FaMedal, FaMedium, FaMoneyBillWave } from "react-icons/fa6";
import { IoDuplicateSharp } from "react-icons/io5";
import { TbGenderAndrogyne } from "react-icons/tb";

const TuitionJobLeftDetails = () => {
    return (
        <div className="col-span-2">
            <h3 className="text-2xl font-bold pb-3 text-slate-900">Adabor, Mohonpur Haq Saheber Gerej, Dhaka</h3>
            <div className="flex items-center justify-between">
                <div className="flex items-center justify-between">
                    <div className=" py-3">
                        <div className="flex items-center gap-x-2">
                            <FaMedal className="transform rotate-180 text-orange-500 text-xl" />
                            <div>
                                <span className="text-base font-semibold text-slate-500">Tuition Code:</span>
                                <p className="font-normal text-base text-slate-600">Dha-2728</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-between">
                    <div className=" py-3">
                        <div className="flex items-center gap-x-2">
                            <TbGenderAndrogyne className="transform rotate-90 text-pink-500 text-xl" />
                            <div>
                                <span className="text-base font-semibold text-slate-500">Gender:</span>
                                <p className="font-normal text-base text-slate-600">Female</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-between">
                    <div className=" py-3">
                        <div className="flex items-center gap-x-2">
                            <FaMedium className=" text-orange-500 text-xl" />
                            <div>
                                <span className="text-base font-semibold text-slate-500">Medium:</span>
                                <p className="font-normal text-base text-slate-600">Bangla Medium</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-between">
                <div className="flex items-center justify-between">
                    <div className=" py-3">
                        <div className="flex items-center gap-x-2">
                            <FaCalendarAlt className=" text-orange-600 text-xl" />
                            <div>
                                <span className="text-base font-semibold text-slate-500">Per Week:</span>
                                <p className="font-normal text-base text-slate-600">4 Days</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-between">
                    <div className=" py-3">
                        <div className="flex items-center gap-x-2">
                            <FaMoneyBillWave className=" text-orange-500 text-xl" />
                            <div>
                                <span className="text-base font-semibold text-slate-500">Salary:</span>
                                <p className="font-normal text-base text-slate-600">4-5k</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-between">
                    <div className=" py-3">
                        <div className="flex items-center gap-x-2">
                            <IoDuplicateSharp className="transform rotate-180 text-orange-500 text-xl" />
                            <div>
                                <span className="text-base font-semibold text-slate-500">Category:</span>
                                <p className="font-normal text-base text-slate-600">Students Home</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-8">
                <p className="italic font-normal">Comment: <span className="font-semibold text-slate-700">Experience Tutor Needed.</span></p>
            </div>
        </div>
    );
};

export default TuitionJobLeftDetails;