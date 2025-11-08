import React, { useState, useEffect } from 'react'
import { FiUser, FiSearch } from "react-icons/fi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Home, Heart } from "lucide-react";
import { MdCategory } from 'react-icons/md';
import Logo from "../assets/Logo.png";

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
      <div className=' flex flex-row justify-between items-center w-[100vw] h-[20vh] md:p-8 sm:p-4 bg-[#000000]'>
        <img className='w-[10vw]' src={Logo} alt="" />
        <div className='flex flex-row justify-between w-[70vw]'>
          <div>
            <div className='relative flex items-center w-[30vw]'>
              <input
                className="border border-[#B3001B] text-[#9F9D9D] placeholder-[#9F9D9D] rounded-3xl p-2 w-[30vw] outline-none shadow-sm focus:shadow-lg focus:shadow-[#B3001B] transition-all duration-200"
                type="text"
                placeholder='search...'
              />
              <FiSearch className='absolute right-3 top-1/2 -translate-y-1/2 text-[#9F9D9D] cursor-pointer' />
            </div>
            <div className='flex flex-row justify-between pt-6'>
              <h3 className='text-[#9f9d9d] flex gap-1 items-center border border-black rounded-3xl px-2 p-1 cursor-pointer hover:border-[#B3001B]'>
                <Home className='h-4' /> Home
              </h3>
              <h3 className='text-[#9F9D9D] flex gap-1 items-center border border-black rounded-3xl px-2 p-1 cursor-pointer hover:border-[#B3001B]'>
                <MdCategory className='h-4' /> Category
              </h3>
              <h3 className='text-[#9F9D9D] flex gap-1 items-center border border-black rounded-3xl px-2 p-1 cursor-pointer hover:border-[#B3001B]'>
                <Heart className='h-4' /> Favorite
              </h3>
            </div>
          </div>
          <div className='flex flex-row justify-between w-[22vw] h-10'>
            <button className='text-[#9F9D9D] border border-[#9F9D9D] rounded-2xl lg:p-2 sm:p-1 flex items-center cursor-pointer'>
              <FiUser className='flex animate-bounce' /> connect
            </button>
            <button className='text-[#9F9D9D] border border-[#9F9D9D] rounded-2xl p-2 flex items-center cursor-pointer'>
              <AiOutlineShoppingCart className='m-1' />Total price: 0
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
