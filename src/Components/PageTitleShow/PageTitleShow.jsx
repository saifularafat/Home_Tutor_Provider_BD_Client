import { Helmet } from "react-helmet-async";

const PageTitleShow = ({currentPage}) => {
    return (
        <Helmet>
            <title> {`${currentPage}`} | Home Tutor Provider BD</title>
        </Helmet>

    );
};

export default PageTitleShow;