import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import Footer from "../Pages/Shared/Footer/Footer";

const Root = () => {
    return (
        <div className="bg-[#f8f9fa]">
            <Navbar></Navbar>
            <div className='mt-[84px] lg:mt-[88px]'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;