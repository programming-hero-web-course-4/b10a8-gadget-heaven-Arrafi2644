import { Link } from "react-router-dom";
import bannerImg from '../assets/banner.jpg'

const HomeBanner = () => {

    return (
       <div className="bg-[#9538E2] w-full px-6 mx-auto pb-28 md:pb-48 lg:pb-64 rounded-b-xl pt-8 md:pt-12 relative mb-[160px] md:mb-[300px] lg:mb-[400px]">
         <div className="text-center text-white">
            <h1 className="w-full md:w-11/12 lg:w-4/5 mx-auto font-bold text-3xl md:text-4xl lg:text-5xl">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
            <p className="w-full md:w-4/5 lg:w-3/5 mx-auto mt-6 leading-6">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
            <Link to='/dashboard'><button className="btn mt-8 border-2 border-white rounded-3xl text-[#9538E2] hover:bg-[#9538E2] hover:text-white">Shop Now</button></Link>
        </div>
        <div className="w-4/5 mx-auto border-2 border-white absolute left-1/2 -translate-x-1/2 p-6 mt-8 md:mt-12  rounded-3xl bg-[#ffffff38]">
            <img className="w-full h-full rounded-3xl max-h-[611px]" src={bannerImg} alt="" />
        </div>
       </div>
    );
};

export default HomeBanner;