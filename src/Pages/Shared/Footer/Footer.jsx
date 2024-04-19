import { Link } from "react-router-dom";
import logo from '../../../assets/NavabrLogo.png';
import { IoIosCall } from "react-icons/io";
import { AiOutlineMail } from "react-icons/ai";
import { FaLocationDot } from "react-icons/fa6";
import { ImFacebook2 } from "react-icons/im";
import { ImLinkedin } from "react-icons/im";
import { SiGithub } from "react-icons/si";
import { IoLogoWhatsapp } from "react-icons/io";

const Footer = () => {
    return (
        <div className="bg-[#dee4ff] py-6 px-5 xl:pt-16 xl:px-[200px]">
            {/* xl */}
            <div className="hidden xl:block">
                <div className="grid grid-cols-3">
                    <div className="col-span-1 flex flex-col items-start pr-40">
                        <Link to={'/'}>
                            <div className='cursor-pointer'>
                                <img className='w-80 -ml-5 -mt-5' src={logo} alt="" />
                            </div>
                        </Link>
                        <p className="text-gray-600 text-sm">
                            Driven by your unwavering dedication to business growth, we bring to the table the invaluable experience and expertise needed to guarantee your success!
                        </p>
                    </div>
                    <div className="col-span-1 flex flex-col items-center">
                        <h2 className="text-gray-500 text-xl text-center font-semibold">Our Menus</h2>
                        <div className="flex justify-center mt-4">
                            <div className="">
                                <Link to={'/addContacts'}><p className='text-base mb-2 hover:text-[#4B6FFF] font-medium text-gray-600'>Add Contacts</p></Link>
                                <Link to={'/allContacts'}><p className='text-base mb-2 hover:text-[#4B6FFF] font-medium text-gray-600'>All Contacts</p></Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-span-1 flex flex-col items-end">
                        <h2 className="text-gray-500 text-xl text-center font-semibold">Our Social</h2>
                        <div className="flex justify-center items-center gap-3 mt-4">
                            <a target="_blank" className='text-[#0A66C2] bg-white text-4xl' href="https://www.linkedin.com/in/sirajul-islam-41845a2a0/">
                                <ImLinkedin></ImLinkedin>
                            </a>
                            <a target="_blank" className='text-[#0866FF] bg-white text-4xl' href="https://www.facebook.com/WKmohammad.sakil">
                                <ImFacebook2></ImFacebook2>
                            </a>
                            <a target="_blank" className='text-black bg-white text-4xl rounded-full' href="https://github.com/siraj3838">
                                <SiGithub></SiGithub>
                            </a>
                            <a target="_blank" className='text-[#25D366] text-[40px] p-0' href="https://wa.me/01741352039" title="Share on whatsapp">
                                <IoLogoWhatsapp></IoLogoWhatsapp>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            {/* mobile */}
            <div className="xl:hidden block">
                <div className="">
                    <div className="flex flex-col items-center">
                        <Link to={'/'}>
                            <div className='flex items-center gap-1 cursor-pointer'>
                                <img className='' src={logo} alt="" />
                            </div>
                        </Link>
                        <p className="text-center">
                            Driven by your unwavering dedication to business growth, we bring to the table the invaluable experience and expertise needed to guarantee your success!
                        </p>
                    </div>
                    <div className="mt-4 text-left border-t-2 border-gray-500 pt-2">
                        <h2 className="text-gray-500 text-xl font-semibold mb-3">Our Menus</h2>
                        <div className="">
                            <div className="">
                                <Link to={'/addContacts'}><p className='text-base mb-2 textBox'>Add Contacts</p></Link>
                                <Link to={'/allContacts'}><p className='text-base mb-2 textBox'>All Contacts</p></Link>
                            </div>
                        </div>
                    </div>
                    <div className="text-left border-t-2 border-gray-500 py-2">
                        <h2 className="text-gray-500 text-xl font-semibold">Our Information</h2>
                        <div className="flex mt-4 mr-6">
                            <div className="xl:ml-44 space-y-3">
                                <div className='flex items-center gap-3'>
                                    <a className='text-lg flex items-center gap-3 hover:text-[#4B6FFF]' href="tel:01741352039"><span className='text-xl'><IoIosCall /></span>+880-1741352039</a>
                                </div>
                                <div>
                                    <a className='text-lg flex items-center gap-3 hover:text-[#4B6FFF]' href="mailto:sirajul.islam583853@gmail.com?body=My custom mail body"><span className='text-xl'><AiOutlineMail /></span> sirajul.islam583853@gmail.com</a>
                                </div>
                                <div>
                                    <a className='text-lg flex items-center gap-3 hover:text-[#4B6FFF]' target='_blank' href="https://maps.app.goo.gl/AzSiz6LUVsPUsi377"><span className='text-xl mb-7 md:mb-0'><FaLocationDot /></span> Bidyakut, Brahmanbaria, Bangladesh</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="border-t-2 border-gray-500 pt-2">
                        <h2 className="text-gray-500 text-xl text-left font-semibold">Our Social</h2>
                        <div className="flex justify-start items-center gap-3 mt-4">
                            <a target="_blank" className='text-[#0A66C2] bg-white text-4xl' href="https://www.linkedin.com/in/sirajul-islam-41845a2a0/">
                                <ImLinkedin></ImLinkedin>
                            </a>
                            <a target="_blank" className='text-[#0866FF] bg-white text-4xl' href="https://www.facebook.com/WKmohammad.sakil">
                                <ImFacebook2></ImFacebook2>
                            </a>
                            <a target="_blank" className='text-black bg-white text-4xl rounded-full' href="https://github.com/siraj3838">
                                <SiGithub></SiGithub>
                            </a>
                            <a target="_blank" className='text-[#25D366] text-[40px] p-0' href="https://wa.me/01741352039" title="Share on whatsapp">
                                <IoLogoWhatsapp></IoLogoWhatsapp>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            {/* Copyright */}
            <div className="border-t-2 border-gray-300 pt-3 mt-4 text-center text-gray-400">
                <p>Copyright © 2024 - All right reserved by Contact Management</p>
            </div>
        </div>
    );
};

export default Footer;