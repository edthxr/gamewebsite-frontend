"use client";
import { useEffect } from "react"; // นำเข้า useEffect
import { motion } from "framer-motion";
import { BiSolidQuoteLeft } from "react-icons/bi";
import { fadeInOnScroll } from "@/motion/motionVariants";
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

// Initialize AOS
const Testimonial = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 }); // Initialize AOS with desired settings
    }, []);

    const testimonials = [
        {
            name: "John",
            message: "Sunset Grove is an amazing adventure! The graphics are stunning and the gameplay is so immersive."
        },
        {
            name: "Neymar",
            message: "I love how the game combines farming and exploration. It keeps me engaged for hours!"
        },
        {
            name: "Rooney",
            message: "The characters are so well-developed. I feel like I'm part of their story every time I play."
        },
        {
            name: "CR",
            message: "I was surprised by the depth of the game mechanics. There's always something new to discover!"
        },
        {
            name: "Messi",
            message: "The soundtrack perfectly complements the beautiful visuals. It's a game I can't stop playing."
        },
        {
            name: "Tony",
            message: "Every time I log in, I feel like I'm in a different world. Sunset Grove has set a new standard for RPGs!"
        },
        {
            name: "Klopp",
            message: "The community aspect of the game makes it even better. I love trading with friends and exploring together."
        },
    ];

    return (
        <section className="w-full xl:py-24 mb-24 xl:mb-32 flex justify-center items-center">
            <div className="overflow-hidden">
                {/* Header Text */}
                <motion.div variants={fadeInOnScroll(0.2, 0.4)} initial="hidden" whileInView="visible">
                    <h2 className="h2 mt-[50px] text-[50px] font-bold mb-4 text-center">What Players Are Saying</h2>
                    <p className="lead text-center text-[25px] font-bold text-black/60 mb-24">Hear directly from players about their experiences in Sunset Grove.</p>
                </motion.div>
                {/* Card List */}
                <div>
                    <motion.div
                        variants={fadeInOnScroll(0.2, 0.6)}
                        initial="hidden"
                        whileInView="visible"
                        className="flex">
                        <motion.div
                            initial={{ x: 0 }}
                            animate={{ x: "-100%" }}
                            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                            className="flex">
                            {testimonials.map((item, index) => (
                                <div
                                    key={index}
                                    data-aos="fade-up" // Add AOS animation
                                    data-aos-duration="1000" // Set duration for the animation
                                    className="relative w-[460px] h-[300px] bg-gray-100  mr-12 rounded-2xl flex flex-col justify-center px-14">
                                    <BiSolidQuoteLeft className="text-accent mb-3 text-3xl" />
                                    <p className="mb-4 text-lg text-black/80">{item.message}</p>
                                    <p className="text-xl">{item.name}</p>
                                </div>
                            ))}
                        </motion.div>

                        <motion.div
                            initial={{ x: 0 }}
                            animate={{ x: "-100%" }}
                            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                            className="flex">
                            {testimonials.map((item, index) => (
                                <div
                                    key={index}
                                    data-aos="fade-up" // Add AOS animation
                                    data-aos-duration="1000" // Set duration for the animation
                                    className="relative w-[460px] h-[300px] bg-[#ffffff] mr-12 rounded-2xl flex flex-col justify-center px-14">
                                    <BiSolidQuoteLeft className="text-accent mb-3 text-3xl" />
                                    <p className="mb-4 text-lg text-black/80">{item.message}</p>
                                    <p className="text-xl">{item.name}</p>
                                </div>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export default Testimonial;
