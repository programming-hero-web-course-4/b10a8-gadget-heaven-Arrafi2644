import { Link, NavLink, useLocation } from "react-router-dom";
import '../components/DashBanner.css'

const AboutBanner = ({heading, subheading}) => {
    const {pathname} = useLocation();
    console.log(pathname);
    return (
        <div className="py-8 bg-[#9538E2] ">
             <div className="w-11/12 md:h-4/5 lg:w-3/5 mx-auto text-white text-center">
             <h2 className=" font-bold text-2xl md:3xl">About Us</h2>
             <p className="mt-4">At Gadget Heaven, we specialize in offering premium tech accessories and gadgets that elevate your everyday life, providing quality, innovation, and an exceptional online shopping experience.</p>
             <div className="flex gap-6 items-center justify-center mt-8">
               
             </div>
             </div>
        </div>
    );
};

export default AboutBanner;