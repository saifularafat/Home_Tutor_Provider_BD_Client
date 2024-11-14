import { useForm } from "react-hook-form";
import SearchDropdown from "../../../../../Components/SearchInputFuntion/SearchDropdown";
import PreferableClassOptions from "../../../../../Helpers/PreferableClass";
import { useState } from "react";
import WeekDay from "../../../../../Helpers/WeekDay";

const CreateNotice = () => {
    const {
        register,
        handleSubmit,
        reset,
        setValue,
        formState: { errors }
    } = useForm()

    const [preferableClass, setPreferableClass] = useState('');
    const [weekDay, setWeekDay] = useState('');


    const onSubmit = data => {
        const noticeInfo = {
            locationName: data.locationName,
            jobName: data.jobName,
            salary: data.salary,
            time: data.time,
            preferableClass: preferableClass,
            weekDay: weekDay,
        }
        console.log(noticeInfo);
    }

    // Function to update the selected Programming langues
    const handlePreferableClass = (option) => {
        setPreferableClass(option);
        setValue('preferableClass', option);
    };

    const handleWeekDay= (option) => {
        setWeekDay(option);
        setValue('weekDay', option);
    };
    return (
        <div className="mt-5">
            <form
                onSubmit={handleSubmit(onSubmit)}
                className='mx-auto max-w-screen-lg border-2 bg-white rounded-xl p-3 md:p-6 shadow-lg'
            >
                <h1 className='md:text-3xl text-xl font-semibold my-2 md:my-4 text-center text-slate-700'>Create Notice</h1>
                <div className='grid md:grid-cols-3 grid-cols-1 gap-4'>
                    <div className='w-full mb-2 form-control'>
                        <label className='label'>
                            <span className='font-semibold label-text'>Location Name</span>
                        </label>
                        <input
                            type='text'
                            placeholder='Location Name'
                            {...register('locationName', { required: true })}
                            className='bg-transparent input border border-sky-300 rounded-lg outline-sky-600 px-4 py-3 w-full placeholder:text-sm placeholder:tracking-wider text-sm'
                        />
                    </div>
                    <div className='w-full mb-2 form-control'>
                        <label className='label'>
                            <span className='font-semibold label-text'>Job Name</span>
                        </label>
                        <input
                            type='text'
                            placeholder='Job Name'
                            {...register('jobName', { required: true })}
                            className='bg-transparent input border border-sky-300 rounded-lg outline-sky-600 px-4 py-3 w-full placeholder:text-sm placeholder:tracking-wider text-smcapitalize'
                        />
                    </div>
                    <div className='w-full mb-2 form-control'>
                        <label className='label'>
                            <span className='font-semibold label-text'>Class </span>
                        </label>
                        <SearchDropdown
                            options={PreferableClassOptions}
                            selectedValue={preferableClass}
                            onSelect={handlePreferableClass} 
                        />
                    </div>
                    <div className='w-full form-control '>
                        <label className='label'>
                            <span className='font-semibold label-text'>salary</span>
                        </label>
                        <input
                            type='text'
                            {...register('salary', { required: true })}
                            placeholder='Salary'
                            className='bg-transparent input border border-sky-300 rounded-lg outline-sky-600 px-4 py-3 w-full placeholder:text-sm placeholder:tracking-wider text-sm'
                        />
                    </div>
                    <div className='w-full form-control '>
                        <label className='label'>
                            <span className='font-semibold label-text'>Week Day</span>
                        </label>
                        <SearchDropdown
                            options={WeekDay}
                            selectedValue={weekDay}
                            onSelect={handleWeekDay} 
                        />
                    </div>
                    <div className='w-full form-control '>
                        <label className='label'>
                            <span className='font-semibold label-text'>Time</span>
                        </label>
                        <input
                            type='Time'
                            {...register('time', { required: true })}
                            placeholder='time'
                            className='bg-transparent input border border-sky-300 rounded-lg outline-sky-600 px-4 py-3 w-full placeholder:text-sm placeholder:tracking-wider text-sm'
                        />
                    </div>
                </div>
                <div className='flex justify-center w-full mt-5'>
                    <input
                        className='btn btn-info'
                        type='submit'
                        value='Create Notice'
                    />
                </div>
            </form>
        </div>
    );
};

export default CreateNotice;