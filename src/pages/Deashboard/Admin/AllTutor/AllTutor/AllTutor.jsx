const AllTutor = () => {
    return (

        <div className="overflow-x-auto ">
            <table className="min-w-[100%] shadow-md border mx-auto bg-white border-gray-200 md:my-8 my-4">
                <thead>
                    <tr className="bg-[#282727] text-white">
                        <th className="py-2 text-sm text-center border-b"></th>
                        <th className="py-2 text-sm text-center border-b">Name</th>
                        <th className="py-2 text-sm text-center border-b">Group/Sub</th>
                        <th className="py-2 text-sm text-center border-b">C. University</th>
                        <th className="py-2 text-sm text-center border-b">Experian</th>
                        <th className="py-2 text-sm text-center border-b">Expert Salary</th>
                        <th className="py-2 text-sm text-center border-b">C. Student</th>
                        <th className="py-2 text-sm text-center border-b">Gender</th>
                        <th className="py-2 text-sm text-center border-b">Address</th>
                    </tr>
                </thead>
                <tbody className="">
                    <tr className={`hover:bg-gray-100 transition duration-300`} title="Shiyam Ahmed">
                        <td className="py-1 text-sm text-center border-b">1</td>
                        <td className="py-1 text-sm text-center border-b">Shiyam Ahmed</td>
                        <td className="py-1 text-sm text-center border-b">Sciences</td>
                        <td className="py-1 text-sm text-center border-b">Dhaka International University</td>
                        <td className="py-1 text-sm text-center border-b">4 Years</td>
                        <td className="py-1 text-sm text-center border-b">5 K</td>
                        <td className="py-1 text-sm text-center border-b"> 4 Student</td>
                        <td className="py-1 text-sm text-center border-b">Male</td>
                        <td className="py-1 text-sm text-center border-b"> Kajipara, Mirpur 10, Dhaka</td>
                    </tr>
                    <tr className={`hover:bg-gray-100 transition duration-300`} title="Ejajur Rahman Ejaj">
                        <td className="py-1 text-sm text-center border-b">2</td>
                        <td className="py-1 text-sm text-center border-b">Ejajur Rahman Ejaj</td>
                        <td className="py-1 text-sm text-center border-b">English</td>
                        <td className="py-1 text-sm text-center border-b">Comilla International University</td>
                        <td className="py-1 text-sm text-center border-b">1 Years</td>
                        <td className="py-1 text-sm text-center border-b">3 K</td>
                        <td className="py-1 text-sm text-center border-b"> 1 Student</td>
                        <td className="py-1 text-sm text-center border-b">Male</td>
                        <td className="py-1 text-sm text-center border-b"> Kajipara, Dhanmondi, Dhaka</td>
                    </tr>
                    <tr className={`hover:bg-gray-100 transition duration-300`} title="Shakib All Hasan">
                        <td className="py-1 text-sm text-center border-b">3</td>
                        <td className="py-1 text-sm text-center border-b">Shakib All Hasan</td>
                        <td className="py-1 text-sm text-center border-b">Math</td>
                        <td className="py-1 text-sm text-center border-b">Jahaggirnagor University Dhaka</td>
                        <td className="py-1 text-sm text-center border-b">N/A</td>
                        <td className="py-1 text-sm text-center border-b">5 K</td>
                        <td className="py-1 text-sm text-center border-b"> 2 Student</td>
                        <td className="py-1 text-sm text-center border-b">Male</td>
                        <td className="py-1 text-sm text-center border-b"> Chhar rasta mur, Uttora, Dhaka</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default AllTutor;