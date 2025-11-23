import React from 'react'
import CarImg from "../assets/CarImg.jpeg"

interface LandingPageProps {
  isDark: boolean;
}

export default function LandingPage({ isDark }: LandingPageProps) {
  return (
  <div className="h-screen w-screen pt-[140px] flex flex-row"
    style={{
      backgroundColor: isDark ? "#000" : "#fff"
    }}>
        <img className='w-1/2 rounded-r-3xl' src={CarImg} alt="" />
        <div className='w-1/2 flex justify-center items-center p-20'>
          <h2 className="text-5xl font-semibold "
            style={{
              color: isDark ? "#fff" : "#000"
            }}>Where the rubber meets the road, that's where we are. Equip, maintain, install - we're your automotive ally.</h2>
        </div>
    </div>
  )
}
