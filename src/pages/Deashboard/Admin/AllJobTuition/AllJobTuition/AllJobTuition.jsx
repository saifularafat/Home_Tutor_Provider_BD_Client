
const AllJobTuition = () => {

    const JobInfo = [
        {
            address: "Mirpur-10, Dhaka",
            salary: "5",
            parWeek: "3",
            class: "Nine-Ten",
            subject: "Science",
            tuiCode: "HTP-10024",
            gender: "Female",
            medium: "Bangla",
            category: "Home",
        },
        {
            address: "Mogbazar, Bazar Rail Gate, Dhaka",
            salary: "6",
            parWeek: "4",
            class: "Nine-Ten",
            subject: "Commerce",
            tuiCode: "HTP-10041",
            gender: "Male",
            medium: "Bangla",
            category: "Home",
        },
        {
            address: "KajiPara,Mirpur-10,Dhaka",
            salary: "4",
            parWeek: "3",
            class: "class-8",
            subject: "Math,Science",
            tuiCode: "HTP-10057",
            gender: "Female",
            medium: "Bangla",
            category: "Home",
        },
        {
            address: "KandirPar,Cumilla",
            salary: "6",
            parWeek: "4",
            class: "Class-6",
            subject: "English 1-2",
            tuiCode: "HTP-10098",
            gender: "Male",
            medium: "English",
            category: "Home",
        },
        {
            address: "Danmondi-12, Dhaka",
            salary: "7",
            parWeek: "4",
            class: "Nine",
            subject: "Arch",
            tuiCode: "HTP-10065",
            gender: "Male",
            medium: "Bangla",
            category: "Home",
        },
        {
            address: "KandirPar,Cumilla",
            salary: "6",
            parWeek: "4",
            class: "Class-6",
            subject: "All",
            tuiCode: "HTP-10088",
            gender: "Male",
            medium: "Bangla",
            category: "Online",
        },
    ]

    return (

        <div className="overflow-x-auto my-10 px-4 py-6 rounded-lg bg-slate-100">
            <h2 className="text-2xl font-semibold text-slate-700">Total Tuition Job = <span className="text-blue-500 text-3xl font-bold">({JobInfo.length})</span></h2>
            <table className="min-w-[100%] shadow-md border mx-auto border-gray-100 my-6">
                <thead>
                    <tr className="bg-[#0095FF] text-white">
                        <th className="py-2 px-2 text-sm text-left border-b">Address</th>
                        <th className="py-2 px-2 text-sm text-left border-b">Salary</th>
                        <th className="py-2 px-2 text-sm text-left border-b">Per week</th>
                        <th className="py-2 px-2 text-sm text-left border-b">Class</th>
                        <th className="py-2 px-2 text-sm text-left border-b">Subject</th>
                        <th className="py-2 px-2 text-sm text-left border-b">Tui.Code</th>
                        <th className="py-2 px-2 text-sm text-left border-b">Gender</th>
                        <th className="py-2 px-2 text-sm text-left border-b">Medium</th>
                        <th className="py-2 px-2 text-sm text-left border-b">Category</th>
                        <th className="py-2 px-2 text-sm border-b text-end">Action</th>
                    </tr>
                </thead>
                <tbody className="">
                    {
                        JobInfo.map((jobSub) =>
                            <tr key={jobSub.tuiCode} className="hover:bg-white border-b transition duration-300">
                                <td className="py-1 px-2 border-b text-sm font-normal">{jobSub?.address}</td>
                                <td className="py-1 px-2 border-b text-sm font-normal">{jobSub?.salary}k</td>
                                <td className="py-1 px-2 border-b text-sm font-normal">{jobSub?.parWeek} days</td>
                                <td className="py-1 px-2 border-b text-sm font-normal">{jobSub?.class}</td>
                                <td className={`py-1 px-2 border-b text-sm font-normal text-center ${jobSub?.subject === 'Science' ? 'bg-sky-300' : jobSub.subject === "Commerce" ? 'bg-green-400' : jobSub.subject === "Arch" ? 'bg-orange-300' : 'bg-slate-400'}`}>{jobSub?.subject}</td>
                                <td className="py-1 px-2 border-b text-sm font-normal">{jobSub?.tuiCode}</td>
                                <td className="py-1 px-2 border-b text-sm font-normal">{jobSub?.gender}</td>
                                <td className="py-1 px-2 border-b text-sm font-normal">{jobSub?.medium}</td>
                                <td className={`py-1 px-2 border-b text-sm font-normal text-center ${jobSub?.category === 'Home' ? 'bg-sky-400' : "bg-orange-400" }`}>{jobSub?.category}</td>
                                <td className="py-1 px-2 border-b text-end">
                                    <button className="bg-red-400 hover:bg-red-500 transition-all duration-200 text-white py-1 px-2 rounded-md">Details</button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default AllJobTuition;