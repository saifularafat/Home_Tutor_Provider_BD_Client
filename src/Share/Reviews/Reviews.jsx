import ReviewsCard from "./ReviewsCard";

const Reviews = () => {
    return (
        <div className="max-w-5xl mx-auto md:pb-10 pb-5 md:px-10 px-4 shadow-lg rounded-lg bg-white">
            <div className="divider"><span className="text-xl font-semibold text-slate-500">Ratings and Reviews</span></div>
            <div className="grid grid-cols-6 gap-5">
                <div className="col-span-2 bg-blue-100 w-full py-8 rounded-lg text-center space-y-3">
                    <h6 className="text-4xl font-bold text-slate-700">4.50</h6>
                    <div>
                        <div className="rating rating-md">
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                            <input
                                type="radio"
                                name="rating-7"
                                className="mask mask-star-2 bg-orange-400" />
                            <input
                                type="radio"
                                name="rating-7"
                                className="mask mask-star-2 bg-orange-400" />
                            <input
                                type="radio"
                                name="rating-7"
                                className="mask mask-star-2 bg-orange-400"
                                defaultChecked
                            />
                            <input
                                type="radio"
                                name="rating-7"
                                className="mask mask-star-2 bg-orange-400" />
                        </div>
                    </div>
                    <p className="text-base font-medium">365 Reviews</p>
                </div>
                <div className="col-span-4  w-full rounded-lg text-center space-y-3">
                    <div className="flex items-center gap-3">
                        <p className="text-lg font-medium text-slate-600">5</p>
                        <input type="range" min={0} max="100" value="80" className="range range-md [--range-shdw:#FB923C]" />
                    </div>
                    <div className="flex items-center gap-3">
                        <p className="text-lg font-medium text-slate-600">4</p>
                        <input type="range" min={0} max="100" value="60" className="range range-md [--range-shdw:#FB923C]" />
                    </div>
                    <div className="flex items-center gap-3">
                        <p className="text-lg font-medium text-slate-600">3</p>
                        <input type="range" min={0} max="100" value="40" className="range range-sm [--range-shdw:#FB923C]" />
                    </div>
                    <div className="flex items-center gap-3">
                        <p className="text-lg font-medium text-slate-600">2</p>
                        <input type="range" min={0} max="100" value="20" className="range range-xs [--range-shdw:#FB923C]" />
                    </div>
                    <div className="flex items-center gap-3">
                        <p className="text-lg font-medium text-slate-600">1</p>
                        <input type="range" min={0} max="100" value="10" className="range range-xs [--range-shdw:#FB923C]" />
                    </div>
                </div>
            </div>

            <div className="py-6 ">
                <ReviewsCard />
            </div>
        </div>
    );
};

export default Reviews;