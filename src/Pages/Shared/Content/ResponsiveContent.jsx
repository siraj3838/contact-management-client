import { TypeAnimation } from "react-type-animation";
// import img from '../../assets/contentImg.png'
// import img2 from '../../assets/contentImg2.png'
// import img3 from '../../assets/contentImg3.png'
// import up from '../../assets/up.png'
// import down from '../../assets/down.png'
import { motion } from "framer-motion";
import Headline from "../Headline/Headline";

const ResponsiveContent = () => {
    return (
        <div className="relative">
            <div className="bg-white py-10 xl:pt-16 xl:[100px] 2xl:px-[200px] px-5">
                <div className="absolute xl:right-32 lg:right-14 lg:top-[460px] xl:top-1/4 md:block hidden md:top-[300px] md:right-7">
                    {/* <img className="md:w-[120px] xl:w-3/4" src={down} alt="" /> */}
                </div>
                <div className="absolute lg:left-14 lg:top-[500px] xl:left-32 xl:top-1/4 md:block hidden md:top-[340px] md:left-4">
                    {/* <img className="md:w-[170px] xl:w-full" src={up} alt="" /> */}
                </div>
                <div className="flex flex-col md:flex-row items-center gap-10 py-6 md:py-0 lg:py-0 xl:py-16">
                    <div className="flex-1">
                        {/* <img src={img2} alt="" /> */}
                    </div>
                    <div className="flex-1 overflow-hidden">
                        <motion.div
                        >
                            {/* main header */}
                            <div>
                                {/* heading */}
                                <motion.div
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.5 }}
                                    transition={{ duration: 1 }}
                                    variants={{
                                        hidden: { opacity: 0, x: 50 },
                                        visible: { opacity: 1, x: 0 }
                                    }}
                                >

                                    <div className="border-r border-b border-[#772EFA] pr-4 pb-4 lg:pr-6 lg:pb-6">
                                        <Headline headline={'Responsive React.js'} secondHeadline={'Interface for Seamless Engagement'}></Headline>
                                        <p className="text-sm lg:text-lg">Transform your user experience with a cutting-edge React.js interface designed for effortless interaction. Our responsive design ensures that your application adapts seamlessly to any device, providing users with a consistent and intuitive experience across desktop, tablet, and mobile.</p>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>

                    </div>
                </div>
                {/* <div className="divider"></div>  */}
                <div className="flex flex-col md:flex-row items-center gap-10 py-6 md:py-8 lg:py-8 xl:py-16">
                    <div className="flex-1 overflow-hidden">
                        <motion.div
                            className="overflow-hidden"
                        >
                            {/* main header */}
                            <div>
                                {/* heading */}
                                <motion.div
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.5 }}
                                    transition={{ duration: 1.5 }}
                                    variants={{
                                        hidden: { opacity: 0, x: -50 },
                                        visible: { opacity: 1, x: 0 }
                                    }}
                                >

                                    <div className="border-l border-b border-[#772EFA] pr-4 pb-4 pl-4 lg:pl-6 lg:pb-6">
                                        <Headline headline={'MongoDB-Driven Backend with'} secondHeadline={'Node.js and Express.js'}></Headline>
                                        <p className="text-sm lg:text-lg">Empower your application with a robust backend powered by MongoDB, Node.js, and Express.js. Leverage the flexibility and scalability of MongoDB to efficiently store and retrieve data, while Node.js and Express.js facilitate rapid development and seamless integration of RESTful APIs.</p>
                                    </div>
                                </motion.div>

                            </div>
                        </motion.div>

                    </div>
                    <div className="flex-1">
                        {/* <img src={img} alt="" /> */}
                    </div>
                </div>
                {/* <div className="divider"></div>  */}
                <div className="flex flex-col md:flex-row items-center gap-10 py-6 md:py-8 lg:py-8 xl:pt-16">
                    <div className="flex-1">
                        {/* <img src={img3} alt="" /> */}
                    </div>
                    <div className="flex-1 overflow-hidden">
                        <motion.div
                            className="overflow-hidden"
                        >
                            {/* main header */}
                            <div>
                                {/* heading */}
                                <motion.div
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.5 }}
                                    transition={{ duration: 2 }}
                                    variants={{
                                        hidden: { opacity: 0, x: 50 },
                                        visible: { opacity: 1, x: 0 }
                                    }}
                                >

                                    <div className="border-r border-b border-[#772EFA] pr-4 pb-4 lg:pr-6 lg:pb-6">
                                        <Headline headline={'Utilize MongoDB Schemas and'} secondHeadline={'CRUD Operations for Contact Handling'}></Headline>
                                        <p className="text-sm lg:text-lg">Harness the full potential of MongoDB's schema flexibility and powerful CRUD operations for efficient contact management. Define clear and structured schemas to ensure data integrity, while utilizing MongoDB's native capabilities to handle Create, Read, Update, and Delete operations with ease.




</p>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>

                    </div>
                </div>
                {/* <div className="divider"></div>  */}
            </div>
        </div>
    );
};

export default ResponsiveContent;