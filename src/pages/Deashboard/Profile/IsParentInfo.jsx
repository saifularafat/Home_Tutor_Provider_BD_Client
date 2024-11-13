const IsParentInfo = () => {
    return (
        <div className="overflow-x-auto md:overflow-hidden mx-auto max-w-2xl bg-white shadow-lg rounded-lg p-5 space-y-4">
            <div className="hidden md:block">
                <div className="grid grid-cols-3">
                    <div className="col-span-1 w-full py-2">
                        <div className="flex items-center justify-between gap-5">
                            <h2 className="text-lg font-medium text-slate-700">University Name </h2>
                            <p>:</p>
                        </div>
                    </div>
                    <div className="col-span-2 w-full py-2 pl-5">
                        <h4 className="inline-block">North South University (NSU)</h4>
                    </div>
                    <div className="col-span-1 py-2">
                        <div className="flex items-center justify-between gap-5">
                            <h2 className="text-lg font-medium text-slate-700">Address </h2>
                            <p>:</p>
                        </div>
                    </div>
                    <div className="col-span-2 py-2 pl-5">
                        <h4>Mirpur-10, Dhaka</h4>
                    </div>
                    <div className="col-span-1 py-2">
                        <div className="flex items-center justify-between gap-5">
                            <h2 className="text-lg font-medium text-slate-700">Living  Address</h2>
                            <p>:</p>
                        </div>
                    </div>
                    <div className="col-span-2 py-2 pl-5">
                        <h4>Mirpur-10, Dhaka</h4>
                    </div>
                    <div className="col-span-1 py-2">
                        <div className="flex items-center justify-between gap-5">
                            <h2 className="text-lg font-medium text-slate-700">Your Profession</h2>
                            <p>:</p>
                        </div>
                    </div>
                    <div className="col-span-2 py-2 pl-5">
                        <h4 className="text-slate-800">Teacher</h4>
                    </div>
                </div>
            </div>

            {/* Mobile device */}

            <div className="overflow-x-auto md:hidden ">
            

            </div>

        </div>
    )
};

export default IsParentInfo;
