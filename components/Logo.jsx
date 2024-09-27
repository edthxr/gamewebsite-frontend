"use client";
import React, { useEffect } from 'react';
import { motion } from 'framer-motion'; 
import 'aos/dist/aos.css'; 
import AOS from 'aos'; 
import Link from 'next/link'; 

const Logo = ({ downloadRef }) => {
  useEffect(() => {
    AOS.init(); 
  }, []);

  
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 2 } },
  };

  const handlePlayNowClick = () => {
   
    downloadRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.section
      className="flex bg-transparent flex-col items-center justify-center h-screen overflow-hidden relative"
      initial="hidden" 
      animate="visible" 
      variants={fadeIn} 
    >
      <div className="absolute inset-0 bg-logogame bg-cover bg-center animate-sparkle"></div>
      <div className="absolute inset-0 bg-black opacity-25"></div>
      
      <motion.h1
        className="text-8xl font-extrabold text-white text-center font-pixelify relative z-10"
        initial="hidden" 
        animate="visible" 
        variants={fadeIn} 
        data-aos="fade-up" 
      >
        Sunset Grove
      </motion.h1>
      
      <button
        className='relative z-10 p-12 border-2 text-white text-lg font-bold rounded-full mt-10 overflow-hidden group hover:text-black'
        onClick={handlePlayNowClick}
      >
        <span className="absolute inset-0 bg-white transform translate-y-full transition-transform duration-300 ease-in-out group-hover:translate-y-0"></span>
        <span className="relative">PLAY NOW</span>
      </button>
    </motion.section>
  );
};

export default Logo;
