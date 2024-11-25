import PageTitleShow from "../../../../../Components/PageTitleShow/PageTitleShow";
import InfoCart from "./InfoCart";

const AdminHome = () => {
    return (
        <div className="py-10">
            <PageTitleShow currentPage="Admin Home" />
            <InfoCart />
        </div>
    );
};

export default AdminHome;