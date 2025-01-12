import { useState, useEffect } from "react";
import ReviewModal from "./ReviewModal";
import Loading from "../../Components/Loading/Loading";
import RatingStar from "./RatingStar";
import { useAllUsers } from "../../api/useAllUsers";
import Pagination from "../../Components/Pagination/Pagination";

const ReviewsCard = ({ rating, pagination, setPage, isLoading }) => {
    const [expandedReview, setExpandedReview] = useState(null);
    const [openModal, setOpenModal] = useState(false);
    const [selectedRating, setSelectedRating] = useState(5);
    const [usersWithRatings, setUsersWithRatings] = useState([]);
    const { currentPage, nextPage, previousPage, totalPage } = pagination;

    // Check if users data is available
    const [usersData] = useAllUsers();
    const { users } = usersData || {};

    // Function to find a user based on userEmail
    const getUserInfo = (userEmail) => {
        return users?.find(user => user.email === userEmail);
    };
    console.log("rating  =>>>>", rating);

    useEffect(() => {
        // Match ratings with corresponding user data based on userEmail
        if (rating && users) {
            const matchedUsersWithRatings = rating.map((review) => {
                const user = getUserInfo(review.userEmail);
                return user ? { ...review, userInfo: user } : null; // Combine rating with user info
            }).filter(review => review !== null); // Remove null values
            setUsersWithRatings(matchedUsersWithRatings);
        }
    }, [rating, users]);

    // Handle the toggle for expanding reviews
    const handleToggle = (id) => {
        setExpandedReview((prevExpandedReview) => (prevExpandedReview === id ? null : id));
    };

    if (isLoading) {
        return <Loading />;
    }

    return (
        <>
            <div className="flex flex-wrap justify-center gap-7 md:pb-10 pb-1">
                {usersWithRatings.map((review) => {
                    const words = review.review.split(" ");
                    const shortText = words.slice(0, 17).join(" ");
                    const isExpanded = expandedReview === review._id;

                    return (
                        <div key={review._id} className="card bg-base-100 w-96 shadow-xl hover:shadow-2xl hover:shadow-sky-100 mb-5">
                            <div className="px-6 py-5">
                                <div className="flex items-center gap-3">
                                    {/* user Information */}
                                    <img
                                        width={50}
                                        height={50}
                                        className="rounded-full bg-slate-500 object-cover"
                                        src={review.userInfo?.image || "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2080&auto=format&fit=crop"}
                                        alt="user-avatar"
                                    />
                                    <div className="userInformation">
                                        <h2 className="text-xl font-medium text-slate-800 capitalize">{review.userInfo?.name}</h2>
                                        <p className="text-sm font-medium text-slate-500">User ID: {review.userInfo?.userId}</p>
                                    </div>
                                </div>

                                {/* Rating */}
                                <div className="pt-3">
                                    <RatingStar id={review._id} star={review.rating} />
                                </div>

                                {/* Review Text */}
                                <p className="text-base text-slate-600 pt-3">
                                    {isExpanded ? review.review : `${shortText}...`}
                                </p>

                                {/* Show Read More/Read Less if text exceeds 15 words */}
                                {words.length > 15 && (
                                    <div className="card-actions justify-end pt-5">
                                        <button
                                            onClick={() => handleToggle(review._id)}
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

            {/* pagination */}
            <div className="flex justify-center">
                <Pagination
                    totalPage={totalPage}
                    currentPage={currentPage}
                    nextPage={nextPage}
                    setPage={setPage}
                    previousPage={previousPage}
                />
            </div>

            {/* Review Modal */}
            <ReviewModal
                users={users}
                setSelectedRating={setSelectedRating}
                openModal={openModal}
                setOpenModal={setOpenModal}
            />
        </>
    );
};

export default ReviewsCard;
