import { FaBlog, FaCalendarAlt, FaCartArrowDown, FaChartBar, FaCog, FaHome, FaUser } from 'react-icons/fa';
import { MdCastForEducation, MdHomeWork, MdWork, MdWorkHistory } from 'react-icons/md';
import { FaClipboardQuestion, FaMessage, FaSchoolCircleCheck, FaUserPen, FaUsersViewfinder } from 'react-icons/fa6';
import { RiApps2AddFill, RiLiveFill, RiParentFill } from 'react-icons/ri';
import { AiFillNotification } from 'react-icons/ai';
import { BiBookAdd } from 'react-icons/bi';
import { IoBagAdd } from 'react-icons/io5';
import { SiFampay, SiLivejournal } from 'react-icons/si';
import { PiHandshakeFill } from 'react-icons/pi';
import { TbMessage2Question } from 'react-icons/tb';

const iconMappings = {
    RoleHome: MdHomeWork,
    Users: FaUser,
    Schedule: FaCalendarAlt,
    Question: FaClipboardQuestion,
    Analytics: FaChartBar,
    Home: FaHome,
    Setting: FaCog,
    Payment: SiFampay,
    Live: RiLiveFill,
    Blog: FaBlog,
    AddBlog: SiLivejournal,
    ParentApply: RiParentFill,
    AddTuitionJob: IoBagAdd,
    Notice: AiFillNotification,
    BookAdd: BiBookAdd,
    AddJob: IoBagAdd,
    Profile: FaUserPen,
    Meeting: FaUsersViewfinder,
    ReqJob: MdWorkHistory,
    TutorReq: PiHandshakeFill,
    JobTutor: MdHomeWork,
    SubDownZone: FaCartArrowDown,
    InboxMessage: FaMessage,
    TermsMessage: TbMessage2Question,
    AllTutor: MdCastForEducation,
    CoachingCenter: FaSchoolCircleCheck,
    TuitionAllYourJob: MdWorkHistory,
}
export const Menus = [
    {
        title: 'Admin Home',
        path: '/dashboard/admin-home',
        icon: iconMappings.RoleHome,
        role: 'admin',
        gap: true
    },
    {
        title: 'Users',
        path: '/dashboard/manage-all-users',
        icon: iconMappings.Users,
        role: 'admin'
    },
    {
        title: 'All Payments',
        path: '/dashboard/all-payments',
        icon: iconMappings.Payment,
        role: 'admin'
    },
    {
        title: 'Jobs Request-Approve',
        path: '/dashboard/all-jobs-request-approve',
        icon: iconMappings.ReqJob,
        role: 'admin'
    },
    {
        title: 'Hire Tutor Request-Pending',
        path: '/dashboard/hire-tutor-request-approve',
        icon: iconMappings.TutorReq,
        role: 'admin'
    },
    {
        title: 'Create Tuition Job',
        path: '/dashboard/create-tuition-job',
        icon: iconMappings.AddTuitionJob,
        role: 'admin'
    },
    {
        title: 'Create Notice',
        path: '/dashboard/create-notice',
        icon: iconMappings.Notice,
        role: 'admin'
    },
    {
        title: 'All Tuition Jobs',
        path: '/dashboard/all-tuition-jobs',
        icon: iconMappings.JobTutor,
        role: 'admin'
    },
    {
        title: 'All Tutor',
        path: '/dashboard/all-tutor',
        icon: iconMappings.AllTutor,
        role: 'admin'
    },
    {
        title: 'Coaching Center',
        path: '/dashboard/coaching-center',
        icon: iconMappings.CoachingCenter,
        role: 'admin'
    },
    {
        title: 'All Blog',
        path: '/dashboard/all-blog',
        icon: iconMappings.Blog,
        role: 'admin'
    },
    {
        title: 'Download & PDF Zone',
        path: '/dashboard/download-and-pdf-zone',
        icon: iconMappings.SubDownZone,
        role: 'admin'
    },
    {
        title: 'Inbox',
        path: '/dashboard/admin-inbox-message',
        icon: iconMappings.InboxMessage,
        role: 'admin'
    },
    {
        title: 'Terms And Condition',
        path: '/dashboard/terms-and-condition',
        icon: iconMappings.TermsMessage,
        role: 'admin'
    },
    // Admin router END
    // Tutor router END
    {
        title: 'Tutor Home ',
        path: '/dashboard/tutor-home',
        icon: iconMappings.RoleHome,
        role: 'isTutor',
        gap: true
    },
    {
        title: 'Apply Tuition Job',
        path: '/dashboard/apply-jobs',
        icon: iconMappings.AddJob,
        role: 'isTutor'
    },
    {
        title: 'Parent Apply',
        path: '/dashboard/parent-tutor-apply',
        icon: iconMappings.ParentApply,
        role: 'isTutor'
    },
    {
        title: 'Profile',
        path: '/dashboard/profile',
        icon: iconMappings.Profile,
        role: 'isTutor'
    },
    {
        title: 'Your Blog',
        path: '/dashboard/your-blog',
        icon: iconMappings.Blog,
        role: 'isTutor'
    },
    {
        title: 'Add Blog',
        path: '/dashboard/add-blog',
        icon: iconMappings.AddBlog,
        role: 'isTutor'
    },
    {
        title: 'Join Meeting',
        path: '/dashboard/join-meeting',
        icon: iconMappings.Meeting,
        role: 'isTutor'
    },
    {
        title: 'Notice Board',
        path: '/dashboard/noticeBoard',
        icon: iconMappings.Notice,
        role: 'isTutor'
    },
    // tutor router END
    // parent router START
    {
        title: 'Parent Home',
        path: '/dashboard/parent-home',
        icon: iconMappings.RoleHome,
        role: 'isParent',
        gap: true
    },
    {
        title: 'Job Request History',
        path: '/dashboard/job-request-history',
        icon: iconMappings.Payment,
        role: 'isParent'
    },
    {
        title: 'Enrol Premium History',
        path: '/dashboard/payment-history',
        icon: iconMappings.Payment,
        role: 'isParent'
    },
    {
        title: 'Profile',
        path: "/dashboard/profile",
        icon: iconMappings.Profile,
        role: 'isParent'
    },
    {
        title: 'Notice Board',
        path: '/dashboard/parent-notice-board',
        icon: iconMappings.Notice,
        role: 'isParent'
    },
    {
        title: 'Add Meeting',
        path: '/dashboard/join-meeting',
        icon: iconMappings.Live,
        role: 'isParent'
    },
    {
        title: 'Student Analytics',
        path: '/dashboard/student-analytics',
        icon: iconMappings.Analytics,
        role: 'isParent'
    },
    // parent router END
    // coaching router START
    {
        title: 'Coaching Home',
        path: '/dashboard/coaching-center-home',
        icon: iconMappings.RoleHome,
        role: 'isCoaching',
        gap: true
    },
    {
        title: 'Create Tuition Job',
        path: '/dashboard/create-tuition-job',
        icon: iconMappings.AddTuitionJob,
        role: 'isCoaching'
    },
    {
        title: 'All Tuition Jobs',
        path: '/dashboard/tuition-your-jobs',
        icon: iconMappings.TuitionAllYourJob,
        role: 'isCoaching'
    },
    {
        title: 'Enrol Premium History',
        path: '/dashboard/payment-history',
        icon: iconMappings.Payment,
        role: 'isCoaching'
    },
    {
        title: 'Profile',
        path: "/dashboard/profile",
        icon: iconMappings.Profile,
        role: 'isCoaching'
    },
    {
        title: 'Notice Board',
        path: '/dashboard/parent-notice-board',
        icon: iconMappings.Notice,
        role: 'isCoaching'
    },
    {
        title: 'Add Meeting',
        path: '/dashboard/join-meeting',
        icon: iconMappings.Live,
        role: 'isCoaching'
    },
    {
        title: 'Add Blog',
        path: '/dashboard/add-Blog',
        icon: iconMappings.AddBlog,
        role: 'isCoaching'
    },
    {
        title: 'Coaching Analytics',
        path: '/dashboard/coaching-analytics',
        icon: iconMappings.Analytics,
        role: 'isCoaching'
    },
    // coaching router END
    // general router START
    {
        title: 'Home ',
        path: '/',
        icon: iconMappings.Home,
        role: 'general',
        gap: true
    }
]

export const array = [
    {
        name: 'John Doe',
        designation: 'Student',
        testimonialDescription: 'Being a student, Taskiee has been my go-to tool for organizing assignments and study schedules. The visual timeline and reminder features have helped me stay on top of my coursework', keyWord: 'Child'
    },
    {
        name: 'Jane Doe',
        designation: 'Freelancer',
        testimonialDescription: 'Taskiee has been a game-changer for my freelance work. It allows me to effortlessly prioritize tasks, set realistic deadlines, and maintain a healthy work-life balance',
        keyWord: 'Gentlewoman'
    },
    {
        name: 'Shiyam Sarker',
        designation: 'Entrepreneur',
        testimonialDescription: "Taskiee's collaborative features have been instrumental in streamlining tasks for my startup. The ability to share projects and track progress with the team has enhanced our efficiency.",
        keyWord: 'Gentleman'
    },
    {
        name: 'Bob Smith',
        designation: 'Creative Professional',
        testimonialDescription: 'As a creative professional, Taskiee has simplified my project management. The clean design and goal tracking feature keep me inspired and organized throughout the creative process.',
        keyWord: 'Child'
    },
    {
        name: 'Eva Williams',
        designation: 'Remote Worker',
        testimonialDescription: "Taskiee's mobile app has made remote work a breeze for me. I can seamlessly manage tasks on the go, ensuring that I stay productive regardless of my location.",
        keyWord: 'Individual'
    },
    { name: 'Chris Brown', designation: 'Parent', testimonialDescription: 'Managing family schedules is no easy task, but Taskiee has made it seamless. From school activities to household chores, Taskiee keeps our family organized and on track.', keyWord: 'Boy' }, { name: 'Olivia Davis', designation: 'Health Professional', testimonialDescription: 'In the healthcare field, where time is crucial, Taskiee has become my ally. Its time tracking feature has allowed me to optimize patient care and manage administrative tasks efficiently.', keyWord: 'Girl' }, { name: 'Liam Wilson', designation: 'Researcher', testimonialDescription: "Taskiee's analytics feature has proven invaluable in my research endeavors. It provides insightful data on my productivity patterns, helping me refine my workflow and achieve research goals", keyWord: 'Toddler' }
];