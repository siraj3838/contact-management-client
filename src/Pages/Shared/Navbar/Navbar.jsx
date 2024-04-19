import { Link, NavLink } from "react-router-dom";
import logo from '../../../assets/NavabrLogo.png'
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { useState } from "react";






const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navList = <>

        <NavLink
            to="/addContacts"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#fff] text-lg font-semibold bg-[#1655EF] py-2 px-5 border-2 border-[#1655EF]" : "border-2 border-gray-600 hover:border-[#1655EF] py-2 px-5 text-lg font-semibold duration-500 text-gray-500 bg-[#fff] hover:text-[#fff] hover:bg-[#1655EF]"
            }
        >
            Add Contacts
        </NavLink>
        <NavLink
            to="/allContacts"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#fff] text-lg font-semibold bg-[#1655EF] py-2 px-5 border-2 border-[#1655EF]" : "border-2 border-gray-600 hover:border-[#1655EF] py-2 px-5 text-lg font-semibold duration-500 text-gray-500 bg-[#fff] hover:text-[#fff] hover:bg-[#1655EF]"
            }
        >
            All Contacts
        </NavLink>
    </>
    return (
        <div className="fixed z-50 top-0 w-full bg-[#f9f9f9]">
            {/* lg */}
            <div className='w-full px-5 2xl:px-[200px] py-2 hidden lg:block'>
                <div className="flex justify-between items-center">
                    <div className='flex-1'>
                        <Link to={'/'}>
                            <div className='flex items-center gap-1 cursor-pointer'>
                                <img className='w-72 -ml-5' src={logo} alt="" />
                            </div>
                        </Link>
                    </div>
                    <div className='flex-1 flex justify-end items-center'>
                        <div className='flex gap-5 items-center'>
                            {navList}
                        </div>
                    </div>

                </div>
            </div>
            {/* mobile */}
            <div className='px-5 py-2 block lg:hidden'>
                <div className="flex justify-between items-center">

                    <div className='flex-1'>
                        <Link to={'/'}>
                            <div className='flex justify-center items-center gap-1'>
                                <img className='w-80 md:w-80' src={logo} alt="" />
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            <div className='lg:hidden'>
                <ul className="flex items-center justify-center gap-6 z-50 bg-transparent pb-8">
                    <NavLink
                        to="/addContacts"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-[#fff] text-sm font-semibold bg-[#1655EF] py-1.5 px-4 border-2 border-[#1655EF]" : "border-2 border-gray-600 hover:border-[#1655EF] py-1.5 px-4 text-sm font-semibold duration-500 text-gray-500 bg-[#fff] hover:text-[#fff] hover:bg-[#1655EF]"
                        }
                    >
                        Add Contacts
                    </NavLink>
                    <NavLink
                        to="/allContacts"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-[#fff] text-sm font-semibold bg-[#1655EF] py-1.5 px-4 border-2 border-[#1655EF]" : "border-2 border-gray-600 hover:border-[#1655EF] py-1.5 px-4 text-sm font-semibold duration-500 text-gray-500 bg-[#fff] hover:text-[#fff] hover:bg-[#1655EF]"
                        }
                    >
                        All Contacts
                    </NavLink>
                </ul>
            </div>

        </div>
    );
};

export default Navbar;