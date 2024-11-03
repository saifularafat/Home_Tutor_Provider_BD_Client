
const TuitionJobTabla = () => {
    return (
        <div className=" w-full">
            <div className="flex items-center justify-between md:px-5 px-3 md:py-3 py-2">
                <h6 className="md:text-xl text-lg md:font-bold font-semibold text-slate-700"> Class</h6>
                <h6 className="md:text-xl text-lg md:font-bold font-semibold text-slate-700"> Subject</h6>
            </div>
            <div className="flex items-center justify-between border-t-[1px] md:px-5 px-2 bg-sky-100 border-slate-300 md:py-2 py-1 rounded-br-md rounded-bl-md">
                <h6 className="font-normal md:tracking-wide text-slate-500 md:uppercase capitalize"> HSC</h6>
                <h6 className="md:font-medium font-normal md:tracking-wide text-[#4B5563] md:uppercase capitalize"> Math, Physics, ICT</h6>
            </div>
            <div className="flex items-center justify-between border-t-[1px] md:px-5 px-2 bg-orange-100 border-slate-300 md:py-2 py-1 rounded-br-md rounded-bl-md">
                <h6 className="font-normal md:tracking-wide text-slate-500 md:uppercase capitalize"> 1 to 5</h6>
                <h6 className="md:font-medium font-normal md:tracking-wide text-[#4B5563] md:uppercase capitalize"> All</h6>
            </div>
        </div>
    );
};

export default TuitionJobTabla;