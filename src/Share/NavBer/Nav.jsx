import { NavLink } from "react-router-dom";

const Nav = () => {
    return (
        <div className="">
            <ul className="md:flex items-center gap-4 md:mx-3 mx-2 pt-4">
                <li>
                    <NavLink
                        to="/"
                        className={({ isActive }) => (isActive ? "activeNav" : "defaultNav")}>
                       Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="tuition-jobs"
                        className={({ isActive }) => (isActive ? "activeNav" : "defaultNav")}>
                        Tuition Jobs
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="tutor-profile"
                        className={({ isActive }) => (isActive ? "activeNav" : "defaultNav")}>
                        Tutor Profile
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="contact-us"
                        className={({ isActive }) => (isActive ? "activeNav" : "defaultNav")}>
                        Contact Us
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="login"
                        className={({ isActive }) => (isActive ? "regisLogin" : "regisLogin")}>
                        Login
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="registrationView"
                        className={({ isActive }) => (isActive ? "regisLogin" : "regisLogin")}>
                        Registration
                    </NavLink>
                </li>
            </ul>
        </div>
    );
};

export default Nav;