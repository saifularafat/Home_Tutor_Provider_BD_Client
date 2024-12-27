
const ErrorComponent = ({ message = "An error occurred.", onRetry }) => {
    return (
        <div className="flex flex-col items-center justify-center py-10">
            <img
                src="https://via.placeholder.com/150?text=Error"
                alt="Error Occurred"
                className="w-32 h-32 mb-5"
            />
            <h2 className="text-lg font-semibold text-red-600">{message}</h2>
            {onRetry && (
                <button
                    onClick={onRetry}
                    className="mt-5 px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600"
                >
                    Retry
                </button>
            )}
        </div>
    );
};

export default ErrorComponent;
