import { Link, NavLink, useLoaderData, useLocation } from "react-router-dom";
import { IoCartOutline, IoHeartOutline } from "react-icons/io5"
import '../components/Navbar.css'
import { useEffect, useState } from "react";
import { getProductsFromLocal, handleGetProductsFromLocal, handleSetProductToLocal } from ".";
import Details from "../pages/Details";


const Navbar = () => {

    // const data = useLoaderData();

    // const [cartProducts, setCartProducts] = useState(0);
    // const [wishlist, setWishList] = useState(0);

  

    // useEffect(()=>{
    //    const products =  handleGetProductsFromLocal()
    //    setCartProducts(products.length);
    //    const wishlistProducts = getProductsFromLocal()
    //    setWishList(wishlistProducts.length);
    // }, [data])

const {pathname} = useLocation();

    return (
        <div className="">
            <div className={`navbar max-w-7xl w-11/12 mx-auto rounded-t-xl  ${pathname === '/' ? 'text-white bg-[#9538E2]' : 'text-[#9538E2] bg-none'} p-6`}>
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost pl-0 lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-gray-950 ">
                            <li className="font-bold"><NavLink to='/'>Home</NavLink></li>
                            <li className="font-bold"><NavLink to='/statistics'>Statistics</NavLink></li>
                            <li className="font-bold"><NavLink to='/dashboard'>Dashboard</NavLink></li>
                            <li className="font-bold"><NavLink to='/about'>About Us</NavLink></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost pl-0 text-xl font-bold">Gadget Heaven</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li className="font-bold"><NavLink to='/'>Home</NavLink></li>
                        <li className="font-bold"><NavLink to='/statistics'>Statistics</NavLink></li>
                        <li className="font-bold"><NavLink to='/dashboard'>Dashboard</NavLink></li>
                        <li className="font-bold"><NavLink to='/about'>About Us</NavLink></li>
                    </ul>
                </div>
                <div className="navbar-end flex gap-2 items-center">
                    <Link to='/dashboard' className={`relative text-gray-950 font-medium p-2 text-lg rounded-full border ${pathname === '/' ? 'bg-white' : 'bg-none'} `}> <IoCartOutline /></Link>
                    <Link to='/dashboard/wishlist' className={` relative text-gray-950 font-medium p-2 text-lg rounded-full border ${pathname === '/' ? 'bg-white' : 'bg-none'}`}><IoHeartOutline /></Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;