const IsParentInfo = ({ user }) => {
    console.log('parent  info', user);
    return (
        <div className="overflow-x-auto md:overflow-hidden mx-auto max-w-3xl bg-white shadow-lg rounded-lg p-5 space-y-4">
            <div className="hidden md:block">
                <div className="grid grid-cols-3">
                    <div className="col-span-1 w-full py-2">
                        <div className="flex items-center justify-between gap-5">
                            <h2 className="text-lg font-medium text-slate-700">University Name </h2>
                            <p>:</p>
                        </div>
                    </div>
                    <div className="col-span-2 w-full py-2 pl-5">
                        <h4 className="inline-block">{user?.universityName || 'University Name'}</h4>
                    </div>
                    <div className="col-span-1 py-2">
                        <div className="flex items-center justify-between gap-5">
                            <h2 className="text-lg font-medium text-slate-700">Address </h2>
                            <p>:</p>
                        </div>
                    </div>
                    <div className="col-span-2 py-2 pl-5">
                        <h4>{user?.address || "Mirpur-10, Dhaka"}</h4>
                    </div>
                    <div className="col-span-1 py-2">
                        <div className="flex items-center justify-between gap-5">
                            <h2 className="text-lg font-medium text-slate-700">Living  Address</h2>
                            <p>:</p>
                        </div>
                    </div>
                    <div className="col-span-2 py-2 pl-5">
                        <h4>{user?.livingAddress || "Mirpur-10, Dhaka"}</h4>
                    </div>
                    <div className="col-span-1 py-2">
                        <div className="flex items-center justify-between gap-5">
                            <h2 className="text-lg font-medium text-slate-700">Your Profession</h2>
                            <p>:</p>
                        </div>
                    </div>
                    <div className="col-span-2 py-2 pl-5">
                        <h4>{user?.Professions || "Professions"}</h4>
                    </div>
                    <div className="col-span-1 py-2">
                        <div className="flex items-center justify-between gap-5">
                            <h2 className="text-lg font-medium text-slate-700">Bio</h2>
                            <p>:</p>
                        </div>
                    </div>
                    <div className="col-span-2 py-2 pl-5">
                        <h4 className="text-sm font-normal">{user?.bio || "bio"}</h4>
                    </div>
                    <div className="col-span-1 py-2">
                        <div className="flex items-center justify-between gap-5">
                            <h2 className="text-lg font-medium text-slate-700">Create Date </h2>
                            <p>:</p>
                        </div>
                    </div>
                    <div className="col-span-2 py-2 pl-5 text-sm font-normal">
                        {new Date(user?.createdAt).toLocaleDateString()}{" "}
                        {new Date(user?.createdAt).toLocaleTimeString()}
                    </div>
                    <div className="col-span-1 py-2">
                        <div className="flex items-center justify-between gap-5">
                            <h2 className="text-lg font-medium text-green-500">Updated Date </h2>
                            <p>:</p>
                        </div>
                    </div>
                    <div className="col-span-2 py-2 pl-5 text-sm font-normal text-green-600">
                        {new Date(user?.updatedAt).toLocaleDateString()}{" "}
                        {new Date(user?.updatedAt).toLocaleTimeString()}
                    </div>
                </div>
            </div>

            {/* Mobile device */}

            <div className="overflow-x-auto  md:hidden">
                <table className="min-w-[90%] shadow-md border mx-auto border-gray-100 rounded-lg my-2">
                    <thead>
                        <tr className="bg-[#333333] text-white rounded-lg">
                            <th className="py-3 px-6 text-left border-b">University</th>
                            <th className="py-3 px-6 text-left border-b">Address</th>
                            <th className="py-3 px-6 text-left border-b">Living</th>
                            <th className="py-3 px-6  border-b text-end">Professional</th>
                            <th className="py-3 px-6  border-b text-end">Bio</th>
                            <th className="py-3 px-6  border-b text-end">Create Date </th>
                            <th className="py-3 px-6  border-b text-end">Updated Date </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="hover:bg-gray-50 transition duration-300">
                            <td className="text-sm py-4 px-6 border-b">{user?.universityName || 'University Name'}</td>
                            <td className=" text-sm py-4 px-6 border-b">{user?.address || "Mirpur-10, Dhaka"}</td>
                            <td className=" text-sm py-4 px-6 border-b">{user?.livingAddress || "Mirpur-10, Dhaka"}</td>
                            <td className="text-sm py-4 px-6 border-b">{user?.Professions || "Professions"}</td>
                            <td className="text-sm py-4 px-6 border-b">{user?.bio || "bio"}</td>
                            <td className="text-sm py-4 px-6 border-b">
                                {new Date(user?.createdAt).toLocaleDateString()}{" "}
                                {new Date(user?.createdAt).toLocaleTimeString()}
                            </td>
                            <td className="text-sm py-4 px-6 border-b">
                                {new Date(user?.updatedAt).toLocaleDateString()}{" "}
                                {new Date(user?.updatedAt).toLocaleTimeString()}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>


        </div>
    )
};

export default IsParentInfo;
