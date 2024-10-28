import { Link } from "react-router-dom";

const FooterSecondPart = () => {
    return (
        <div className="md:col-span-2 col-span-2 w-full pl-3">
            <h2 className="md:text-2xl text-xl font-semibold text-slate-900">Quick Links</h2>
            <div className="md:pt-6 pt-3 space-y-2">
                <div>
                    <Link to="tutor-profile" className="md:text-base md:font-medium text-sm font-normal text-orange-600 hover:underline">Hire Tutor</Link>
                </div>
                <div>
                    <Link to="login" className="md:text-base md:font-medium text-sm font-normal text-orange-600 hover:underline">Login</Link>
                </div>
                <div>
                    <Link to="registrationview" className="md:text-base md:font-medium text-sm font-normal text-orange-600 hover:underline">Registration</Link>
                </div>
                <div>
                    <Link to="about-us" className="md:text-base md:font-medium text-sm font-normal text-orange-600 hover:underline">About us</Link>
                </div>
                <div>
                    <Link to="terms-condition" className="md:text-base md:font-medium text-sm font-normal text-orange-600 hover:underline">Terms of User</Link>
                </div>
                <div>
                    <Link to="registrationview" className="md:text-base md:font-medium text-sm font-normal text-orange-600 hover:underline">Join Our Team</Link>
                </div>
            </div>
        </div>
    );
};

export default FooterSecondPart;