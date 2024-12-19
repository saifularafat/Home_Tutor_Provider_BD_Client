import HireTutorRequestFiled from "./HireTutorRequestFiled";
import TutorProfileCard from "./TutorProfileCard";

const TutorHireRequest = () => {
    return (
        <div className="bg-blue-100 md:py-16 py-8">
            <div className="container mx-auto md:py-20 pt-8 md:pt-0 pb-10 md:pb-0 px-3 md:px-10 grid md:grid-cols-7 grid-cols-1 gap-5 ">
                <TutorProfileCard />
                <HireTutorRequestFiled />
            </div>
        </div>
    );
};

export default TutorHireRequest;