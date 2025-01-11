import { useAllRatings } from "../../api/useAllRatings";
import ReviewsCard from "./ReviewsCard";

const Reviews = () => {
    // Fetch ratings data using custom hook
    const [payload, refetch, isLoading] = useAllRatings(1);
    const { rating = [], pagination = {} } = payload || { rating: [], pagination: {} };
    console.log("Rating By Reviews 0066 ==>>", payload);

    // Extracting the rating values from the array of objects
    const ratingsArray = rating.map((item) => item.rating);
    console.log("Extracted ratings:", ratingsArray);

    // Calculating the total of all ratings
    const totalRatingNumber = ratingsArray.reduce((acc, ratingValue) => acc + ratingValue, 0);
    console.log("Total rating number:", totalRatingNumber);


    // Calculate total ratings count
    const totalRatings = ratingsArray.length;

    // Calculate the average rating
    const averageRating = (ratingsArray.reduce((sum, rating) => sum + rating, 0) / totalRatings).toFixed(2);

    return (
        <div className="max-w-5xl mx-auto md:pb-10 pb-5 md:px-10 px-4 shadow-lg rounded-lg bg-white">
            {/* Header */}
            <div className="divider">
                <span className="text-xl font-semibold text-slate-500">Ratings and Reviews</span>
            </div>

            {/* Ratings Summary */}
            <div className="grid md:grid-cols-6 grid-cols-1 gap-5">
                {/* Average Rating Section */}
                <div className="md:col-span-2 col-span-1 bg-blue-100 w-full py-8 rounded-lg text-center space-y-3">
                    {/* Display the calculated average rating */}
                    <h6 className="text-4xl font-bold text-slate-700">{averageRating}</h6>
                    {/* Dynamically display star ratings */}
                    <div>
                        <div className="rating rating-md">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <input
                                    key={star}
                                    type="radio"
                                    name="rating-7"
                                    className={`mask mask-star-2 ${star <= Math.round(averageRating) ? "bg-orange-400" : "bg-gray-300"}`}
                                    readOnly
                                />
                            ))}
                        </div>
                    </div>
                    {/* Display total number of ratings */}
                    <p className="text-base font-medium">{totalRatings} Reviews</p>
                </div>

                {/* Rating Breakdown Section */}
                <div className="disabled md:col-span-4 col-span-1 w-full rounded-lg text-center space-y-3">
                    {[5, 4, 3, 2, 1].map((rating) => {
                        // Count occurrences of each rating in the array
                        const count = ratingsArray.filter((value) => value === rating).length;
                        return (
                            <div key={rating} className="flex items-center gap-3">
                                <p className="text-lg font-medium text-slate-600">{rating}</p>
                                <input
                                    disabled
                                    type="range"
                                    min={0}
                                    max={totalRatings}
                                    value={count}
                                    className="range range-md [--range-shdw:#FB923C]"
                                    readOnly
                                />
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Reviews Section */}
            <div className="md:py-6 py-3">
                <ReviewsCard />
            </div>
        </div>
    );
};

export default Reviews;
