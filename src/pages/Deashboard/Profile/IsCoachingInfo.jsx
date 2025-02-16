const IsCoachingInfo = ({ user }) => {
    console.log('isCoaching nfo', user);
    return (
        <div className="bg-white md:p-5 p-3">
            <h2 className="md:text-2xl text-lg md:font-bold font-semibold text-slate-800 md:tracking-wider text-center">Coaching Center Information</h2>
            <div className="grid md:grid-cols-4 col-span-1 gap-3 py-3">
                <div className="md:col-span-1 col-span-1">
                    <div className="group relative sm:w-[200px]">
                        <h4 className="text-sm font-medium text-slate-700 text-center pb-3">Coaching Center logo</h4>
                        <img
                            width={350}
                            height={350}
                            className="h-full w-full object-cover hover:scale-105 transform transition-all duration-200 md:rounded-lg "
                            src={user?.image || "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2080&auto=format&fit=crop"}
                            alt="parent photo" />
                    </div>
                </div>
                {/* Coaching Data */}
                <div className="md:col-span-2 col-span-1 md:pt-5 pt-0 space-y-1">
                    <h2 className="text-base font-medium text-slate-700">Name:
                        <span className="text-green-500 font-normal capitalize bg-slate-100 px-2 rounded">
                            {user?.name || "H T P bd"}
                        </span>
                    </h2>
                    <h2 className="text-base font-medium text-slate-700">Email:
                        <span className="text-green-600 font-normal bg-slate-100 px-2 rounded">
                            {user?.email || "htpbd@gmail.com"}
                        </span>
                    </h2>
                    <h2 className="text-base font-medium text-slate-700">Phone:
                        <span className="text-green-600 font-normal bg-slate-100 px-2 rounded">
                            {user?.phone || "8801500000000"}
                        </span>
                    </h2>
                    <h2 className="text-base font-medium text-slate-700">Address:
                        <span className="text-green-500 font-normal bg-slate-100 px-2 rounded">
                            {user?.address || "Dhaka, Bangladesh"}
                        </span>
                    </h2>
                    <h2 className="text-base font-medium text-slate-700">Achievements :
                        <span className="text-blue-500 font-normal bg-slate-100 px-2 rounded">
                            {user?.Achievements || "Achievements "}
                        </span>
                    </h2>
                    <h2 className="text-base font-medium text-slate-700">Website Link :
                        <span className="text-blue-500 font-normal bg-slate-100 px-2 rounded">
                            {user?.websiteSocialLink || "https://github.com/saifularafat"}
                        </span>
                    </h2>
                    <h2 className="text-base font-medium text-slate-700">Bio :
                        <span className="text-slate-600 font-normal bg-slate-100 px-2 rounded">
                            {user?.bio || "Please give your Coaching center Bio "}
                        </span>
                    </h2>
                    <h2 className="text-base font-medium text-slate-700">Create Date :
                        <span className="text-slate-600 font-normal bg-slate-100 px-2 rounded">
                            {new Date(user?.createdAt).toLocaleDateString()}{" "}
                            {new Date(user?.createdAt).toLocaleTimeString()}
                        </span>
                    </h2>
                    <h2 className="text-base font-medium text-slate-700">Updated Date :
                        <span className="text-slate-600 font-normal bg-slate-100 px-2 rounded text-sm">
                            {new Date(user?.updatedAt).toLocaleDateString()}{" "}
                            {new Date(user?.updatedAt).toLocaleTimeString()}
                        </span>
                    </h2>
                </div>

                <div className="md:col-span-1 col-span-1">
                    <div className="group relative sm:w-[200px] object-cover">
                        <h4 className="text-sm font-medium text-slate-700 text-center">License Photo</h4>
                        <img
                            width={350}
                            height={350}
                            className="h-full w-full object-cover md:hover:scale-105 pt-4 rounded-lg transform md:rounded-lg transition-all duration-200"
                            src={user?.licensePhoto || "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2080&auto=format&fit=crop"}
                            alt="parent photo" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IsCoachingInfo;