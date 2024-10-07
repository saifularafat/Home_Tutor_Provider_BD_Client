import { Outlet } from "react-router-dom";
import NavBer from "../Share/NavBer/NavBer";

const Main = () => {
    return (
        <div>
            <NavBer />
            <p>Lorem ipsum dolor sit amet.</p>
            <div className="min-h-[calc(100vh-0px)]">
                <Outlet />
            </div>
        </div>
    );
};

export default Main;