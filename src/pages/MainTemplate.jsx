import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MainTemplate = () => {
    
    return (
        <div className="">
           <Navbar></Navbar>
           <div className=" mx-auto">
            <Outlet></Outlet>
           </div>
           <Footer></Footer>
           <ToastContainer />
        </div>
    );
};

export default MainTemplate;