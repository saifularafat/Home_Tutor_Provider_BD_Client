import Loading from "../../../../../Components/Loading/Loading";

const PendingHire = ({ pendingHire, refetch, isLoading }) => {

    console.log("pendingHire Hire 5 ==>>", pendingHire);

    if (isLoading) {
        return <Loading />
    }
    return (
        <div>
            <h3>Thi is Pending Hire</h3>
        </div>
    );
};

export default PendingHire;