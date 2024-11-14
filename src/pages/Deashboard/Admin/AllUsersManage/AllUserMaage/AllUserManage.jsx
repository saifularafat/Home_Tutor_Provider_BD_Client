const AllUserManage = () => {
    const displayedData = [
        {
            id: '15245613545',
            displayName: 'Pinke Akter Kutkut',     
            email: 'pinkekterkutkut@gmail.com',     
            role: 'tutor',     
        },
        {
            id: '5221651545',
            displayName: 'Mim Akter Dim',     
            email: 'mimkterdim@gmail.com',     
            role: 'parent',     
        },
        {
            id: '215453fg14',
            displayName: 'Posha DDIM',     
            email: 'poshaterdim@gmail.com',     
            role: 'admin',     
        },
        {
            id: '215453fg14',
            displayName: 'Saif',     
            email: 'saif@gmail.com',     
            role: 'tutor',     
        },
        {
            id: '215453fg14',
            displayName: 'HOME',     
            email: 'home@gmail.com',     
            role: 'admin',     
        },
    ]

    const handleMakeAdmin = user => {
        console.log("handle Delete Users", user);
        // fetch(`https://e-exam-pro-server.vercel.app/users/admin/${user._id}`, {
        //   method: 'PATCH'
        // })
        //   .then(res => res.json())
        //   .then(data => {
        //     refetch()
        //     if (data.modifiedCount) {
        //       Swal.fire({
        //         showConfirmButton: false,
        //         timer: 1500,
        //         title: `${user.displayName} is admin now`,
        //         icon: 'success'
        //       })
        //     }
        //   })
    }

    const handleMakeInstructor = user => {
        console.log("handle Delete Users", user);
        // fetch(`https://e-exam-pro-server.vercel.app/users/instructor/${user._id}`, {
        //   method: 'PATCH'
        // })
        //   .then(res => res.json())
        //   .then(data => {
        //     //console.log(data)
        //     refetch()
        //     if (data.modifiedCount) {
        //       Swal.fire({
        //         showConfirmButton: false,
        //         timer: 1500,
        //         title: `${user.displayName} is Instructor now`,
        //         icon: 'success'
        //       })
        //     }
        //   })
    }

    const handleDeleteUser = user => {
        console.log("handle Delete Users", user);
        // Swal.fire({
        //   title: 'Are you sure?',
        //   text: "You won't be able to remove this user!",
        //   icon: 'warning',
        //   showCancelButton: true,
        //   confirmButtonColor: '#3085d6',
        //   cancelButtonColor: '#d33',
        //   confirmButtonText: 'Yes, delete it!'
        // }).then(result => {
        //   if (result.isConfirmed) {
        //     fetch(`https://e-exam-pro-server.vercel.app/users/${user._id}`, {
        //       method: 'DELETE'
        //     })
        //       .then(res => res.json())
        //       .then(data => {
        //         refetch()
        //         if (data.deletedCount > 0) {
        //           Swal.fire('Deleted!', 'User has been deleted.', 'success')
        //         }
        //       })
        //   }
        // })
    }

    return (
        <div className="bg-white py-5 px-4 rounded-lg my-6">
            <h2 className='text-2xl font-semibold'>Manage Users: {5}</h2>
            <div className='overflow-x-auto p-4 min-h-[80vh]'>
                <table className='table'>
                    {/* git */}
                    <thead className='text-sm text-info'>
                        <tr>
                            <th>Serial</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Make Instructor</th>
                            <th>Make Admin</th>
                            <th>Delete user</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row  */}
                        {displayedData?.map((user, index) => (
                            <tr key={user._id}>
                                <td>{index + 1}</td>
                                <td>{user.displayName}</td>
                                <td>{user.email}</td>
                                <td>{user.role}</td>
                                <td className=''>
                                    {user.role === 'tutor' ? (
                                        <button className='btn btn-disabled btn-xs'>
                                            Instructor
                                        </button>
                                    ) : (
                                        <button
                                            onClick={() => handleMakeInstructor(user)}
                                            className=' bg-secondary btn btn-ghost btn-sm'
                                        >
                                            Instructor
                                        </button>
                                    )}
                                </td>
                                <td>
                                    {user.role === 'admin' ? (
                                        <button className='btn btn-disabled btn-xs'>Admin</button>
                                    ) : (
                                        <button
                                            onClick={() => handleMakeAdmin(user)}
                                            className=' bg-warning btn btn-ghost btn-sm'
                                        >
                                            Admin
                                        </button>
                                    )}
                                </td>
                                <td>
                                    <button
                                        onClick={() => handleDeleteUser(user)}
                                        className='text-white bg-red-700 rounded-md btn-sm'
                                    >
                                        Banned
                                    </button>
                                </td>
                            </tr>
                        ))}
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

        </div>
    );
};

export default AllUserManage;