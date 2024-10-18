import PageTitleShow from "../../Components/PageTitleShow/PageTitleShow";
import TutoringInformation from "./TutoringInformation";

const TutorProfileDetails = () => {
    return (
        <div className="bg-slate-400 py-10">
            <PageTitleShow currentPage="Tutor Details" />
            {/* tutor details tutor info */}
            <div className="max-w-4xl mx-auto px-8 py-10 bg-white rounded-xl">
                <div className="">
                    <img width={100} height={100}
                        className="h-[150px] w-[150px] mx-auto rounded-full border-4 border-[#056294] bg-[#1779af] dark:border-[#18181B]"
                        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2080&auto=format&fit=crop"
                        alt="profile card" />
                </div>
                <div className="text-center py-6">
                    <h2 className="text-3xl font-bold uppercase bg-gradient-to-r from-[#064668] to-[#1e78c2a9] bg-clip-text text-transparent">Mohammad Saiful Islam Arafat </h2>
                    <p className="text-slate-500">Tutor ID: <span className="font-semibold text-slate-500">TPBD013807</span></p>
                    <div className="pt-4">
                        <p className="py-2 px-6 w-24 mx-auto rounded-full text-center bg-sky-500 text-white">Active</p>
                    </div>
                </div>
                <div className="text-center pt-3">
                    <h3 className="text-2xl font-semibold text-gray-800">Tejgaoun collage</h3>
                    <p className="text-base font-medium text-slate-700">Developer </p>
                </div>

                
                <TutoringInformation />
            </div>

        </div>
    );
};

export default TutorProfileDetails;