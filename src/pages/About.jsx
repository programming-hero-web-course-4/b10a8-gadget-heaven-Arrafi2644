import React from 'react';
import AboutBanner from '../components/AboutBanner';
import { Helmet } from 'react-helmet';
import aboutImg from '../assets/about.jfif'
import { TbTruckDelivery } from "react-icons/tb";
import { MdOutlineStore } from "react-icons/md";
import { RiTeamFill } from "react-icons/ri";
import { GrStatusGood } from "react-icons/gr";

const About = () => {
    return (
        <div className=''>
            <AboutBanner></AboutBanner>

            <div className='max-w-7xl w-11/12 mx-auto'>
                <div className="hero bg-base-200 my-10 md:my-16">
                    <div className="hero-content flex-col lg:flex-row-reverse gap-6">
                        <div className='w-full md:w-1/2'>
                        <img
                            src='https://i.ibb.co.com/ZNTf5RB/about-D93-MGy-SC.jpg'
                            className=" rounded-lg shadow-2xl w-full" />
                        </div>
                        <div className='w-full md:w-1/2'>
                            <h3 className="text-2xl font-semibold mb-2">Who we are</h3>
                            <h2 className="text-4xl md:text-5xl font-bold">About market</h2>
                            <p className="py-6">
                                At Gadget Heaven, we specialize in providing high-quality tech accessories and gadgets through a seamless eCommerce experience. Discover innovative, reliable products designed to enhance your digital life, all curated to meet your needs and elevate your tech lifestyle.
                            </p>
                            <button className="btn text-white bg-[#9538E2] rounded-3xl">View Products</button>
                        </div>
                    </div>
                </div>

                <div className='my-10 md:my-16 text-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                    <div className='p-6 rounded-xl bg-white'>
                        <div className='mb-4 '>
                        < GrStatusGood  className='text-[100px] lg:text-[80px] mx-auto'/>
                        </div>
                        <div>
                            <h2 className='text-2xl md:text-3xl font-bold mb-4'>The best World sorts</h2>
                            <p>Gadget Heaven delivers top-quality tech accessories and gadgets, offering a seamless online shopping experience to enhance your lifestyle.</p>
                        </div>
                    </div>
                    <div className='p-6 rounded-xl bg-white'>
                        <div className='mb-4'>
                        <MdOutlineStore   className='text-[100px] lg:text-[80px] mx-auto'/>
                        </div>
                        <div>
                            <h2 className='text-2xl md:text-3xl font-bold mb-4'>Many points of sale</h2>
                            <p>Gadget Heaven provides multiple points of sale, ensuring easy access to top-quality tech accessories and gadgets for everyone.</p>
                        </div>
                    </div>
                    <div className='p-6 rounded-xl bg-white'>
                        <div className='mb-4'>
                        < RiTeamFill  className='text-[100px] lg:text-[80px] mx-auto'/>
                        </div>
                        <div>
                            <h2 className='text-2xl md:text-3xl font-bold mb-4'>Professional Team</h2>
                            <p>Our professional team ensures high-quality service, delivering expert solutions and exceptional customer experiences every time.</p>
                        </div>
                    </div>
                    <div className='p-6 rounded-xl bg-white'>
                        <div className='mb-4'>
                        < TbTruckDelivery  className='text-[100px] lg:text-[80px] mx-auto'/>
                        </div>
                        <div>
                            <h2 className='text-2xl md:text-3xl font-bold mb-4'>24/7 fast delivery</h2>
                            <p>Enjoy 24/7 fast delivery, ensuring your tech gadgets and accessories arrive quickly and conveniently whenever you need them.</p>
                        </div>
                    </div>
                </div>

               <div className='my-10 mt-12 md:my-16'>
                <h2 className='text-xl font-bold text-center'>Our Clients Says</h2>
                <h2 className='mb-8 text-3xl md:text-5xl font-bold text-center'>Our Skills</h2>

               <div className=' text-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                    <div className='p-6 rounded-xl bg-white'>
                        <div className='mb-4 '>
                       <h2 className='text-4xl font-bold'>380</h2>
                        </div>
                        <div>
                            <h2 className='text-2xl md:text-3xl font-bold mb-4'>Online Stores</h2>
                            <p>Our online store offers a user-friendly shopping experience, featuring a wide range of high-quality gadgets and accessories.</p>
                        </div>
                    </div>
                    <div className='p-6 rounded-xl bg-white'>
                        <div className='mb-4'>
                       <h2 className='text-4xl font-bold'>19</h2>
                    
                        </div>
                        <div>
                            <h2 className='text-2xl md:text-3xl font-bold mb-4'>Product Types</h2>
                            <p>Gadget Heaven provides multiple points of sale, ensuring easy access to top-quality tech accessories and gadgets for everyone.</p>
                        </div>
                    </div>
                    <div className='p-6 rounded-xl bg-white'>
                        <div className='mb-4'>
            
                       <h2 className='text-4xl font-bold'>12</h2>
                        </div>
                        <div>
                            <h2 className='text-2xl md:text-3xl font-bold mb-4'>Years Experience</h2>
                            <p>With years of experience in the tech industry, we provide expert guidance and top-quality gadgets for every need.</p>
                        </div>
                    </div>
                    <div className='p-6 rounded-xl bg-white'>
                        <div className='mb-4'>
                       <h2 className='text-4xl font-bold'>858</h2>
                    
                        </div>
                        <div>
                            <h2 className='text-2xl md:text-3xl font-bold mb-4'>Happy Buyers</h2>
                            <p>Our skill lies in ensuring every customer is a happy buyer, delivering top-quality gadgets and exceptional service.</p>
                        </div>
                    </div>
                </div>
               </div>
            </div>



            <Helmet>
                <meta charSet="utf-8" />
                <title>About - Gadget Heaven</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
        </div>
    );
};

export default About;