import { useEffect, useState } from "react";
import SectionTitle from "../../../../Components/SectionTitle/SectionTitle";
import { useAllRatings } from "../../../../api/useAllRatings";
import Loading from "../../../../Components/Loading/Loading";
import { array } from "../../../../../data";

const Testimonial = () => {
    const [currentSlider, setCurrentSlider] = useState(0);

    const [payload, refetch, isLoading] = useAllRatings();
    const { rating = [], pagination = {} } = payload || { rating: [], pagination: {} };

    const sortedRatings = [...rating].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

    const testimonials = sortedRatings.length > 0 ? sortedRatings : array;

    const prevSlider = () =>
        setCurrentSlider((currentSlider) =>
            currentSlider === 0 ? testimonials.length - 1 : currentSlider - 1
        );

    const nextSlider = () =>
        setCurrentSlider((currentSlider) =>
            currentSlider === testimonials.length - 1 ? 0 : currentSlider + 1
        );

    useEffect(() => {
        const intervalId = setInterval(nextSlider, 5000);
        return () => clearInterval(intervalId);
    }, [testimonials]);


    const isSmallScreen = window.innerWidth <= 768;


    const renderStars = (ratingValue) => {
        const filledStars = Math.min(Math.max(ratingValue, 0), 5); 
        const emptyStars = 5 - filledStars; 

        const filledStarIcons = [...Array(filledStars)].map((_, idx) => (
            <svg key={`filled-${idx}`} xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5 text-yellow-400" viewBox="0 0 24 24">
                <path d="M12 .587l3.668 7.431 8.2 1.189-5.93 5.784 1.398 8.14-7.536-3.96-7.536 3.96 1.398-8.14-5.93-5.784 8.2-1.189z"/>
            </svg>
        ));
        const emptyStarIcons = [...Array(emptyStars)].map((_, idx) => (
            <svg key={`empty-${idx}`} xmlns="http://www.w3.org/2000/svg" fill="none" className="w-5 h-5 text-gray-300" viewBox="0 0 24 24">
                <path d="M12 .587l3.668 7.431 8.2 1.189-5.93 5.784 1.398 8.14-7.536-3.96-7.536 3.96 1.398-8.14-5.93-5.784 8.2-1.189z"/>
            </svg>
        ));
        return [...filledStarIcons, ...emptyStarIcons];
    };

    if (isLoading) {
        return <Loading />;
    }
    
    return (
        <>
            <SectionTitle sectionName="Testimonial" />
            <div className="container md:min-w-[350px] mx-auto md:h-[280px] flex flex-row items-center overflow-hidden md:gap-5 gap-3 lg:gap-10 px-6 md:px-6 lg:px-5 md:pb-10 pb-7 md:pt-8 pt-4">
                <div className="relative overflow-hidden">
                    <div className="absolute w-full h-full flex items-center justify-between z-50 md:px-5 ">
                        {/* arrow left */}
                        <button onClick={prevSlider} className="flex justify-center items-center hover:bg-white/30 rounded-full w-6 h-6 md:w-8 md:h-8">
                            <svg viewBox="0 0 1024 1024" className="w-4 h-4 md:w-6 md:h-6 icon" xmlns="http://www.w3.org/2000/svg" fill="black"> <g strokeWidth="0"></g> <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g> <g id="SVGRepo_iconCarrier"><path fill="black" d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"></path></g>
                            </svg>
                        </button>
                        {/* arrow right */}
                        <button onClick={nextSlider} className="flex justify-center items-center hover:bg-white/30 rounded-full w-6 h-6 md:w-8 md:h-8">
                            <svg viewBox="0 0 1024 1024" className="w-4 h-4 md:w-6 md:h-6 icon" xmlns="http://www.w3.org/2000/svg" fill="black" transform="rotate(180)"> <g strokeWidth="0"></g> <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g> <g id="SVGRepo_iconCarrier"> <path fill="black" d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z" ></path></g>
                            </svg>
                        </button>
                    </div>
                    {/* slider container */}
                    <div
                        className="ease-linear duration-300 flex"
                        style={{ transform: `translateX(-${currentSlider * (isSmallScreen ? 100 : 50)}%)` }} >
                        {/* sliders */}
                        {testimonials.map((rating) => (
                            <div key={rating?._id} className="md:p-3 p-1 min-w-full md:min-w-[50%]">
                                <div className="h-full md:p-8 p-3 rounded shadow-[0px_4px_12px_rgba(0,0,0,0.1)]">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        className="block w-5 h-5 text-slate-800 mb-4"
                                        viewBox="0 0 975.036 975.036"
                                    >
                                        <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                                    </svg>
                                    <p className="leading-relaxed md:mb-6 mb-3 text-gray-500">
                                        {rating.review || rating.testimonialDescription}
                                    </p>
                                    <div className="flex space-x-1 mb-4">
                                        {renderStars(rating?.rating || 0)} 
                                    </div>
                                    <a className="inline-flex items-center">
                                        <img
                                            className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                                            src={`https://source.unsplash.com/200x200/?person`}
                                            alt="user photo"
                                        />
                                        <span className="flex-grow flex flex-col md:pl-4 pl-3">
                                            <span className="font-medium text-gray-900">
                                                {rating.guardianEmail || rating.name}
                                            </span>
                                            <div className="flex  items-center justify-between">
                                                <span className="text-gray-500 text-sm">
                                                    {rating.designation || "User"}
                                                </span>
                                                <span className="font-normal text-xs">
                                                    {new Date(rating?.createdAt).toLocaleDateString()}{" "}
                                                    {new Date(rating?.createdAt).toLocaleTimeString()}
                                                </span>
                                            </div>
                                        </span>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Testimonial;