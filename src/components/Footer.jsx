import React from 'react';

const Footer = () => {
    return (
        <div className='  bg-white'>
            <footer className="footer max-w-7xl w-11/12 mx-auto pt-10 md:pt-16 lg:pt-24 text-base-content border-base-300 border-b px-10 py-4">
                <nav className="text-center mx-auto">
                    <div className='text-center mx-auto'>
                        <h2 className=' text-2xl md:text-3xl font-bold'>Gadget Heaven</h2>
                        <p className='text-base pt-3 pb-6 font-medium text-gray-400'>Leading the way in cutting-edge technology and innovation.</p>
                    </div>
                </nav>
            </footer>
 
            <footer className="footer max-w-7xl w-11/12 mx-auto text-center pb-10 md:pb-16 lg:pb-24 text-base-content p-10">
                <nav className='mx-auto flex items-center flex-col'>
                    <h6 className="footer-title opacity-100 text-lg">Services</h6>
                    <a className="link link-hover leading-6 text-gray-400 ">Product Support</a>
                    <a className="link link-hover leading-6 text-gray-400 ">Order Tracking</a>
                    <a className="link link-hover leading-6 text-gray-400 ">Shipping & Delivery</a>
                    <a className="link link-hover leading-6 text-gray-400 ">Returns</a>
                </nav>
                <nav className='mx-auto flex items-center flex-col'>
                    <h6 className="footer-title text-gray-950 opacity-100 text-lg">Company</h6>
                    <a className="link link-hover leading-6 text-gray-400 ">About us</a>
                    <a className="link link-hover leading-6 text-gray-400 ">Careers</a>
                    <a className="link link-hover leading-6 text-gray-400 ">Contact</a>
          
                </nav>
                
                <nav className='mx-auto flex items-center flex-col'>
                    <h6 className="footer-title opacity-100 text-lg">Legal</h6>
                    <a className="link link-hover leading-6 text-gray-400 ">Terms of Service</a>
                    <a className="link link-hover leading-6 text-gray-400 ">Privacy Policy</a>
                    <a className="link link-hover leading-6 text-gray-400 ">Cookie Policy</a>
                </nav>
            </footer>

        </div>
    );
};

export default Footer;