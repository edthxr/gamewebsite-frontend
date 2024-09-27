"use client";
import React, { useEffect } from 'react';
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS styles
import Image from 'next/image'; // Import the Image component

const GamePage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with desired settings
  }, []);

  return (
    <section className="flex flex-col bg-hello items-center animate-sparkle justify-center min-h-screen overflow-hidden relative  ">
      {/* Background container with sparkle animation */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black opacity-80"></div> {/* Dark overlay */}
      </div>

      <h1
        className="text-4xl md:text-6xl lg:text-8xl font-extrabold text-white font-pixelify relative z-10 text-center px-4"
        data-aos="fade-up" // AOS animation
      >
        Enjoy your life
      </h1>
      
      <div className="relative z-10 text-center mt-6 px-4" data-aos="fade-up" data-aos-delay="300">
        <p className="text-lg md:text-xl text-white">
          Dive into the enchanting world of Sunset Grove and create your own adventure!
        </p>
      </div>
      
      <div className="flex justify-center mt-4" data-aos="fade-up" data-aos-delay="600">
        <Image
          src="/221837.gif" // Replace with your image path
          alt="Game Screenshot"
          width={300}
          height={200}
          className="rounded-lg shadow-md"
        />
      </div>
    </section>
  );
}

export default GamePage;
