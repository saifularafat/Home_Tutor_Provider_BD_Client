import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Error from "../pages/Error/Error";

import Home from "../pages/Home/Home/Home";
import TuitionJobs from "../pages/TuitionJobsAllPage/TuitionJobs/TuitionJobs";
import TutorProfile from "../pages/TutorAllPage/TutorProfile/TutorProfile";
import ContactUs from "../pages/ContactUs/ContactUs";
import About from "../pages/About/About";
import TermsOfUser from "../pages/TermsOfUser/TermsOfUser";

import Login from "../pages/Login/Login";
import Registration from "../pages/Registration/Registration";
import RegistrationView from "../pages/RegistrationView/RegistrationView";

import TuitionDetails from "../pages/TuitionJobsAllPage/TuitionDetails/TuitionDetails";
import TutorProfileDetails from "../pages/TutorAllPage/TutorProfileDetails/TutorProfileDetails";
import TutorHireRequest from "../pages/TutorAllPage/TutorHireRequest/TutorHireRequest";

import Dashboard from "../Layouts/Dashboard";
import Profile from "../pages/Deashboard/Profile/Profile";
import Notice from "../pages/Deashboard/Notice/Notice";

import ParentHome from "../pages/Deashboard/Parent/ParentHome/ParentHome";
import ApplyJobs from "../pages/Deashboard/Parent/ApplyJobs/ApplyJobs";
import ProfileUpdate from "../pages/Deashboard/Parent/ProfileUpdate/ProfileUpdate";
import ParentNoticeBoard from "../pages/Deashboard/Parent/ParentNoiceBoard/ParentNoticeBoard";
import JobRequestHistory from "../pages/Deashboard/Parent/JobRequestHistory/JobRequestHistory";
import EnrolPremiumHistory from "../pages/Deashboard/Parent/EnrolPremiumHistory/EnrolPremiumHistory";
import AddMeeting from "../pages/Deashboard/Parent/AddMeeting/AddMeeting";
import StudentAnalytics from "../pages/Deashboard/Parent/StudentAnalytics/StudentAnalytics";

import TutorHome from "../pages/Deashboard/Tutor/TutorHome/TutorHome";
import AddBlog from "../pages/Deashboard/Tutor/AddBlog/AddBlog";
import JoinMeeting from "../pages/Deashboard/Tutor/JoinMeeting/JoinMeeting";
import TutorUpdateProfile from "../pages/Deashboard/Tutor/TutorHome/TutorUpdateProfile/TutorUpdateProfile";

import AdminHome from "../pages/Deashboard/Admin/AdminHome/AdminHome/AdminHome";
import AllUserManage from "../pages/Deashboard/Admin/AllUsersManage/AllUserMaage/AllUserManage";
import AllPayments from "../pages/Deashboard/Admin/AllPayments/AllPayments/AllPayments";
import TermsAndCondition from "../pages/Deashboard/Admin/TermsAndCondition/TermsAndCondition";
import AllTutor from "../pages/Deashboard/Admin/AllTutor/AllTutor/AllTutor";
import AllRequestApprove from "../pages/Deashboard/Admin/AllRequest&Approve/AllRequest&Approve/AllRequestApprove";
import TutorJobsRequest from "../pages/Deashboard/Admin/TutorJobsRequest/TutorJobsRequest/TutorJobsRequest";
import CreateNotice from "../pages/Deashboard/Admin/CreateNotice/CreateNotice/CreateNotice";
import AllJobTuition from "../pages/Deashboard/Admin/AllJobTuition/AllJobTuition/AllJobTuition";
import AllBlog from "../pages/Deashboard/Admin/AllBlog/AllBlog/AllBlog";
import DownloadAndPdfZone from "../pages/Deashboard/Admin/DownloadAndPdfZone/DownloadAndPdfZone/DownloadAndPdfZone";
import InboxMessage from "../pages/Deashboard/Admin/InboxMessage/InboxMessage/InboxMessage";
import CoachingCenterAdmin from "../pages/Deashboard/Admin/CoachingCenterAdmin/CoachingCenterAdmin/CoachingCenterAdmin";

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
                path: "/tutor-hire-request/:id",
                element: <TutorHireRequest />,
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
            },
            {
                path: "/terms-condition",
                element: <TermsOfUser />
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




    ///// DASHBOARD /////
    {
        path: "/dashboard",
        element: (
            <Dashboard />
        ),
        children: [
            // Admin Dashboard Routes
            {
                path: "/dashboard/admin-home",
                element: (
                    <AdminHome />
                ),
            },
            {
                path: "/dashboard/manage-all-users",
                element: (
                    <AllUserManage />
                ),
            },
            {
                path: "/dashboard/all-payments",
                element: (
                    <AllPayments />
                ),
            },
            {
                path: "/dashboard/all-request-approve-jobs",
                element: (
                    <AllRequestApprove />
                ),
            },
            {
                path: "/dashboard/tutor-jobs-request",
                element: (
                    <TutorJobsRequest />
                ),
            },
            {
                path: "/dashboard/create-notice",
                element: (
                    <CreateNotice />
                ),
            },
            {
                path: "/dashboard/all-job-tuition",
                element: (
                    <AllJobTuition />
                ),
            },
            {
                path: "/dashboard/all-tutor",
                element: (
                    <AllTutor />
                ),
            },
            {
                path: "/dashboard/coaching-center",
                element: (
                    <CoachingCenterAdmin />
                ),
            },
            {
                path: "/dashboard/all-blog",
                element: (
                    <AllBlog />
                ),
            },
            {
                path: "/dashboard/download-and-pdf-zone",
                element: (
                    <DownloadAndPdfZone />
                ),
            },
            {
                path: "/dashboard/admin-inbox-message",
                element: (
                    <InboxMessage />
                ),
            },
            {
                path: "/dashboard/terms-and-condition",
                element: (
                    <TermsAndCondition />
                ),
            },

            // Tutor Dashboard Routes
            {
                path: "/dashboard/tutor-home",
                element: (
                    <TutorHome />
                ),
            },
            {
                path: "/dashboard/apply-jobs",
                element: (
                    <ApplyJobs />
                ),
            },
            {
                path: "/dashboard/add-blog",
                element: (
                    <AddBlog />
                ),
            },
            {
                path: "/dashboard/join-meeting",
                element: (
                    <JoinMeeting />
                ),
            },
            {
                path: "/dashboard/tutor-update-profile",
                element: (
                    <TutorUpdateProfile />
                ),
            },
            {
                path: "/dashboard/noticeBoard",
                element: (
                    <Notice />
                ),
            },

            // Parent Dashboard Routes
            {
                path: "/dashboard/parent-home",
                element: (
                    <ParentHome />
                ),
            },
            {
                path: "/dashboard/profile-update",
                element: (
                    <ProfileUpdate />
                ),
            },
            {
                path: "/dashboard/parent-notice-board",
                element: (
                    <ParentNoticeBoard />
                ),
            },
            {
                path: "/dashboard/job-request-history",
                element: (
                    <JobRequestHistory />
                ),
            },
            {
                path: "/dashboard/payment-history",
                element: (
                    <EnrolPremiumHistory />
                ),
            },
            {
                path: "/dashboard/join-meeting",
                element: (
                    <AddMeeting />
                ),
            },
            {
                path: "/dashboard/student-analytics",
                element: (
                    <StudentAnalytics />
                ),
            },
            {
                path: "/dashboard/profile",
                element: (
                    <Profile />
                ),
            },
        ]
    }

]);
export default router;