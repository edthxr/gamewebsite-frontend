"use client"; // Mark this component as a Client Component

import React, { useEffect, forwardRef } from 'react';
import AOS from 'aos'; 
import 'aos/dist/aos.css'; // Import AOS styles

const Pagedownload = forwardRef((props, ref) => {
  // Initialize AOS on component mount
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // Customize the duration and make animations run once
  }, []);

  return (
    <section ref={ref} className="flex flex-col items-center justify-center h-screen bg-transparent text-white p-4">
      {/* Heading with AOS animation */}
      <h1 className="text-5xl text-black font-bold mb-4" data-aos="fade-up">Download Sunset Grove</h1>

      {/* Subheading with AOS animation */}
      <p className="text-lg text-black mb-8" data-aos="fade-up" data-aos-delay="200">
        Get ready to embark on an adventure in Sunset Grove! Choose your platform below:
      </p>

      {/* Buttons with AOS animation */}
      <div className="flex flex-col md:flex-row gap-4" data-aos="fade-up" data-aos-delay="400">
        <button className="pixel-button bg-blue-600 hover:bg-blue-500">
          Download for PC
        </button>
        <button className="pixel-button bg-green-600 hover:bg-green-500">
          Download for Mac
        </button>
        <button className="pixel-button bg-red-600 hover:bg-red-500">
          Download for Mobile
        </button>
      </div>

      {/* Footer text with AOS animation */}
      <p className="text-black mt-8" data-aos="fade-up" data-aos-delay="600">
        Already played? Share your experience with us!
      </p>

      <style jsx>{`
        .pixel-button {
          position: relative;
          padding: 12px 24px;
          font-size: 18px;
          font-weight: bold;
          text-transform: uppercase;
          color: #ffffff;
          border: 2px solid transparent;
          border-radius: 5px;
          overflow: hidden;
          transition: background-color 0.3s ease;
          cursor: pointer;
          font-family: 'Press Start 2P', cursive; /* Pixel font */
          box-shadow: 0 4px 0 rgba(0, 0, 0, 0.4), inset 0 0 0 rgba(255, 255, 255, 0.5);
        }

        /* Updated colors for buttons */
        .bg-blue-600 { background-color: #007acc; }
        .hover\:bg-blue-500:hover { background-color: #005fa3; }
        
        .bg-green-600 { background-color: #5cb85c; }
        .hover\:bg-green-500:hover { background-color: #4cae4c; }
        
        .bg-red-600 { background-color: #d9534f; }
        .hover\:bg-red-500:hover { background-color: #c9302c; }

        .pixel-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.2);
          border-radius: 5px;
          z-index: 0;
          transition: transform 0.3s ease;
          transform: scale(0);
        }

        .pixel-button:hover::before {
          transform: scale(1);
        }
      `}</style>
    </section>
  );
});

export default Pagedownload;
