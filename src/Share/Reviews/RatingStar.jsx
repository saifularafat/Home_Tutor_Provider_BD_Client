const RatingStar = ({ id, star }) => {
    return (
        <div className="rating rating-sm">
            <input
                type="radio"
                name={`rating-${id}`}
                disabled
                defaultChecked={star >= 1}
                className="mask mask-star-2 bg-orange-400"
            />
            <input
                type="radio"
                name={`rating-${id}`}
                disabled
                defaultChecked={star >= 2}
                className="mask mask-star-2 bg-orange-400"
            />
            <input
                type="radio"
                name={`rating-${id}`}
                disabled
                defaultChecked={star >= 3}
                className="mask mask-star-2 bg-orange-400"
            />
            <input
                type="radio"
                name={`rating-${id}`}
                disabled
                defaultChecked={star >= 4}
                className="mask mask-star-2 bg-orange-400"
            />
            <input
                type="radio"
                name={`rating-${id}`}
                disabled
                defaultChecked={star >= 5}
                className="mask mask-star-2 bg-orange-400"
            />
        </div>
    );
};

export default RatingStar;
