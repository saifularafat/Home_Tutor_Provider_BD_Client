
const TuitionJobTabla = () => {
    return (
        <div className=" w-full">
            <div className="flex items-center justify-between px-5 py-3">
                <h6 className="text-xl font-bold text-slate-700"> Class</h6>
                <h6 className="text-xl font-bold text-slate-700"> Subject</h6>
            </div>
            <div className="flex items-center justify-between border-t-[1px] px-5 bg-sky-100 border-slate-300 py-2 rounded-br-md rounded-bl-md">
                <h6 className=" font-normal tracking-wide text-slate-500 uppercase"> HSC</h6>
                <h6 className=" font-medium tracking-wide text-[#4B5563] uppercase"> Math, Physics, ICT,</h6>
            </div>
            <div className="flex items-center justify-between border-t-[1px] px-5 bg-orange-100 border-slate-300 py-2 rounded-br-md rounded-bl-md">
                <h6 className=" font-normal tracking-wide text-slate-500 uppercase"> 1 to 5</h6>
                <h6 className=" font-medium tracking-wide text-[#4B5563] uppercase"> All</h6>
            </div>
        </div>
    );
};

export default TuitionJobTabla;