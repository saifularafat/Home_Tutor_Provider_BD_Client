import { useState } from "react";

const ReviewsCard = () => {


    return (
        <div className="flex flex-wrap justify-center gap-7 pb-10">
            {reviews.map((review) => {
                const words = review.reviewText.split(" ");
                const shortText = words.slice(0, 17).join(" ");
                const isExpanded = expandedReview === review.id; // Check if this review is expanded

                return (
                    <div key={review.id} className="card bg-base-100 w-96 shadow-xl hover:shadow-2xl hover:shadow-sky-100 mb-5"> {/* Adjusted card size */}
                        <div className="px-6 py-5">
                            <div className="flex items-center gap-3">
                                <img
                                    width={500}
                                    height={500}
                                    className="size-14 rounded-full bg-slate-500 object-cover"
                                    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2080&auto=format&fit=crop"
                                    alt="avatar"
                                />
                                <div>
                                    <h2 className="text-xl font-medium text-slate-800 capitalize">{review.name}</h2>
                                    <p className="text-sm font-medium text-slate-500">Guardian ID: {review.guardianId}</p>

                                    {/* rating */}
                                    <div className="rating rating-sm">
                                        <input type="radio" name={`rating-${review.id}`} className="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name={`rating-${review.id}`} className="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name={`rating-${review.id}`} className="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name={`rating-${review.id}`} defaultChecked className="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name={`rating-${review.id}`} className="mask mask-star-2 bg-orange-400" />
                                    </div>
                                </div>
                            </div>

                            {/* Conditional rendering of text */}
                            <p className="text-base text-slate-600 pt-3">
                                {isExpanded ? review.reviewText : `${shortText}...`}
                            </p>

                            {/* Show Read More/Read Less if text exceeds 17 words */}
                            {words.length > 17 && (
                                <div className="card-actions justify-end pt-5">
                                    <button
                                        onClick={() => handleToggle(review.id)}
                                        className="text-sm font-medium text-red-500 hover:underline hover:text-red-600 transition-all duration-200 tracking-wide"
                                    >
                                        {isExpanded ? "Read Less" : "Read More"}
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default ReviewsCard;
