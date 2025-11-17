import React from 'react'
import Logo from '../assets/Logo.png'
import { Link } from 'react-router-dom';

export default function Last() {
  return (
    <div className='bg-black flex gap-10 w-[100wv] h-[100hv] justify-center items-center'>
        <div className='flex gap-10'>
        <div className='flex flex-col gap-3'>
            <h2 className=' text-[#ffffff] text-2xl'>About Car Care</h2>
            <p className='text-[#9F9D9D] text-xl '>About</p>
            <p className='text-[#9F9D9D] text-xl '>Careers</p>
            <p className='text-[#9F9D9D] text-xl '>Terms of sevice</p>
            <p className='text-[#9F9D9D] text-xl '>Privacy policy</p>
            <p className='text-[#9F9D9D] text-xl '>Return & Exchange</p>
            <p className='text-[#9F9D9D] text-xl '>International Store</p>
        </div>
        <div className='flex flex-col gap-3'>
            <h2 className=' text-[#ffffff] text-2xl'>Help & Support</h2>
            <p className='text-[#9F9D9D] text-xl '>Faq</p>
            <p className='text-[#9F9D9D] text-xl '>Contact us</p>
            <p className='text-[#9F9D9D] text-xl '>Track my order</p>
        </div>
        <div className='flex flex-col gap-3'>
            <h2 className=' text-[#ffffff] text-2xl'>Useful links</h2>
            <p className='text-[#9F9D9D] text-xl '>Rewards</p>
            <p className='text-[#9F9D9D] text-xl '>Gift Cards</p>
            <p className='text-[#9F9D9D] text-xl '>Blog Posts</p>
            <p className='text-[#9F9D9D] text-xl '>Faces of Car Care</p>


        </div>
        <h2 className='text-[#B3001B] text-2xl cursor-pointer'>
          <Link to="">
          Click to be a store owner
          </Link>
          </h2>
        </div>
         <img className='w-[50%] h-[50%] flex animate-pulse'  src={Logo} alt="" />

    </div>
  )
}
