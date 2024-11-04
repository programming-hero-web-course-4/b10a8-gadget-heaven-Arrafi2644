import { Link, NavLink } from "react-router-dom";
import { IoCartOutline, IoHeartOutline } from "react-icons/io5"


const Navbar = () => {
    return (
        <div className="">
            <div className="navbar max-w-7xl w-11/12 mx-auto mt-6 rounded-t-xl text-white bg-[#9538E2] p-6">
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
                            <li><NavLink to='/'>Home</NavLink></li>
                            <li><NavLink to='/statistics'>Statistics</NavLink></li>
                            <li><NavLink to='/dashboard'>Dashboard</NavLink></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost pl-0 text-xl font-bold">Gadget Heaven</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><NavLink to='/'>Home</NavLink></li>
                        <li><NavLink to='/statistics'>Statistics</NavLink></li>
                        <li><NavLink to='/dashboard'>Dashboard</NavLink></li>
                    </ul>
                </div>
                <div className="navbar-end flex gap-2 items-center">
                    <Link className="text-gray-950 font-medium p-2 text-lg rounded-full bg-white"> <IoCartOutline /></Link>
                    <Link className="text-gray-950 font-medium p-2 text-lg rounded-full bg-white"><IoHeartOutline /></Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;