import { FaLocationDot } from "react-icons/fa6";
import PageTitleShow from "../../../Components/PageTitleShow/PageTitleShow";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Loading from "../../../Components/Loading/Loading";
import { serverApiUrl } from "../../../../ApiSecret";
import axios from "axios";
import allTutor from "../../../api/allTutor";

const TutorProfile = () => {
    const [tutors, refetch, isLoading] = allTutor()
    // const [tutorData, setTutorData] = useState([]);
    // const [loading, setLoading] = useState(true);
    console.log(tutors);
    // useEffect(() => {
    //     // Fetch data from the API
    //     axios
    //         .get(`${serverApiUrl}/api/users/all-tutor`)
    //         .then((response) => {
    //             setTutorData(response.data.payload.tutors);
    //             setLoading(false);
    //         }) 
    //         .catch((error) => {
    //             console.error("Error fetching data:", error.message);
    //             setLoading(false);
    //         });
    // }, []);

    if (isLoading) {
        return <Loading />;
    }

    return (
        <>
            <PageTitleShow currentPage="Tutor Profile" />
            <div className="md:max-w-5xl mx-auto md:py-12 py-6">
                <div className="grid md:grid-cols-3 grid-cols-1 md:gap-8 gap-5 mx-3 md:mx-0">
                    {tutors.map((tutor) => (
                        <div
                            key={tutor._id}
                            className="col-span-1 flex flex-col items-center justify-center space-y-4 rounded-xl bg-white p-6 shadow-lg hover:shadow-2xl hover:shadow-sky-300 transition-all duration-200 shadow-blue-400 dark:bg-[#18181B]"
                        >
                            <div className="group relative" title={tutor?.name}>
                                <img
                                    width={110}
                                    height={110}
                                    className="h-[110px] w-[110px] rounded-full bg-slate-500 object-cover"
                                    src={tutor.image || "https://via.placeholder.com/110"} // Fallback if no image
                                    alt={tutor.name || "Tutor"}
                                />
                                <span className="absolute bottom-3 right-0 h-5 w-5 rounded-full border-[3px] border-white bg-green-500 dark:border-[#18181B]"></span>
                                <span className="absolute bottom-3 right-0 h-5 w-5 animate-ping rounded-full bg-green-500"></span>
                            </div>
                            <div className="space-y-1 text-center">
                                <h1 className="md:text-2xl text-xl font-bold text-[#0369A1]">
                                    {tutor.name || "Unknown"}
                                </h1>
                                <div className="flex items-center justify-center gap-1">
                                    <FaLocationDot className="text-slate-600" />
                                    <span className="text-slate-600 font-medium">
                                        {tutor.address || "Location not available"}
                                    </span>
                                </div>
                            </div>
                            <p className="pb-2 text-center text-sm text-gray-500">
                                {tutor.bio || "No bio available"}
                            </p>
                            <Link
                                to={`/tutor-details/${tutor._id}`}
                                className="w-full text-center rounded-full py-2 text-[12px] font-semibold text-sky-700 ring-1 ring-sky-700 hover:bg-sky-700 hover:text-white sm:text-sm md:text-base"
                            >
                                View Profile
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default TutorProfile;
