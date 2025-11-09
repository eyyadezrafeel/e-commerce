import React from 'react'
import PriceRange from './PriceRange'

export default function Filter() {
  return (
    <div className=' top-0 left-0 '>
     <div className="flex flex-col gap-20 p-6 pt-[20vh]  w-[20vw] h-[100%] bg-[#000000]" >
      {/* ---------- TOOLS CATEGORY ---------- */}
      <div className="relative group">
        <div className="bg-[#000000] text-[#9F9D9D] px-4 py-2 rounded cursor-pointer w-[50%]">
         Tools
        </div>

        {/* Subcategories */}
        <div className="absolute left-40 top-1 mt-0 hidden w-40 rounded-lg bg-[#000000] text-[#9F9D9D] shadow-lg group-hover:block transition-all duration-1000">
          <ul className="py-2">
            <li className="px-4 py-2 hover:text-[#B3001B] cursor-pointer">
              Car Charger
            </li>
            <li className="px-4 py-2 hover:text-[#B3001B] cursor-pointer">
              Car Jack
            </li>
            <li className="px-4 py-2 hover:text-[#B3001B] cursor-pointer">
              Wrench
            </li>
          </ul>
        </div>
      </div>

      {/* ---------- ELECTRONICS CATEGORY ---------- */}
      <div className="relative group">
        <div className="bg-[#000000] text-[#9F9D9D] px-4 py-2 rounded cursor-pointer w-[50%]">
          Electronics
        </div>

        {/* Subcategories */}
        <div className="absolute left-40 top-1 mt-2 hidden w-40 rounded-lg bg-[#000000] text-[#9F9D9D] shadow-lg group-hover:block transition-all duration-300">
          <ul className="py-2">
            <li className="px-4 py-2 hover:text-[#B3001B] cursor-pointer">
              Phone Holder
            </li>
            <li className="px-4 py-2 hover:text-[#B3001B] cursor-pointer">
              GPS Tracker
            </li>
            <li className="px-4 py-2 hover:text-[#B3001B] cursor-pointer">
              Dash Cam
            </li>
          </ul>
        </div>
      </div>

      {/* ---------- ACCESSORIES CATEGORY ---------- */}
      <div className="relative group">
        <div className="bg-[#000000] text-[#9F9D9D] px-4 py-2 rounded cursor-pointer w-[50%]">
          Accessories
        </div>

        {/* Subcategories */}
        <div className="absolute left-40 top-1 mt-2 hidden w-40 rounded-lg bg-[#000000] text-[#9F9D9D] shadow-lg group-hover:block transition-all duration-300">
          <ul className="py-2">
            <li className="px-4 py-2 hover:text-[#B3001B] cursor-pointer">
              Seat Covers
            </li>
            <li className="px-4 py-2 hover:text-[#B3001B] cursor-pointer">
              Air Freshener
            </li>
            <li className="px-4 py-2 hover:text-[#B3001B] cursor-pointer">
              Floor Mats
            </li>
          </ul>
        </div>
      </div>
      <div>
        <PriceRange/>
        </div>
    </div>
    </div>
  )
}
