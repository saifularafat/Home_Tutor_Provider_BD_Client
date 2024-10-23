import CourseCard from "./CourseCard";
import PremiumCourseCard from "./PremiumCourseCard";

const PremiumCourse = () => {

    return (
        <>
            <div className='grid grid-cols-1 gap-1 pt-6 mx-auto md:grid-cols-3 w-fit py-12' >
                <PremiumCourseCard />
            </div>
            <CourseCard />
        </>
    );
};

export default PremiumCourse;