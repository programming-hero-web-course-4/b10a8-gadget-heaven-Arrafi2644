import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const MainTemplate = () => {
    return (
        <div className="max-w-7xl mx-auto">
           <Navbar></Navbar>
           <div className="w-11/12 mx-auto">
            <Outlet></Outlet>
           </div>
           <Footer></Footer>
        </div>
    );
};

export default MainTemplate;