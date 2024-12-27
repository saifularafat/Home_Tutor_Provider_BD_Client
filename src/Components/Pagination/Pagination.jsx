const Pagination = ({ totalPage, currentPage, nextPage, setPage, previousPage }) => {
    const handleNextPage = () => {
        if (nextPage <= totalPage && nextPage !== null) {
            setPage(nextPage); // Move to the next page
        }
    };

    const handlePreviousPage = () => {
        if (previousPage > 0) {
            setPage(previousPage); // Go to the previous page
        }
    };

    return (
        <div className='flex justify-center items-center gap-3 bg-white p-2 shadow-lg rounded-2xl mb-6 w-fit mx-auto select-none'>
            {/* Left Arrow */}
            <div 
                onClick={handlePreviousPage} 
                className={`hover:scale-110 scale-100 transition-all duration-200 cursor-pointer bg-sky-100 px-1 py-1 rounded-md ${previousPage === 0 ? 'cursor-not-allowed opacity-50 bg-sky-50' : ''}`}
            >
                <svg className='w-8' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 7L10 12L15 17" stroke="#0284C7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div> 

            {/* Page Numbers */}
            <div className='flex justify-center items-center gap-2'>
                {[...Array(totalPage).keys()].map((item) => (
                    <div 
                        key={item} 
                        onClick={() => setPage(item + 1)} 
                        className={`cursor-pointer hover:scale-110 text-sm scale-100 transition-all duration-200 px-3 ${
                            currentPage === item + 1 ? 'bg-sky-500 text-white' : 'bg-white'
                        } border-sky-300 font-semibold text-gray-700 py-[6px] rounded-md`}
                    >
                        {item + 1}
                    </div>
                ))}
            </div>

            {/* Right Arrow */}
            <div 
                onClick={handleNextPage} 
                className={`hover:scale-110 scale-100 transition-all duration-200 cursor-pointer bg-sky-100 px-1 py-1 rounded-md 
                    ${nextPage > totalPage || nextPage === null ? 'cursor-not-allowed opacity-50 bg-sky-50' : ''
                }`}
            >
                <svg className='w-8' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 7L15 12L10 17" stroke="#0284C7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>
        </div>
    );
};

export default Pagination;
