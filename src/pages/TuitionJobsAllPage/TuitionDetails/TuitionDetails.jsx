import { Link, useParams } from "react-router-dom";
import PageTitleShow from "../../../Components/PageTitleShow/PageTitleShow";
import TuitionJobLeftDetails from "./TuitionJobLeftDetails";
import TuitionJobRightDetails from "./TuitionJobRightDetails";
import HirePageRequestModel from "../../../Components/Model/HirePageRequestModel";
import { useState } from "react";
import { LuLink } from "react-icons/lu";
import { FaFacebookMessenger, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import allTuitionJobs from "../../../api/jobRequest";
import Loading from "../../../Components/Loading/Loading";

const TuitionDetails = () => {
    const [openModal, setOpenModal] = useState(false);
    const [openShareModal, setOpenShareModal] = useState(false);

    const { id } = useParams();

    const [tuitionJobs, refetch, isLoading] = allTuitionJobs();
    const tuition = tuitionJobs.find((job) => job?.slug === id)
    console.log(id, '=======> ', tuition);
    if (isLoading) {
        return <Loading />;
    }
    return (
        <div className="bg-blue-100 md:py-10 py-5">
            <PageTitleShow currentPage="Tuition Job Detail" />
            {/* tutor details tutor info */}
            <div className="md:max-w-6xl md:mx-auto mx-2 md:px-8 px-3 pt-5 md:pt-10 md:pb-4 pb-2 bg-white rounded-xl">
                <div className="grid md:grid-cols-4 grid-cols-1 md:gap-5">
                    <TuitionJobLeftDetails tuition={tuition} isLoading={isLoading}/>
                    <div className="md:col-span-2 col-span-1">
                        <TuitionJobRightDetails tuition={tuition} isLoading={isLoading}/>
                    </div>
                </div>
                <div className="md:w-1/2 w-full flex md:items-center justify-between">
                    <div className="flex items-center justify-between mt-5">
                        <button onClick={() => setOpenShareModal(true)} className="rounded-full border border-zinc-500 bg-slate-500 hover:bg-slate-600 px-5 py-[6px] hover:text-white text-white transition-all duration-200">
                            Share
                        </button>
                        <div onClick={() => setOpenShareModal(false)} className={`fixed z-[100] w-screen ${openShareModal ? 'visible opacity-100' : 'invisible opacity-0'} inset-0 grid place-items-center bg-black/20 backdrop-blur-sm duration-100 dark:bg-transparent`}>
                            <div onClick={(e_) => e_.stopPropagation()} className={`absolute md:w-1/4 w-full md:mx-0 mx-6 space-y-3 rounded-lg bg-white md:p-6 p-4 drop-shadow-lg dark:bg-zinc-900 dark:text-white ${openShareModal ? 'opacity-1 duration-300' : 'scale-110 opacity-0 duration-150'}`}>
                                <svg onClick={() => setOpenShareModal(false)} className="absolute right-3 top-3 w-6 cursor-pointer fill-zinc-600 dark:fill-white"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"><path d="M6.99486 7.00636C6.60433 7.39689 6.60433 8.03005 6.99486 8.42058L10.58 12.0057L6.99486 15.5909C6.60433 15.9814 6.60433 16.6146 6.99486 17.0051C7.38538 17.3956 8.01855 17.3956 8.40907 17.0051L11.9942 13.4199L15.5794 17.0051C15.9699 17.3956 16.6031 17.3956 16.9936 17.0051C17.3841 16.6146 17.3841 15.9814 16.9936 15.5909L13.4084 12.0057L16.9936 8.42059C17.3841 8.03007 17.3841 7.3969 16.9936 7.00638C16.603 6.61585 15.9699 6.61585 15.5794 7.00638L11.9942 10.5915L8.40907 7.00636C8.01855 6.61584 7.38538 6.61584 6.99486 7.00636Z"></path></svg>
                                <h1 className="pb-4 text-xl font-bold">Share This Job</h1>
                                <div className="flex items-center gap-4">
                                    <LuLink className="text-lg text-slate-600" />
                                    <Link to="">Copy Link</Link>
                                </div>
                                <div className="flex items-center gap-4">
                                    <FaWhatsapp className="text-lg text-green-500" />
                                    <Link to="">Whatsapp Link</Link>
                                </div>
                                <div className="flex items-center gap-4">
                                    <FaFacebookMessenger className="text-lg text-blue-500" />
                                    <Link to="">Messenger Link</Link>
                                </div>
                                <div className="flex items-center gap-4">
                                    <MdEmail className="text-lg text-red-500" />
                                    <Link to="">Email Link</Link>
                                </div>
                                <div className="flex justify-end gap-2 pt-2">
                                    <button onClick={() => setOpenShareModal(false)} className="rounded-md border border-rose-600 px-2 py-1 text-rose-600 duration-150 hover:bg-rose-600 hover:text-white">
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="">
                        {/* modal */}
                        <HirePageRequestModel actionBtn="Apply" openModal={openModal} setOpenModal={setOpenModal} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TuitionDetails;