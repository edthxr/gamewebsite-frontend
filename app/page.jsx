"use client";
import React, { useEffect, useRef } from "react";
import AOS from "aos"; 
import "aos/dist/aos.css"; 
import Image from "next/image";
import Pagedownload from "@/components/Pagedownload";
import Testimonial from "@/components/Testimonial";
import GamePage from "@/components/Gamepage";
import Logo from "@/components/Logo"; 

export default function Home() {
  const downloadRef = useRef(null); 
  useEffect(() => {
    AOS.init({ duration: 1000 }); 
  }, []);

  return (
    <main className="bg-white min-h-screen">
      <Logo downloadRef={downloadRef} /> {/* Pass the ref to Logo */}

      {/* About the Game Section */}
      <section className="py-16 px-6 md:px-20 bg-gray-50" id="about">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800" data-aos="fade-up">About the Game</h2>
          <p className="text-gray-600 mt-4" data-aos="fade-up" data-aos-delay="100">
            Explore, create, and thrive in Sunset Grove – the ultimate life simulation game.
          </p>
        </div>

        <div className="flex justify-center mb-8" data-aos="zoom-in">
          <Image
            src="/162106.gif"
            alt="Screenshot of Sunset Grove"
            width={600}
            height={400}
            className="rounded-lg shadow-md"
          />
        </div>

        {/* Adjusted grid to ensure text is centered in both columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center justify-items-center mx-auto">
          <div className="text-center" data-aos="fade-up">
            <h3 className="text-2xl font-semibold mb-4">Immersive Farming</h3>
            <p className="text-gray-700">🌾 Grow crops, harvest, and manage your farm with ease.</p>
          </div>
          <div className="text-center" data-aos="fade-up" data-aos-delay="100">
            <h3 className="text-2xl font-semibold mb-4">Adorable Animals</h3>
            <p className="text-gray-700">🐑 Raise animals and create a flourishing environment.</p>
          </div>
          <div className="text-center" data-aos="fade-up" data-aos-delay="200">
            <h3 className="text-2xl font-semibold mb-4">Customization</h3>
            <p className="text-gray-700">🏡 Design and personalize your home and farm to your style.</p>
          </div>
          <div className="text-center" data-aos="fade-up" data-aos-delay="300">
            <h3 className="text-2xl font-semibold mb-4">Explore a Vast World</h3>
            <p className="text-gray-700">🌌 Uncover secrets and explore beautifully crafted landscapes.</p>
          </div>
        </div>
      </section>

      {/* Gameplay Features Section with Cards */}
      <section className="py-16 px-6 md:px-20 bg-white">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800" data-aos="fade-up">
          Gameplay Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="bg-gray-100 rounded-lg shadow-lg p-6" data-aos="flip-left">
            <h3 className="text-xl font-bold mb-4">Farming</h3>
            <p>🌾 Grow crops, harvest, and manage your farm with ease.</p>
          </div>
          <div className="bg-gray-100 rounded-lg shadow-lg p-6" data-aos="flip-left" data-aos-delay="100">
            <h3 className="text-xl font-bold mb-4">Animal Care</h3>
            <p>🐑 Raise animals and create a flourishing environment.</p>
          </div>
          <div className="bg-gray-100 rounded-lg shadow-lg p-6" data-aos="flip-left" data-aos-delay="200">
            <h3 className="text-xl font-bold mb-4">Customization</h3>
            <p>🏡 Build and personalize your farm and home.</p>
          </div>
        </div>
      </section>

      <Testimonial />
      <GamePage />

      <div ref={downloadRef}>
        <Pagedownload />
      </div>
    </main>
  );
}
