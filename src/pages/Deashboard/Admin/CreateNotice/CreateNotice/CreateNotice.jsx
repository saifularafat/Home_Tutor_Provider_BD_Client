import { useForm } from "react-hook-form";
import PreferableClassOptions from "../../../../../Helpers/PreferableClass";
import PageTitleShow from "../../../../../Components/PageTitleShow/PageTitleShow";
import SearchDropDownField from "../../../../../Components/SearchDropDownFiled/SearchDropDownField";
import { FixedTime, JobCategory, JobSalary, PerWeek } from "../../../../../Helpers/TuitionJobCreate";

const CreateNotice = () => {
    const {
        register,
        handleSubmit,
        reset,
        setValue,
        watch,
        formState: { errors }
    } = useForm()

    const jobCategory = watch("jobCategory");
    const className = watch("className");
    const jobSalary = watch("jobSalary");
    const perWeek = watch("perWeek");
    const fixedTime = watch("fixedTime");

    const onSubmit = data => {
        const noticeInfo = {
            jobLocation: data.jobLocation,
            jobCategory: jobCategory,
            className: className,
            jobSalary: jobSalary,
            perWeek: perWeek,
            jobTime: fixedTime,
        }
        reset()
        console.log(noticeInfo);
    }
    return (
        <div className="my-8">
            <PageTitleShow currentPage="Notice Create |" />
            <form
                onSubmit={handleSubmit(onSubmit)}
                className='mx-auto max-w-screen-lg border-2 bg-red-400 rounded-xl p-3 md:p-6 shadow-lg'
            >
                <h1 className='md:text-xl text-lg font-semibold my-2 md:my-4 text-center text-slate-700 capitalize'>up comming....</h1>
                <h1 className='md:text-3xl text-xl font-semibold my-2 md:my-4 text-center text-slate-700'>Create Notice</h1>
                <div className='grid md:grid-cols-3 grid-cols-1 gap-4'>
                    <div className="space-y-2 text-left">
                        <label className="block text-slate-700 font-medium">
                            <span className="font-semibold text-slate-800 tracking-wider">Job Location*</span>
                        </label>
                        <input
                            type='text'
                            placeholder='Location Name'
                            {...register('jobLocation', { required: true })}
                            className='bg-transparent input border border-sky-300 rounded-lg outline-sky-600 px-4 py-3 w-full placeholder:text-sm placeholder:tracking-wider text-sm'
                        />
                        {errors.jobLocation && (
                            <p className="text-red-500 text-sm">{errors.jobLocation.message}</p>
                        )}
                    </div>
                    <SearchDropDownField
                        label="Job Category *"
                        options={JobCategory}
                        selectedValue={jobCategory}
                        setValue={(value) => setValue("jobCategory", value)}
                    />
                    <SearchDropDownField
                        label="Class Name *"
                        options={PreferableClassOptions}
                        selectedValue={className}
                        setValue={(value) => setValue("className", value)}
                    />
                    <SearchDropDownField
                        label="Job Salary *"
                        options={JobSalary}
                        selectedValue={jobSalary}
                        setValue={(value) => setValue("jobSalary", value)}
                    />
                    <SearchDropDownField
                        label="Per Week *"
                        options={PerWeek}
                        selectedValue={perWeek}
                        setValue={(value) => setValue("perWeek", value)}
                    />
                    <SearchDropDownField
                        label="Time *"
                        options={FixedTime}
                        selectedValue={fixedTime}
                        setValue={(value) => setValue("fixedTime", value)}
                    />
                </div>
                <div className='flex justify-center w-full mt-5'>
                    <input
                        className='btn btn-info'
                        type='submit'
                        disabled
                        value='Create Notice'
                    />
                </div>
            </form>
        </div>
    );
};

export default CreateNotice;