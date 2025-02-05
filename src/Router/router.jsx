import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Error from "../pages/Error/Error";

import Home from "../pages/Home/Home/Home";
import TuitionJobs from "../pages/TuitionJobsAllPage/TuitionJobs/TuitionJobs";
import TutorProfile from "../pages/TutorAllPage/TutorProfile/TutorProfile";
import ContactUs from "../pages/ContactUs/ContactUs";
import About from "../pages/About/About";
import TermsOfUser from "../pages/TermsOfUser/TermsOfUser";
// general
import Login from "../pages/Login/Login";
import Registration from "../pages/Registration/Registration";
import RegistrationView from "../pages/RegistrationView/RegistrationView";
// publish page
import TuitionDetails from "../pages/TuitionJobsAllPage/TuitionDetails/TuitionDetails";
import TutorProfileDetails from "../pages/TutorAllPage/TutorProfileDetails/TutorProfileDetails";
import TutorHireRequest from "../pages/TutorAllPage/TutorHireRequest/TutorHireRequest";
// secret page
import Dashboard from "../Layouts/Dashboard";
import Profile from "../pages/Deashboard/Profile/Profile";
import Notice from "../pages/Deashboard/Notice/Notice";
// parent page
import ParentHome from "../pages/Deashboard/Parent/ParentHome/ParentHome";
import ApplyJobs from "../pages/Deashboard/Parent/ApplyJobs/ApplyJobs";
import ParentProfileUpdate from "../pages/Deashboard/Parent/ParentProfileUpdate/ParentProfileUpdate";
import ParentNoticeBoard from "../pages/Deashboard/Parent/ParentNoiceBoard/ParentNoticeBoard";
import JobRequestHistory from "../pages/Deashboard/Parent/JobRequestHistory/JobRequestHistory";
import EnrolPremiumHistory from "../pages/Deashboard/Parent/EnrolPremiumHistory/EnrolPremiumHistory";
import AddMeeting from "../pages/Deashboard/Parent/AddMeeting/AddMeeting";
import StudentAnalytics from "../pages/Deashboard/Parent/StudentAnalytics/StudentAnalytics";
// tutor page
import TutorHome from "../pages/Deashboard/Tutor/TutorHome/TutorHome";
import AddBlog from "../pages/Deashboard/Tutor/AddBlog/AddBlog";
import JoinMeeting from "../pages/Deashboard/Tutor/JoinMeeting/JoinMeeting";
import TutorUpdateProfile from "../pages/Deashboard/Tutor/TutorHome/TutorUpdateProfile/TutorUpdateProfile";
// admin page
import AdminHome from "../pages/Deashboard/Admin/AdminHome/AdminHome/AdminHome";
import AllUserManage from "../pages/Deashboard/Admin/AllUsersManage/AllUserMaage/AllUserManage";
import AllPayments from "../pages/Deashboard/Admin/AllPayments/AllPayments/AllPayments";
import TermsAndCondition from "../pages/Deashboard/Admin/TermsAndCondition/TermsAndCondition";
import AllTutor from "../pages/Deashboard/Admin/AllTutor/AllTutor/AllTutor";
import AllJobsRequestApprove from "../pages/Deashboard/Admin/AllJobsRequest&Approve/AllJobsRequest&Approve/AllJobsRequestApprove";
import HireTutorRequestAndPending from "../pages/Deashboard/Admin/TutorJobsRequest/HireTutorRequest/HireTutorRequestAndPending";
import CreateNotice from "../pages/Deashboard/Admin/CreateNotice/CreateNotice/CreateNotice";
import AllTuitionJobs from "../pages/Deashboard/Admin/AllJobTuition/AllJobTuition/AllTuitionJobs";
import AllBlog from "../pages/Deashboard/Admin/AllBlog/AllBlog/AllBlog";
import DownloadAndPdfZone from "../pages/Deashboard/Admin/DownloadAndPdfZone/DownloadAndPdfZone/DownloadAndPdfZone";
import InboxMessage from "../pages/Deashboard/Admin/InboxMessage/InboxMessage/InboxMessage";
import CoachingCenterAdmin from "../pages/Deashboard/Admin/CoachingCenterAdmin/CoachingCenterAdmin/CoachingCenterAdmin";
import ShowYourBlog from "../pages/Deashboard/Tutor/ShowYourBlog/ShowYourBlog";
import EditBlogById from "../pages/Deashboard/Tutor/EditBlogById/EditBlogById";
import ParentApply from "../pages/Deashboard/Tutor/ParentApply/ParentApply";
import TuitionJobCreate from "../pages/Deashboard/Admin/TuitionJobCreate/TuitionJobCreate";
import ActivateUser from "../pages/ActivateUser/ActivateUser";
import TuitionJobApplyForm from "../pages/TuitionJobsAllPage/TuitionJobApplyForm/TuitionJobApplyForm";
import TuitionJobApplyDetails from "../pages/TuitionJobApplyDetails/TuitionJobApplyDetails";
import HireTutorApplyDetails from "../pages/HireTutorApplyDetails/HireTutorApplyDetails";
import LeaderBoardWithTutor from "../pages/Deashboard/LeaderBoardWithTutor/LeaderBoardWithTutor";
import CoachingHome from "../pages/Deashboard/Coacging/CoachingHome/CoachingHome";

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
			// TODO PROTOCOL WITH ROUTER
			{
				path: "/tuition-job-apply/:id",
				element: <TuitionJobApplyForm />,
			},
			// TODO PROTOCOL WITH ROUTER
			{
				path: "/tutor-profile",
				element: <TutorProfile />,
			},
			{
				path: "/tutor-details/:id",
				element: <TutorProfileDetails />,
			},
			// TODO PROTOCOL WITH ROUTER
			{
				path: "/tuition-job-apply/details/:id",
				element: <TuitionJobApplyDetails />,
			},
			{
				path: "/tutor-hire-request/:id",
				element: <TutorHireRequest />,
			},
			// TODO PROTOCOL WITH ROUTER
			{
				path: "/hire-tutor-apply/details/:id",
				element: <HireTutorApplyDetails />,
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
				element: <RegistrationView />,
			},
			{
				path: "/api/users/activate/:token",
				element: <ActivateUser />,
			},
			{
				path: "/terms-condition",
				element: <TermsOfUser />,
			},

			// TODO PROTOCOL WITH ROUTER
			{
				path: "/leader-board-with-tutor",
				element: <LeaderBoardWithTutor />,
			},
		],
	},
	{
		path: "/login",
		element: <Login />,
	},
	{
		path: "/registration/parent",
		element: <Registration />,
	},
	{
		path: "/registration/tutor",
		element: <Registration />,
	},
	{
		path: "/registration/coaching",
		element: <Registration />,
	},

	///// DASHBOARD /////
	// TODO PROTOCOL WITH ROUTER
	{
		path: "/dashboard",
		element: <Dashboard />,
		children: [
			// Admin Dashboard Routes
			{
				path: "/dashboard/admin-home",
				element: <AdminHome />,
			},
			{
				path: "/dashboard/manage-all-users",
				element: <AllUserManage />,
			},
			{
				path: "/dashboard/all-payments",
				element: <AllPayments />,
			},
			{
				path: "/dashboard/all-jobs-request-approve",
				element: <AllJobsRequestApprove />,
			},
			{
				path: "/dashboard/hire-tutor-request-approve",
				element: <HireTutorRequestAndPending />,
			},
			{
				path: "/dashboard/create-tuition-job",
				element: <TuitionJobCreate />,
			},
			{
				path: "/dashboard/create-notice",
				element: <CreateNotice />,
			},
			{
				path: "/dashboard/all-tuition-jobs",
				element: <AllTuitionJobs />,
			},
			{
				path: "/dashboard/all-tutor",
				element: <AllTutor />,
			},
			{
				path: "/dashboard/coaching-center",
				element: <CoachingCenterAdmin />,
			},
			{
				path: "/dashboard/all-blog",
				element: <AllBlog />,
			},
			{
				path: "/dashboard/download-and-pdf-zone",
				element: <DownloadAndPdfZone />,
			},
			{
				path: "/dashboard/admin-inbox-message",
				element: <InboxMessage />,
			},
			{
				path: "/dashboard/terms-and-condition",
				element: <TermsAndCondition />,
			},

			// Tutor Dashboard Routes
			{
				path: "/dashboard/tutor-home",
				element: <TutorHome />,
			},
			{
				path: "/dashboard/apply-jobs",
				element: <ApplyJobs />,
			},
			{
				path: "/dashboard/parent-tutor-apply",
				element: <ParentApply />,
			},
			{
				path: "/dashboard/your-blog",
				element: <ShowYourBlog />,
			},
			{
				path: "/dashboard/edit-blog/:id",
				element: <EditBlogById />,
			},
			{
				path: "/dashboard/add-blog",
				element: <AddBlog />,
			},
			{
				path: "/dashboard/join-meeting",
				element: <JoinMeeting />,
			},
			{
				path: "/dashboard/tutor-update-profile/:id",
				element: <TutorUpdateProfile />,
			},
			{
				path: "/dashboard/noticeBoard",
				element: <Notice />,
			},

			// Parent Dashboard Routes
			{
				path: "/dashboard/parent-home",
				element: <ParentHome />,
			},
			{
				path: "/dashboard/parent-profile-update/:id",
				element: <ParentProfileUpdate />,
			},
			{
				path: "/dashboard/parent-notice-board",
				element: <ParentNoticeBoard />,
			},
			{
				path: "/dashboard/job-request-history",
				element: <JobRequestHistory />,
			},
			{
				path: "/dashboard/payment-history",
				element: <EnrolPremiumHistory />,
			},
			{
				path: "/dashboard/join-meeting",
				element: <AddMeeting />,
			},
			{
				path: "/dashboard/student-analytics",
				element: <StudentAnalytics />,
			},
			{
				path: "/dashboard/profile",
				element: <Profile />,
			},
			// COACHING CENTER DASHBOARD ROUTER
			{
				path: "/dashboard/coaching-center-home",
				element: <CoachingHome />,
			},
		],
	},
]);
export default router;
