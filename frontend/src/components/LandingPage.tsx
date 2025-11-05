import React from 'react'
import CarImg from "../assets/CarImg.jpeg"
export default function LandingPage() {
  return (
    <div className='h-[100vh] w-[100vw] pt-40  flex flex-row bg-[#000000]   '>
        <img className='w-1/2' src={CarImg} alt="" />
        <div className='w-1/2 p-15'>
        <h2 className='text-[#9F9D9D]  text-6xl'>Where the rubber meets the road, that's where we are. Equip, maintain, install - we're your automotive ally.</h2>
        </div>
    </div>
  )
}
