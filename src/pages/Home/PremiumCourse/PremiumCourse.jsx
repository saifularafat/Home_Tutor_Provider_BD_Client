import CourseCard from "./CourseCard";
import PremiumCourseCard from "./PremiumCourseCard";

const PremiumCourse = () => {

    return (
        <>
            <div className='grid md:grid-cols-3 grid-cols-1 md:mx-auto mx-5 gap-1 md:pt-6 pt-4 w-fit md:py-12 py-6' >
                <PremiumCourseCard />
            </div>
            <div className="mx-4">
                <CourseCard />
            </div>
        </>
    );
};

export default PremiumCourse;