import { Link, useParams } from "react-router-dom";
import PageTitleShow from "../../../Components/PageTitleShow/PageTitleShow";
import EducationalInformation from "./EducationalInformation";
import PersonalInformation from "./PersonalInformation";
import PreferredTutoringClasses_Courses from "./PreferredTutoringClasses_Courses";
import TutoringInformation from "./TutoringInformation";
import Reviews from "../../../Share/Reviews/Reviews";
import { singleTutor } from "../../../api/allTutor";
import Loading from "../../../Components/Loading/Loading";
import NoJobFound from "../../../Components/NoFoundData/NoFoundData";
import ErrorComponent from "../../../Components/ErrorComponent/ErrorComponent";

const TutorProfileDetails = () => {
    const { id } = useParams();
    const { tutors, refetch, isLoading, isError } = singleTutor(id);
    console.log('object =====>', tutors);
    if (isLoading) {
        return <Loading />;
    }
    if (isError) {
        return <ErrorComponent message="Error fetching tutor information details." />;
    }

    if (!tutors) {
        return <NoJobFound message="No tutor found." />;
    }

    return (
        <div>
            <div className="bg-blue-100 md:py-10 py-5 px-2 md:px-0">
                <PageTitleShow currentPage="Tutor Details |" />
                {/* tutor details tutor info */}
                <div className="md:max-w-4xl mx-auto md:px-8 px-3 md:pt-10 pt-4 pb-4 bg-white rounded-xl">
                    <div className="">
                        <img width={100} height={100}
                            className="h-[150px] w-[150px] mx-auto rounded-full border-4 border-[#056294] bg-[#1779af] dark:border-[#18181B]"
                            src={tutors?.user?.image || "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2080&auto=format&fit=crop"}
                            alt="tutor photo" />
                    </div>
                    <div className="text-center md:py-6 py-3">
                        <h2 className="md:text-3xl text-xl font-bold uppercase bg-gradient-to-r from-[#064668] to-[#1e78c2a9] bg-clip-text text-transparent">
                            {tutors?.user?.name}
                        </h2>
                        <p className="text-slate-500">
                            Tutor ID: <span className="font-semibold text-slate-500">
                                {tutors?.user?.userId}</span></p>
                        <div className="md:pt-4 pt-2">
                            <p className="md:py-2 md:px-6 md:w-24 w-16 px-3 py-1 mx-auto rounded-full text-center bg-sky-500 text-white">Active</p>
                        </div>
                    </div>
                    <div className="text-center md:pt-3">
                        <h3 className="md:text-2xl text-xl font-semibold text-gray-800">Tejgaoun collage</h3>
                        <p className="md:text-base text-sm font-medium text-slate-700">Developer </p>
                    </div>


                    <TutoringInformation tutors={tutors} />
                    <EducationalInformation tutors={tutors} />
                    <PreferredTutoringClasses_Courses tutors={tutors} />
                    <PersonalInformation tutors={tutors} />
                    <div className="flex items-end justify-end">
                        <Link to={`/tutor-hire-request/${id}`}>
                            <button className="md:py-2 py-[5px] md:w-40 w-auto md:h-12 md:px-6 px-3 md:mb-4 mb-2 md:mt-6 mt-3 rounded-xl text-base tracking-wider font-medium bg-sky-700  hover:bg-sky-600 duration-300 text-white flex items-center justify-center overflow-hidden hover:overflow-visible relative group"><svg viewBox="0 0 1024 1024" className="icon rotate-45 group-hover:duration-700 absolute w-12 -translate-x-full translate-y-full scale-0 group-hover:scale-100 group-hover:translate-x-8 group-hover:-translate-y-8 duration-150" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g strokeWidth="0"></g><g strokeLinecap="round" strokeLinejoin="round"></g><g ><path d="M244.5 662l268.1-446.4 268 446.4z" fill="#9ED5E4"></path><path d="M780.6 676.2H244.5c-5.3 0-10.2-2.7-12.8-7.1s-2.6-9.8 0-14.3l268.1-446.3c2.6-4.4 7.5-7.1 12.8-7.1 5.3 0 10.2 2.7 12.8 7.1l268.1 446.3c2.6 4.4 2.6 9.8 0 14.3-2.7 4.4-7.6 7.1-12.9 7.1z m-510.5-28.5H755L512.6 244.2 270.1 647.7z" fill="#154B8B"></path><path d="M512.6 23s129 131.7 129 352.4-129 376-129 376-129-155.3-129-376S512.6 23 512.6 23z" fill="#F7F9F9"></path><path d="M512.6 765.7c-4.5 0-8.8-2-11.6-5.4-1.4-1.6-33.7-40.9-66.4-108.1-30.1-61.9-65.9-160.2-65.9-276.8 0-116.9 36-208.8 66.1-265.4 32.8-61.6 65.5-95.3 66.9-96.7 2.8-2.9 6.7-4.5 10.8-4.5 4.1 0 8 1.6 10.8 4.5 1.4 1.4 34.1 35.1 66.9 96.7 30.2 56.6 66.1 148.6 66.1 265.4 0 116.6-35.8 214.9-65.9 276.8-32.6 67.2-65 106.5-66.4 108.1-2.7 3.4-6.9 5.4-11.4 5.4z m0-720.5c-11.9 14.5-32 41.3-51.8 78.8-28.4 53.6-62.4 140.8-62.4 251.5 0 111.4 34.3 205.4 63.1 264.7 19.6 40.3 39.1 70.2 51.1 86.9 12-16.9 31.9-47.2 51.5-87.8 28.6-59.1 62.7-152.9 62.7-263.9 0-110.7-33.9-197.8-62.4-251.5-19.9-37.4-40-64.3-51.8-78.7z" fill="#154B8B"></path><path d="M447.6 278.9a65 62.4 0 1 0 130 0 65 62.4 0 1 0-130 0Z" fill="#9ED5E4"></path><path d="M512.6 355.6c-44 0-79.8-34.4-79.8-76.7s35.8-76.7 79.8-76.7 79.8 34.4 79.8 76.7-35.9 76.7-79.8 76.7z m0-124.8c-27.6 0-50.1 21.6-50.1 48.2s22.5 48.2 50.1 48.2 50.1-21.6 50.1-48.2-22.5-48.2-50.1-48.2z" fill="#154B8B"></path><path d="M570 860.9c0 13 1.5-7.5-57.4 141.4-56.2-142.1-57.4-128.4-57.4-141.4 0-36 25.7-65.2 57.4-65.2s57.4 29.2 57.4 65.2z" fill="#9ED5E4"></path><path d="M512.5 1016.6c-6.2 0-11.7-3.7-13.9-9.2-31.2-78.9-45.6-110.1-51.8-123.3-5.4-11.6-6.6-14.3-6.6-23.1 0-43.8 32.4-79.5 72.2-79.5 39.8 0 72.2 35.7 72.2 79.5v0.9c0 7.7-1 9.9-5.3 19.1-5.8 12.4-19.5 41.6-53.1 126.5-2 5.4-7.5 9.1-13.7 9.1z m0-206.7c-23.5 0-42.6 22.9-42.6 51 0 2.7 0 2.7 4.1 11.5 5.7 12.3 16.5 35.7 38.5 90.1 24-59.5 34.8-82.6 39.9-93.4 1.2-2.5 2.3-4.9 2.7-5.9v-2.3c0-28.1-19.1-51-42.6-51z" fill="#154B8B"></path></g></svg><span className="duration-500">Request Tutor</span></button>
                        </Link>
                    </div>
                </div>
            </div>
            {/* Ratings and Reviews */}
            <Reviews />
        </div>
    );
};

export default TutorProfileDetails;