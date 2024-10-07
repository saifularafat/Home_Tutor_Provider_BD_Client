import Logo from "./Logo";
import Nav from "./Nav";

const NavBer = () => {
    return (
        <div className=" md:block md:overflow-x-auto hidden md:border-y border-b-2 shadow-sm shadow-sky-400 border-sky-300 py-2 bg-white sticky top-0 z-40">
            <div className="container mx-auto py-1 flex justify-between ">
                <Logo />
                <Nav />
            </div>
        </div>
    );
};

export default NavBer;