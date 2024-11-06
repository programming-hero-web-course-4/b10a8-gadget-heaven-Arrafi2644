import { Link, NavLink, useLocation } from "react-router-dom";
import '../components/DashBanner.css'

const DashBanner = ({heading, subheading}) => {
    const {pathname} = useLocation();
    // console.log(pathname);
    return (
        <div className="py-8 bg-[#9538E2] ">
             <div className="w-11/12 md:h-4/5 lg:w-3/5 mx-auto text-white text-center">
             <h2 className=" font-bold text-2xl md:3xl">Dashboard</h2>
             <p className="mt-4">Welcome to your Gadget Heaven dashboard, where you can easily manage your orders, track purchases, and stay updated with the latest tech trends.</p>
             <div className="flex gap-6 items-center justify-center mt-8">
                <NavLink to='/dashboard'><button className={`btn btn-outline bg hover:bg-white hover:text-[#9538E2] hover:border-white  px-8 rounded-3xl bg-none border border-white ${pathname === '/dashboard' ? 'bg-white text-[#9538E2] ' : 'text-white'} `}>Cart</button></NavLink>
                <NavLink to='/dashboard/wishlist'><button className={`btn btn-outline hover:bg-white hover:text-[#9538E2] hover:border-white px-8 rounded-3xl bg-none border border-white ${pathname === '/dashboard/wishlist' ? 'bg-white text-[#9538E2]' : 'text-white'}`}>Wishlist</button></NavLink>
             </div>
             </div>

             
        </div>
    );
};

export default DashBanner;