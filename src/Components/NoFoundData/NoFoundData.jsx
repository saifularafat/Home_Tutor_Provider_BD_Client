
const NoJobFound = ({ message = "No job found.", onRetry }) => {
    return (
        <div className="flex flex-col items-center justify-center py-10">
            <img 
                src="https://via.placeholder.com/150?text=No+Data" 
                alt="No Data Found" 
                className="w-32 h-32 mb-5"
            />
            <h2 className="text-lg font-semibold text-gray-700">{message}</h2>
            {onRetry && (
                <button 
                    onClick={onRetry} 
                    className="mt-5 px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
                >
                    Retry
                </button>
            )}
        </div>
    );
};

export default NoJobFound;
