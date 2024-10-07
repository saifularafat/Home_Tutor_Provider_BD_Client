import { Outlet } from "react-router-dom";
import Nav from "../Share/NavBer/Nav";

const Main = () => {
    return (
        <div>
            <Nav />
            <p>Lorem ipsum dolor sit amet.</p>
            <div className="min-h-[calc(100vh-0px)]">
                <Outlet />
            </div>
        </div>
    );
};

export default Main;