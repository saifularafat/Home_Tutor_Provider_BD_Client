import { useParams } from "react-router-dom";
import { singleTuitionJobs } from "../../../api/allTuitionJobs";
import Loading from "../../../Components/Loading/Loading";
import ErrorComponent from "../../../Components/ErrorComponent/ErrorComponent";
import NoJobFound from "../../../Components/NoFoundData/NoFoundData";
import PageTitleShow from "../../../Components/PageTitleShow/PageTitleShow";
import { useForm } from "react-hook-form";

const TuitionJobApplyForm = () => {
	const { id } = useParams();

	// Fetching tuition job details
	const { tuitionJob, refetch, isLoading, isError } = singleTuitionJobs(id);
	console.log("fetching tuition job", tuitionJob);

	const {
		register,
		formState: { errors },
		reset,
		handleSubmit,
		setValue,
		watch,
	} = useForm();

	const onSubmit = async (data) => {
		console.log("object", data);
	};

	if (isLoading) {
		return <Loading />;
	}
	if (isError) {
		return (
			<ErrorComponent message="Error fetching tuition information details." />
		);
	}

	if (!tuitionJob) {
		return <NoJobFound message="No tuition found." />;
	}
	return (
		<>
			<PageTitleShow currentPage="Tuition Job Apply |" />
			<div className="md:w-10/12 w-full mx-auto">
				<form onSubmit={handleSubmit(onSubmit)} className="py-5">
					<h2>this is form</h2>
				</form>
			</div>
		</>
	);
};

export default TuitionJobApplyForm;
