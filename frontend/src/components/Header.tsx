import React from 'react'
import { FiUser,FiSearch } from "react-icons/fi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Logo from "../assets/Logo.png"
export default function Header() {
  return (
    <div className='fixed flex flex-row justify-between items-center  w-[100vw] h-[20vh] md:p-8 sm:p-4 bg-[#000000]' >
      
      <img className='w-[10vw]' src={Logo} alt="" />
      <div className='flex flex-row justify-between w-[70vw] '>
        <div className='relative flex items-center w-[30vw]'>
      <input className=" border border-[#B3001B] text-[#9F9D9D] placeholder-[#9F9D9D] rounded-3xl p-2 w-[30vw] outline-none shadow-sm  focus::shadow-lg focus:shadow-[#B3001B] transition-all duration-200"
        type="text"
        placeholder='search...' 
        />
        <FiSearch className='absolute right-3 top-1/2 -translate-y-1/2 text-[#9F9D9D] cursor-pointer   '/>
        </div>
        <div className='flex flex-row justify-between w-[22vw]'>
      <button className='text-[#9F9D9D] border border-[#9F9D9D] rounded-2xl lg:p-2 sm:p-1 flex items-center cursor-pointer'> <FiUser className='flex animate-bounce'/> connect</button>
      <button className='text-[#9F9D9D] border border-[#9F9D9D] rounded-2xl p-2 flex items-center cursor-pointer'> <AiOutlineShoppingCart className='m-1'/>Total price: 0</button>
      </div>
      </div>    
    </div>
  )
}
 