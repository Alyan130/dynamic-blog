"use client";

import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi"; 
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <nav className="w-full h-16 bg-slate-200 flex justify-between items-center px-4">
        <span className="text-xl font-bold text-black">BlogWebsite</span>


        <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
          {isMenuOpen ? <FiX size={24} className="text-black" /> : <FiMenu size={24} className="text-black" />}
        </div>

    
        <ul className={`absolute md:flex md:static bg-slate-200 md:bg-transparent left-0 w-full transition-transform duration-300 ease-in-out ${isMenuOpen ? "top-16" : "top-[-100%]"}`}>
          <li className="md:mx-4 text-center md:ml-[340px]">
            <Link href={"/"} className="block py-2 px-4 text-black hover:bg-slate-400 transition duration-300">Home</Link>
          </li>
          <li className="md:mx-4 text-center">
            <Link href={"/blogs"} className="block py-2 px-4 text-black hover:bg-slate-400 transition duration-300">Blogs</Link>
          </li>
          <li className="md:mx-4 text-center">
            <Link href={"/contact"} className="block py-2 px-4 text-black hover:bg-slate-400 transition duration-300">Contact</Link>
          </li>
        </ul>

       
        <div className="hidden md:flex flex-row gap-4 text-black ml-auto">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FaFacebookF size={20} className="hover:text-blue-600 transition duration-300" />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FiGithub size={20} className="hover:text-gray-800 transition duration-300" />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedinIn size={20} className="hover:text-blue-700 transition duration-300" />
          </a>
        </div>
      </nav>
    </header>
  );
}
