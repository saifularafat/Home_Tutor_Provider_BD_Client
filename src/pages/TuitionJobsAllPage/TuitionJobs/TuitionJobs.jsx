import PageTitleShow from "../../../Components/PageTitleShow/PageTitleShow";
import TuitionJobCard from "./TuitionJobCard";

const TuitionJobs = () => {
    return (
        <div className="container mx-auto">
            <PageTitleShow currentPage="Tuition Jobs"/>
            <TuitionJobCard />
        </div>
    );
};

export default TuitionJobs;