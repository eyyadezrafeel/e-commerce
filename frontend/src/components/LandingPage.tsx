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
        <img className='w-1/2' src={CarImg} alt="" />
        <div className='w-1/2 p-15'>
          <h2 className="text-4xl"
            style={{
              color: isDark ? "#fff" : "#000"
            }}>Where the rubber meets the road, that's where we are. Equip, maintain, install - we're your automotive ally.</h2>
        </div>
    </div>
  )
}
