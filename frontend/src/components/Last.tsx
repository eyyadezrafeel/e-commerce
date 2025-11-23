import React from 'react'
import Logo from '../assets/Logo.png'
import { Link } from 'react-router-dom';

interface LastProps {
  isDark: boolean;
}

export default function Last({ isDark }: LastProps) {
  return (
  <div className="flex gap-10 w-screen min-h-screen justify-center items-center p-10"
    style={{
      backgroundColor: isDark ? "#000" : "#fff"
    }}>
    <div className="flex gap-10">
      <div className="flex flex-col gap-3">
        <h2 className="text-2xl"
          style={{
            color: isDark ? "#fff" : "#000"
          }}>About Car Care</h2>
        <p className="text-lg"
          style={{
            color: isDark ? "#fff" : "#000"
          }}>About</p>
        <p className="text-lg"
          style={{
            color: isDark ? "#fff" : "#000"
          }}>Careers</p>
        <p className="text-lg"
          style={{
            color: isDark ? "#fff" : "#000"
          }}>Terms of sevice</p>
        <p className="text-lg"
          style={{
            color: isDark ? "#fff" : "#000"
          }}>Privacy policy</p>
        <p className="text-lg"
          style={{
            color: isDark ? "#fff" : "#000"
          }}>Return & Exchange</p>
        <p className="text-lg"
          style={{
            color: isDark ? "#fff" : "#000"
          }}>International Store</p>
      </div>
      <div className="flex flex-col gap-3">
        <h2 className="text-2xl"
          style={{
            color: isDark ? "#fff" : "#000"
          }}>Help & Support</h2>
        <p className="text-lg"
          style={{
            color: isDark ? "#fff" : "#000"
          }}>Faq</p>
        <p className="text-lg"
          style={{
            color: isDark ? "#fff" : "#000"
          }}>Contact us</p>
        <p className="text-lg"
          style={{
            color: isDark ? "#fff" : "#000"
          }}>Track my order</p>
      </div>
      <div className="flex flex-col gap-3">
        <h2 className="text-2xl"
          style={{
            color: isDark ? "#fff" : "#000"
          }}>Useful links</h2>
        <p className="text-lg"
          style={{
            color: isDark ? "#fff" : "#000"
          }}>Rewards</p>
        <p className="text-lg"
          style={{
            color: isDark ? "#fff" : "#000"
          }}>Gift Cards</p>
        <p className="text-lg"
          style={{
            color: isDark ? "#fff" : "#000"
          }}>Blog Posts</p>
        <p className="text-lg"
          style={{
            color: isDark ? "#fff" : "#000"
          }}>Faces of Car Care</p>
      </div>
      <h2 className="text-2xl cursor-pointer"
        style={{
          color: isDark ? "#B3001B" : "#7EC8FF"
        }}>
        <Link to="/CreateStore" className="no-underline"
          style={{
            color: isDark ? "#B3001B" : "#7EC8FF"
          }}>
          Click to be a store owner
        </Link>
      </h2>
    </div>
    <img className="w-1/2 h-1/2"
      style={{
        animation: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite"
      }} src={Logo} alt="" />
    </div>
  )
}
