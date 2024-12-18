
const PreferredTutoringClasses_Courses = () => {
    return (
        <div className="pt-8">
            <h2 className="text-2xl font-bold text-[#165B81]">Preferred Tutoring Classes & Courses</h2>


            {/* educational table information */}


            <div className="relative overflow-x-auto shadow-md sm:rounded-lg pt-4">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
                        <tr className="bg-blue-200">
                            <th scope="col" className="md:px-6 px-3 md:py-3 py-1 text-base font-semibold capitalize">
                                Class
                            </th>
                            <th scope="col" className="md:px-6 px-3 md:py-3 py-1 text-base font-semibold capitalize">
                                Medium
                            </th>
                            <th scope="col" className="md:px-6 px-3 md:py-3 py-1 text-base font-semibold capitalize">
                                Subjects
                            </th>
                            <th scope="col" className="md:px-6 px-3 md:py-3 py-1 text-base font-semibold capitalize">
                                Salary
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-b border-gray-200 dark:border-gray-700">
                            <th scope="row" className="md:px-6 px-5 md:py-4 py-1 font-medium text-gray-800 whitespace-nowrap bg-gray-100 dark:text-white dark:bg-gray-800">
                                1 to 8
                            </th>
                            <td className="md:px-6 px-5 md:py-4 py-1 font-medium">
                                Bangla Medium
                            </td>
                            <td className="md:px-6 px-5 md:py-4 py-1 font-medium bg-gray-100 dark:bg-gray-800 ">
                                Accounting
                            </td>
                            <td className="md:px-6 px-5 md:py-4 py-1 font-medium">
                                5000
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default PreferredTutoringClasses_Courses;