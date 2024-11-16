
const AllPayments = () => {
    const displayedData = [
        {
            email: 'email@gmail.com',
            name: 'saiful',
            paymentType: 'bkash',
            tuitionFree: 500,
            transition_id: '65c9116e70e141bd4528c259',
            date: '12-04-2024'
        },
        {
            email: 'new@gmail.com',
            name: 'Islam',
            paymentType: 'Nagad',
            tuitionFree: 700,
            transition_id: '65c9116e70e141bd452be012',
            date: '16-04-2024'
        },
        {
            email: 'home@gmail.com',
            name: 'home',
            paymentType: 'bkash',
            tuitionFree: 800,
            transition_id: '65c9116e70e141bd45282543',
            date: '21-04-2024'
        },
    ]

    return (
        <div>
            {/* TODO TOTAL AMOUNT */}
            <h3 className="md:text-left pl-2 md:pl-0 text-lg md:text-xl font-semibold md:pb-5 pb-2 uppercase"><span className="md:text-3xl text-2xl">
                {/* {totalAmount + "$"} */}
            </span> TOTAL Amount <span className="text-xs">
                    {/* (pending pay: {totalPAmount + "$"}) */}
                </span>
            </h3>

            <div className="overflow-x-auto ">
                <table className="min-w-[95%] mx-auto shadow-lg my-6">
                    <thead>
                        <tr className="bg-[#126faa] text-white">
                            <th className="py-2 px-2 text-center text-base font-medium">##</th>
                            <td className="py-2 px-2 text-center text-base font-medium">Email</td>
                            <td className="py-2 px-2 text-center text-base font-medium">User Name</td>
                            <td className="py-2 px-2 text-center text-base font-medium">Pay Type</td>
                            <td className="py-2 px-2 text-center text-base font-medium">Tuition Free</td>
                            <td className="py-2 px-2 text-center text-base font-medium">Transition ID</td>
                            <td className="py-2 px-2 text-center text-base font-medium">Date</td>
                        </tr>
                    </thead>
                    <tbody className="bg-white">
                        {
                            displayedData.map((pay, index) =>
                                <tr key={index} className="">
                                    <td className="text-center py-1">{index + 1}</td>
                                    <td className="text-center py-1">{pay?.email}</td>
                                    <td className="text-center py-1 capitalize">{pay?.name}</td>
                                    <td className={`text-center py-1 font-medium ${pay?.paymentType === 'bkash' ? 'bg-[#CA1F50] text-white': 'bg-[#E98F23] text-white'}`}>{pay?.paymentType}</td>
                                    <td className="text-center py-1">{pay?.tuitionFree} <span className="text-xl font-bold">৳</span></td>
                                    <td className="text-center py-1">{pay?.transition_id}</td>
                                    <td className="text-center py-1">{pay?.date}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
            {/* <div className='flex justify-center my-6'>
            <Pagination
                totalPages={totalPages}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
            ></Pagination>
        </div> */}
        </div >
    );
};

export default AllPayments;