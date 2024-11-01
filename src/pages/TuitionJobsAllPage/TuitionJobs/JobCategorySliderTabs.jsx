import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import "./jobCategorySliderTabs.css"

const JobCategorySliderTabs = () => {

    const tabsBox = document.querySelector(".tabs-box")
    let isDragging = true;

    const dragging = (e) => {
        if (!isDragging) return;
        tabsBox.scrollLeft -= e.movementX;
    }

    const dragStop = () => {
        isDragging = false;
    }

    tabsBox.addEventListener("mousedown", () => isDragging = true)
    tabsBox.addEventListener("mousemove", dragging)
    document.addEventListener("mouseup", dragStop)

    return (
        <div className="flex items-center justify-between w-full  scroll-tars-container overflow-hidden">
            <div className="left-arrow bg-sky-600 p-2 rounded-full text-white hover:bg-blue-700 transition-all duration-200 hover:translate-y-0.5">
                <FaChevronLeft className="text-2xl" id="left" />
            </div>
            <ul className="flex items-center gap-7 px-4 py-4 mx-10 tabs-box">
                <li>
                    <Link to="" className="bg-blue-400 py-2 px-3 text-lg font-medium text-white rounded-2xl tracking-wide">
                        Dhaka
                    </Link>
                </li>
                <li>
                    <Link to="" className="bg-orange-400 py-2 px-3 text-lg font-medium text-white rounded-2xl tracking-wide">
                        Chittagong
                    </Link>
                </li>
                <li>
                    <Link to="" className="bg-red-500 py-2 px-3 text-lg font-medium text-white rounded-2xl tracking-wide">
                        Barisal
                    </Link>
                </li>
                <li>
                    <Link to="" className="bg-sky-500 py-2 px-3 text-lg font-medium text-white rounded-2xl tracking-wide">
                        Khulna
                    </Link>
                </li>
                <li>
                    <Link to="" className="bg-lime-400 py-2 px-3 text-lg font-medium text-white rounded-2xl tracking-wide">
                        Syhlet
                    </Link>
                </li>
                <li>
                    <Link to="" className="bg-green-500 py-2 px-3 text-lg font-medium text-white rounded-2xl tracking-wide">
                        Rangpur
                    </Link>
                </li>
                <li>
                    <Link to="" className="bg-teal-600 py-2 px-3 text-lg font-medium text-white rounded-2xl tracking-wide">
                        Rashahi
                    </Link>
                </li>
                <li>
                    <Link to="" className="bg-cyan-600 py-2 px-3 text-lg font-medium text-white rounded-2xl tracking-wide">
                        Cumilla
                    </Link>
                </li>
                <li>
                    <Link to="" className="bg-pink-400 py-2 px-3 text-lg font-medium text-white rounded-2xl tracking-wide">
                        Maimonsing
                    </Link>
                </li>
            </ul>
            <div className="right-arrow bg-sky-600 p-2 rounded-full text-white hover:bg-blue-700 transition-all duration-200 hover:translate-y-0.5">
                <FaChevronRight className="text-2xl" id="right" />
            </div>
        </div>
    );
};

export default JobCategorySliderTabs;