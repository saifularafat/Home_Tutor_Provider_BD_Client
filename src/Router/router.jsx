import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Error from "../pages/Error/Error";
import Home from "../pages/Home/Home/Home";
import ContactUs from "../pages/ContactUs/ContactUs";
import TutorProfile from "../pages/TutorProfile/TutorProfile";
import TuitionJobs from "../pages/TuitionJobs/TuitionJobs";
import Login from "../pages/Login/Login";
import Registration from "../pages/Registration/Registration";
import About from "../pages/About/About";
import RegistrationView from "../pages/RegistrationView/RegistrationView";
import TuitionDetails from "../pages/TuitionDetails/TuitionDetails";
import TutorProfileDetails from "../pages/TutorProfileDetails/TutorProfileDetails";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/tuition-jobs",
                element: <TuitionJobs />,
            },
            {
                path: "/tuition-job-details/:id",
                element: <TuitionDetails />,
            },
            {
                path: "/tutor-profile",
                element: <TutorProfile />,
            },
            {
                path: "/tutor-details/:id",
                element: <TutorProfileDetails />,
            },
            {
                path: "/contact-us",
                element: <ContactUs />,
            },
            {
                path: "/about-us",
                element: <About />,
            },
            {
                path: "/registrationview",
                element: <RegistrationView />
            }
        ]
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/registration/parent",
        element: <Registration />
    },
    {
        path: "/registration/tutor",
        element: <Registration />
    },
    {
        path: "/registration/coaching",
        element: <Registration />
    },

]);
export default router;