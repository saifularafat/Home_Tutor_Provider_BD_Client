import { Link } from "react-router-dom";
import IsTutorInfo from "./IsTutorInfo";
import IsParentInfo from "./IsParentInfo";

const Profile = () => {
    const isTutor = false;
    // const isParent = true;
    return (
        <div className="md:py-12 py-5">
            <div className="md:overflow-hidden flex flex-col items-center justify-center md:flex-row">
                <div className="group relative sm:w-[320px]">
                    <img
                        width={350}
                        height={350}
                        className="h-full w-full md:scale-105 transform md:rounded-lg "
                        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2080&auto=format&fit=crop"
                        alt="parent photo" />
                </div>
                <div className="min-w-[250px] max-w-[350px] space-y-2 md:rounded-br-lg rounded-tr-lg bg-white md:p-8 p-4 text-center shadow-[0px_7px_30px_2px_rgba(100,100,111,0.2)] dark:bg-[#18181B] md:w-[350px] dark:shadow-[0px_2px_8px_0px_rgba(0,0,0,0.8)]">
                    <div className="space-y-1 py-2">
                        <h2 className="text-center text-xl font-bold md:font-semibold lg:font-medium text-gray-700 dark:text-white/90 lg:text-3xl md:text-2xl">Shiyam Sarker</h2>
                        <p className="text-gray-500 text-sm font-medium">ID: HTP015426</p>
                    </div>

                    <div className="md:flex items-center gap-5">
                        <p className="text-sm text-gray-500 font-medium">Email</p>
                        <p className="text-sm tracking-wider text-gray-700">hometutorprovider@gmail.com</p>
                    </div>
                    <div className="flex items-center gap-5">
                        <p className="text-sm text-gray-500 font-medium">Phone </p>
                        <p className="text-sm tracking-wider text-gray-700 ">0880 1822 563 000</p>
                    </div>
                    <div className="flex items-center gap-5">
                        <p className="text-sm text-gray-500 font-medium">Address </p>
                        <p className="text-sm tracking-wider text-gray-700 ">Mirpur-10, Dhaka</p>
                    </div>
                    <div className="flex items-center gap-5">
                        <p className="text-sm text-gray-500 font-medium">Gender </p>
                        <p className="text-sm tracking-wider text-gray-700 ">Male</p>
                    </div>

                    <div>
                        <Link to={
                            isTutor ?
                                "/dashboard/tutor-update-profile"
                                : "/dashboard/profile-update"}
                        >
                            <button className="rounded-full border border-[#0d87f8] px-4 py-2 text-sm text-[#0d87f8] hover:bg-[#0d87f8] hover:text-white  duration-300 dark:hover:bg-transparent dark:hover:text-[#0d87f8] dark:hover:drop-shadow-[0px_0px_2px_#0d87f8]">Edit Profile</button>
                        </Link>
                    </div>
                </div>

            </div>

            <div className=" py-10">
                {
                    isTutor ?
                        <IsTutorInfo />
                        :
                        <div className="overflow-x-auto">
                            <IsParentInfo />
                        </div>
                }
            </div>
        </div>
    );
};

export default Profile;