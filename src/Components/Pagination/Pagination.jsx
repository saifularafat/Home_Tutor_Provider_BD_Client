const Pagination = ({ totalPage, currentPage, nextPage, setPage, previousPage }) => {
    const handleNextPage = () => {
        if (nextPage <= totalPage) {
            setPage(nextPage);
        }
    };

    const handlePreviousPage = () => {
        if (previousPage > 0) {
            setPage(previousPage);
        }
    };

    return (
        <div className="flex justify-center items-center gap-4 py-4">
            <button
                onClick={handlePreviousPage}
                disabled={previousPage === 0}
                className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 disabled:opacity-50"
            >
                Previous
            </button>
            <span>
                Page {currentPage} of {totalPage}
            </span>
            <button
                onClick={handleNextPage}
                disabled={nextPage > totalPage}
                className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 disabled:opacity-50"
            >
                Next
            </button>
        </div>
    );
};

export default Pagination;
