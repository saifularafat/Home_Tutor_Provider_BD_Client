
const Request = () => {
    return (

        <div className="overflow-x-auto">
            <table className="min-w-[100%] shadow-md  border mx-auto border-gray-100">
                <thead>
                    <tr className="bg-[#403f3f] text-white">
                        <th className="py-2 pl-2 capitalize text-center border-b text-sm font-semibold">tutor name</th>
                        <th className="py-2 pl-2 capitalize text-center border-b text-sm font-semibold">T. Id</th>
                        <th className="py-2 pl-2 capitalize text-center border-b text-sm font-semibold">T. Area</th>
                        <th className="py-2 pl-2 capitalize text-center border-b text-sm font-semibold">Subject</th>
                        <th className="py-2 pl-2 capitalize text-center border-b text-sm font-semibold">Class</th>
                        <th className="py-2 pl-2 capitalize text-center border-b text-sm font-semibold">Medium</th>
                        <th className="py-2 pl-2 capitalize text-center border-b text-sm font-semibold">Salary</th>
                        <th className="py-2 pl-2 capitalize text-center border-b text-sm font-semibold">Per Week</th>
                        <th className="py-2 pr-2 border-b capitalize text-sm font-semibold text-center">Job Area</th>
                        <th className="py-2 pr-2 border-b capitalize text-sm font-semibold text-center">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="hover:bg-gray-100 transition duration-300">
                        <td className="p-1 text-xs font-medium text-center border-b">Shiyam Ahmed</td>
                        <td className="p-1 text-xs font-medium text-center border-b">HPT-19021</td>
                        <td className="p-1 text-xs font-medium border-b text-end">Mirpur 15, Dhaka</td>
                        <td className="p-1 text-xs font-medium text-center border-b">Sciences</td>
                        <td className="p-1 text-xs font-medium text-center border-b">class- 9 to 10</td>
                        <td className="p-1 text-xs font-medium text-center border-b">Bangla</td>
                        <td className="p-1 text-xs font-medium text-center border-b">5K</td>
                        <td className="p-1 text-xs font-medium text-center border-b">4d</td>
                        <td className="p-1 text-xs font-medium border-b text-end"> Shemoley, Mirpur-10, Dhaka</td>
                        <td className="p-1 text-xs font-medium text-center border-b">
                            <button className="text-[11px] px-1 py-1 bg-red-500 text-white rounded-lg mr-1">Cancel</button>
                            <button className="text-[11px] px-1 py-1 bg-blue-500 text-white rounded-lg mr-1">Approve</button>
                        </td>
                    </tr>
                    <tr className="hover:bg-gray-100 transition duration-300">
                        <td className="p-1 text-xs font-medium text-center border-b">Parvej Ahmed Anto</td>
                        <td className="p-1 text-xs font-medium text-center border-b">HPT-19023</td>
                        <td className="p-1 text-xs font-medium border-b text-end">Uttora-1, Dhaka</td>
                        <td className="p-1 text-xs font-medium text-center border-b">Commerces</td>
                        <td className="p-1 text-xs font-medium text-center border-b">class- Ten</td>
                        <td className="p-1 text-xs font-medium text-center border-b">Bangla</td>
                        <td className="p-1 text-xs font-medium text-center border-b">4K</td>
                        <td className="p-1 text-xs font-medium text-center border-b">3d</td>
                        <td className="p-1 text-xs font-medium border-b text-end"> Uttora-2, Ges Fames, Dhaka</td>
                         <td className="p-1 text-xs font-medium text-center border-b">
                            <button className="text-[11px] px-1 py-1 bg-red-500 text-white rounded-lg mr-1">Cancel</button>
                            <button className="text-[11px] px-1 py-1 bg-blue-500 text-white rounded-lg mr-1">Approve</button>
                        </td>
                    </tr>
                    <tr className="hover:bg-gray-100 transition duration-300">
                        <td className="p-1 text-xs font-medium text-center border-b">Tanjila Akter Shemo</td>
                        <td className="p-1 text-xs font-medium text-center border-b">HPT-19026</td>
                        <td className="p-1 text-xs font-medium border-b text-end">Danmondi, Dhaka</td>
                        <td className="p-1 text-xs font-medium text-center border-b">Sciences</td>
                        <td className="p-1 text-xs font-medium text-center border-b">class- 11 to 12</td>
                        <td className="p-1 text-xs font-medium text-center border-b">English</td>
                        <td className="p-1 text-xs font-medium text-center border-b">7K</td>
                        <td className="p-1 text-xs font-medium text-center border-b">4d</td>
                        <td className="p-1 text-xs font-medium border-b text-end"> Fukira Bazar, Mirpur-10, Dhaka</td>
                         <td className="p-1 text-xs font-medium text-center border-b">
                            <button className="text-[11px] px-1 py-1 bg-red-500 text-white rounded-lg mr-1">Cancel</button>
                            <button className="text-[11px] px-1 py-1 bg-blue-500 text-white rounded-lg mr-1">Approve</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

    );
};

export default Request;