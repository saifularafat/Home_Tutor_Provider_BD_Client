import PageTitleShow from "../../../../../Components/PageTitleShow/PageTitleShow";
import logo from './../../../../../assets/leaf.jpg'
import license from './../../../../../assets/premium/tutor3.jpg'

const CoachingCenterAdmin = () => {
    return (
        <div className="overflow-x-auto ">
            <PageTitleShow currentPage="Coaching Center" />
            <table className="min-w-[100%] shadow-md border mx-auto bg-white border-gray-200 md:my-8 my-4">
                <thead>
                    <tr className="bg-[#7a0808] text-white">
                        <th className="py-2 text-sm text-center border-b"></th>
                        <th className="py-2 text-sm text-center border-b">Logo</th>
                        <th className="py-2 text-sm text-center border-b">Name</th>
                        <th className="py-2 text-sm text-center border-b">Class</th>
                        <th className="py-2 text-sm text-center border-b">Subject</th>
                        <th className="py-2 px-2 text-sm text-center border-b">A. Cost</th>
                        <th className="py-2 px-2 text-sm text-center border-b">C. Student</th>
                        <th className="py-2 text-sm text-center border-b">S. Date</th>
                        <th className="py-2 text-sm text-center border-b">Address</th>
                        <th className="py-2 text-sm text-center border-b">License Photo</th>
                    </tr>
                </thead>
                <tbody className="">
                    <tr className={`hover:bg-gray-100 transition duration-300 border-b`} title="Shiyam Ahmed">
                        <td className="text-center">1</td>
                        <td className="pb-1 flex justify-center">
                            <img src={logo} alt="coaching logo" className="h-12 w-12 rounded-lg object-cover bg-gray-300" />
                        </td>
                        <td className="text-sm text-center">Shiyam Ahmed</td>
                        <td className="text-sm text-center">Nine-Ten</td>
                        <td className="text-sm text-center">math, english</td>
                        <td className="px-3 text-sm text-center">5 K</td>
                        <td className="px-3 text-sm text-center"> 4 S.</td>
                        <td className="px-3 text-sm text-center"> 01/01/2025</td>
                        <td className="text-sm text-center"> Kajipara, Mirpur 10, Dhaka</td>
                        <td className="pb-1 flex justify-center">
                            <img src={license} alt="coaching logo" className="h-12 w-[72PX] rounded-lg object-cover bg-gray-300" />
                        </td>
                    </tr>
                    <tr className={`hover:bg-gray-100 transition duration-300 border-b`} title="Shiyam Ahmed">
                        <td className="text-center">2</td>
                        <td className="pb-1 flex justify-center">
                            <img src={logo} alt="coaching logo" className="h-12 w-12 rounded-lg object-cover bg-gray-300" />
                        </td>
                        <td className="text-sm text-center">Shiyam Ahmed</td>
                        <td className="text-sm text-center">One-Five</td>
                        <td className="text-sm text-center">All</td>
                        <td className="px-3 text-sm text-center">6 K</td>
                        <td className="px-3 text-sm text-center"> 5 S.</td>
                        <td className="px-3 text-sm text-center"> 03/02/2025</td>
                        <td className="text-sm text-center"> Kajipara, Mirpur 10, Dhaka</td>
                        <td className="pb-1 flex justify-center">
                            <img src={license} alt="coaching logo" className="h-12 w-[72PX] rounded-lg object-cover bg-gray-300" />
                        </td>
                    </tr>
                    <tr className={`hover:bg-gray-100 transition duration-300 border-b`} title="Shiyam Ahmed">
                        <td className="text-center">3</td>
                        <td className="pb-1 flex justify-center">
                            <img src={logo} alt="coaching logo" className="h-12 w-12 rounded-lg object-cover bg-gray-300" />
                        </td>
                        <td className="text-sm text-center">Shiyam Ahmed</td>
                        <td className="text-sm text-center">Seven-Eight</td>
                        <td className="text-sm text-center">Math, English, Science</td>
                        <td className="px-3 text-sm text-center">4 K</td>
                        <td className="px-3 text-sm text-center"> 3 S.</td>
                        <td className="px-3 text-sm text-center"> 01/02/2025</td>
                        <td className="text-sm text-center"> Kajipara, Mirpur 10, Dhaka</td>
                        <td className="pb-1 flex justify-center">
                            <img src={license} alt="coaching logo" className="h-12 w-[72PX] rounded-lg object-cover bg-gray-300" />
                        </td>
                    </tr>

                </tbody>
            </table>
        </div>
    );
};

export default CoachingCenterAdmin;