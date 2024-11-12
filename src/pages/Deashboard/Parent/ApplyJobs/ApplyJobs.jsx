import { useState } from "react";
import { Link } from "react-router-dom";

const ApplyJobs = () => {
    const [clickedCards, setClickedCards] = useState([false, false, false]);

    // Function to handle card click and set the specific card's state to true
    const handleCardClick = (index) => {
        setClickedCards((prevState) => {
            const updatedState = [...prevState];
            updatedState[index] = true;
            return updatedState;
        });
    };
    return (
        <div className="grid md:grid-cols-3 grid-cols-1 gap-5 md:py-10 py-5">
            {[0, 1,].map((index) => (
                <div
                    to=""
                    key={index}
                    onClick={() => handleCardClick(index)}
                    className={`col-span-1 rounded-lg py-5 px-5 shadow-lg ${clickedCards[index] ? "bg-white" : "bg-gray-300"
                        }`}
                >
                    <div className="space-y-3">
                        <h2 className="text-base font-bold">Lorem ipsum dolor sit consectetur adipisicing.</h2>
                        <div className="flex items-center justify-between border-b px-4 py-1">
                            <p className="text-sm font-medium text-slate-800">Medium</p>
                            <p className="text-sm text-slate-700">Bangla</p>
                        </div>
                        <div className="flex items-center justify-between border-b px-4 py-1">
                            <p className="text-sm font-medium text-slate-800">Salary</p>
                            <p className="text-sm text-slate-700">5K</p>
                        </div>
                        <div className="flex items-center justify-between border-b px-4 py-1">
                            <p className="text-sm font-medium text-slate-800">Subject</p>
                            <p className="text-sm text-slate-700">All</p>
                        </div>
                        <div className="flex items-center justify-between px-4">
                            <p className="text-sm font-medium text-slate-800">Job Code</p>
                            <p className="text-sm text-slate-700">HTP-01245</p>
                        </div>
                        <div className="flex items-center justify-between px-4 pt-3">
                            <button className="text-white bg-red-400 font-medium tracking-wide px-3 py-2 rounded-lg hover:bg-red-500 transition-all duration-200">Cancel</button>
                            <Link to={``} className="bg-blue-500 px-3 py-2 text-white rounded-lg tracking-wide hover:text-slate-50 hover:bg-blue-600 transition-all duration-200">Details</Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ApplyJobs;