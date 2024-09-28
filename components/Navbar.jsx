"use client"; // Mark this component as a Client Component

import Link from 'next/link';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation'; // ใช้ useRouter จาก next/navigation

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter(); // เรียกใช้ useRouter

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleRefresh = () => {
    router.refresh(); // ใช้ router.refresh() เพื่อรีเฟรชหน้าใน next/navigation
  };

  return (
    <nav className="bg-white text-black shadow-lg sticky top-0 z-50">
      <div className="flex items-center justify-between p-4 mx-[50px]">
        <div className="navbar-logo">
          <Link href="/">
            <h1 className="font-extrabold text-2xl cursor-pointer" onClick={handleRefresh}>
              Pixel Game
            </h1>
          </Link>
        </div>
        <div className="hidden md:flex">
          <ul className="flex gap-8">
            {["HOME", "BLOG", "FORUMS", "WIKI", "MEDIA", "MARCH", "FAQ", "TABLETOP"].map((item, index) => (
              <li key={index} className="cursor-pointer font-bold hover:text-gray-600 transition duration-300">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-black focus:outline-none">
            {isOpen ? (
              <span className="font-bold">✖</span>
            ) : (
              <span className="font-bold">☰</span>
            )}
          </button>
        </div>
      </div>
      <div
        className={`md:hidden transition-all duration-300 ease-in-out bg-white ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}
      >
        <ul className="flex flex-col items-center p-4 gap-2"> {/* Center the items */} 
          {["HOME", "BLOG", "FORUMS", "WIKI", "MEDIA", "MARCH", "FAQ", "TABLETOP"].map((item, index) => (
            <li key={index} className="cursor-pointer font-bold hover:text-gray-600 transition duration-300 text-center"> {/* Center text */}
              {item}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
