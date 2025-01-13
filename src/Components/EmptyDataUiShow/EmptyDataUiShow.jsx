const EmptyDataUiShow = () => {
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="text-center">
                <h1 className="text-2xl font-semibold text-red-500">No Data Available</h1>
                <p className="text-gray-700 mt-2">Please check back later or add new data to view it here.</p>
            </div>
        </div>
    );
};

export default EmptyDataUiShow;
