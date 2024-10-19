import HireTutorRequestFiled from "./HireTutorRequestFiled";
import TutorProfileCard from "./TutorProfileCard";

const TutorHireRequest = () => {
    return (
        <div className="bg-blue-200">
            <div className="container mx-auto py-20 px-10 grid grid-cols-7 gap-5 ">
                <TutorProfileCard />

                <HireTutorRequestFiled />
            </div>
        </div>
    );
};

export default TutorHireRequest;