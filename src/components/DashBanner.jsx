import { Link } from "react-router-dom";

const DashBanner = ({heading, subheading}) => {
    return (
        <div className="py-10 md:py-16 lg:py-24 bg-[#9538E2] ">
             <div className="w-11/12 md:h-4/5 lg:w-3/5 mx-auto text-white text-center">
             <h2 className=" font-bold text-2xl md: 3xl">Dashboard</h2>
             <p className="">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
             <div className="flex gap-6 items-center justify-center mt-8">
                <Link><button className="btn btn-outline hover:bg-white hover:text-[#9538E2] hover:border-white text-white px-8 rounded-3xl bg-none border border-white">Cart</button></Link>
                <Link><button className="btn btn-outline hover:bg-white hover:text-[#9538E2] hover:border-white text-white px-8 rounded-3xl bg-none border border-white">Wishlist</button></Link>
             </div>
             </div>
        </div>
    );
};

export default DashBanner;