const EducationalInformation = () => {
    return (
        <div className="pt-5">
            <h2 className="text-2xl font-bold text-[#165B81]">Educational Information</h2>


            {/* educational table information */}

            <div className="relative overflow-x-auto shadow-md sm:rounded-lg pt-5">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
                        <tr className="bg-blue-200">
                            <th scope="col" className="px-6 md:py-3 text-base font-semibold capitalize">
                                Exam Title
                            </th>
                            <th scope="col" className="px-6 md:py-3 text-base font-semibold capitalize">
                                Institute
                            </th>
                            <th scope="col" className="px-6 md:py-3 text-base font-semibold capitalize">
                                Group/Department
                            </th>
                            <th scope="col" className="px-6 md:py-3 text-base font-semibold capitalize">
                                Medium
                            </th>
                            <th scope="col" className="px-6 md:py-3 text-base font-semibold capitalize">
                                Result
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-b border-gray-200 dark:border-gray-700">
                            <th scope="row" className="px-6 md:py-4 py-1 font-medium text-gray-900 whitespace-nowrap bg-gray-100 dark:text-white dark:bg-gray-800">
                                SSS
                            </th>
                            <td className="px-6 md:py-4 py-1 font-medium">
                                Shena palli high school
                            </td>
                            <td className="px-6 md:py-4 py-1 font-medium bg-gray-100 dark:bg-gray-800 ">
                                Accounting
                            </td>
                            <td className="px-6 md:py-4 py-1 font-medium">
                                Bangla Medium
                            </td>
                            <td className="px-6 md:py-4 py-1 font-medium bg-gray-100 dark:bg-gray-800 ">
                                4.06
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default EducationalInformation;