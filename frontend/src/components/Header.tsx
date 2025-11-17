import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { FiUser, FiSearch } from "react-icons/fi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Home, Heart } from "lucide-react";
import { MdCategory } from 'react-icons/md';
import Logo from "../assets/Logo.png";
import ThemeToggle from './ThemeToggle';


export default function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlHeader = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // scrolling down → hide
        setIsVisible(false);
      } else {
        // scrolling up → show
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", controlHeader);
    return () => window.removeEventListener("scroll", controlHeader);
  }, [lastScrollY]);

  return (
    <header
      className={`fixed top-0 left-0 w-full bg-white shadow-md z-50 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
  <div className=' flex flex-row justify-between items-center w-screen h-[20vh] md:p-8 sm:p-4 bg-white'>
        <Link to="/">
        <img className='w-[10vw]' src={Logo} alt="" />
        </Link>
        <div className='flex flex-row justify-between w-[70vw]'>
          <div>
            <div className='relative flex items-center w-[30vw]'>
              <input
                className="border border-[#7EC8FF] text-[#52525B] placeholder-[#9F9D9D] rounded-3xl p-2 w-[30vw] outline-none shadow-sm focus:shadow-lg focus:shadow-[#7EC8FF] transition-all duration-200"
                type="text"
                placeholder='search...'
              />
              <FiSearch className='absolute right-3 top-1/2 -translate-y-1/2 text-[#9F9D9D] cursor-pointer' />
            </div>
           <div className='flex flex-row justify-between pt-6'>
  <Link 
    to="/landing" 
    className='text-[#6b7280] flex gap-2 items-center 
              border border-gray-300 rounded-3xl px-4 py-2 
              cursor-pointer hover:border-[#7EC8FF]'
  >
    <Home className='h-4' /> Home
  </Link>
  
  <Link 
    to="/store" 
    className='text-[#6b7280] flex gap-2 items-center 
              border border-gray-300 rounded-3xl px-4 py-2 
              cursor-pointer hover:border-[#7EC8FF]'
  >
    <MdCategory className='h-4' /> Store
  </Link>
  
  <Link 
    to="/favorites" 
    className='text-[#6b7280] flex gap-2 items-center 
              border border-gray-300 rounded-3xl px-4 py-2 
              cursor-pointer hover:border-[#7EC8FF]'
  >
    <Heart className='h-4' /> Favorite
  </Link>
</div>
          </div>
          <div className='flex flex-row justify-between w-[22vw] h-10'>
            <ThemeToggle/>
            <Link to="/login"
            className='text-[#9F9D9D] border border-[#9F9D9D] rounded-2xl lg:p-2 sm:p-1 flex items-center cursor-pointer'>
            <FiUser className='flex animate-bounce' /> connect
            </Link>
            
            <button className='text-[#9F9D9D] border border-[#9F9D9D] rounded-2xl p-2 flex items-center cursor-pointer'>
              <AiOutlineShoppingCart className='m-1' />Total price: 0
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
