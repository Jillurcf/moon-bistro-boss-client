import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";


const MainLaout = () => {
    return (
        <div>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLaout;