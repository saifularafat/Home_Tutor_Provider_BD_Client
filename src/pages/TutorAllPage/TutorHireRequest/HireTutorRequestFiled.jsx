import { useParams } from "react-router-dom";
import HireRequestFrom from "./HireRequestFrom";

const HireTutorRequestFiled = () => {
    const { id } = useParams();
    return (
        <div className="md:col-span-5 col-span-1 bg-slate-100  rounded-2xl shadow-2xl shadow-blue-300">
            <div className="bg-gradient-to-r from-blue-600 to-fuchsia-400  py-3 px-5 rounded-tl-2xl rounded-tr-2xl">
                <h2 className="text-xl font-bold text-slate-50">Hire Tutor Request</h2>
            </div>

            {/* Hire Request Filed From section */}
            <HireRequestFrom id={id} />
        </div>
    );
};

export default HireTutorRequestFiled;