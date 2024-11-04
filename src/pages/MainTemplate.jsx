import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const MainTemplate = () => {
    return (
        <div className="">
           <Navbar></Navbar>
           <div className=" mx-auto">
            <Outlet></Outlet>
           </div>
           <Footer></Footer>
        </div>
    );
};

export default MainTemplate;