import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom';
import { FiUser, FiSearch } from "react-icons/fi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Home, Heart } from "lucide-react";
import { MdCategory } from 'react-icons/md';
import Logo from "../assets/Logo.png";
import ThemeToggle from './ThemeToggle';

interface HeaderProps {
  isDark: boolean;
  setIsDark: (value: boolean) => void;
}

export default function Header({ isDark, setIsDark }: HeaderProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

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
      className="fixed top-0 left-0 w-full shadow-md z-50"
      style={{
        backgroundColor: isDark ? "#000" : "#fff",
        transform: isVisible ? "translateY(0)" : "translateY(-100%)",
        transition: "transform 300ms ease"
      }}
    >
  <div className="flex flex-row justify-between items-center w-screen h-[20vh] p-8"
       style={{
         backgroundColor: isDark ? "#000" : "#fff"
       }}>
    
        <Link to="/">
          <img className='w-[10vw]' src={Logo} alt="" />
        </Link>
        <div className="flex flex-row justify-between w-[70vw]">
          <div>
            <div className="relative flex items-center w-[30vw]">
              <input
                id="search"
                name="search"
                className="rounded-full px-3 py-2 w-[30vw] outline-none shadow-sm"
                style={{
                  border: `1px solid ${isDark ? "#B3001B" : "#7EC8FF"}`,
                  color: isDark ? "#fff" : "#000",
                  backgroundColor: isDark ? "#000" : "#fff",
                  transition: "all 200ms ease"
                }}
                type="text"
                placeholder='search...'
              />
              <FiSearch className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
                style={{
                  color: isDark ? "#B3001B" : "#7EC8FF"
                }} />
            </div>
           <div className="flex flex-row justify-between pt-6">
  <Link 
    to="/" 
    className="flex gap-2 items-center rounded-full px-4 py-2 no-underline transition-all duration-200"
    style={{
      color: location.pathname === "/" ? (isDark ? "#7EC8FF" : "#B3001B") : (isDark ? "#fff" : "#000"),
      border: `1px solid ${location.pathname === "/" ? (isDark ? "#7EC8FF" : "#B3001B") : (isDark ? "#B3001B" : "#7EC8FF")}`,
      backgroundColor: location.pathname === "/" ? (isDark ? "rgba(179, 0, 27, 0.1)" : "rgba(126, 200, 255, 0.1)") : "transparent"
    }}
  >
    <Home className='h-4' /> Home
  </Link>
  
  <Link 
    to="/store" 
    className="flex gap-2 items-center rounded-full px-4 py-2 no-underline transition-all duration-200"
    style={{
      color: location.pathname === "/store" ? (isDark ? "#7EC8FF" : "#B3001B") : (isDark ? "#fff" : "#000"),
      border: `1px solid ${location.pathname === "/store" ? (isDark ? "#7EC8FF" : "#B3001B") : (isDark ? "#B3001B" : "#7EC8FF")}`,
      backgroundColor: location.pathname === "/store" ? (isDark ? "rgba(179, 0, 27, 0.1)" : "rgba(126, 200, 255, 0.1)") : "transparent"
    }}
  >
    <MdCategory className='h-4' /> Store
  </Link>
  
  <Link 
    to="/favorites" 
    className="flex gap-2 items-center rounded-full px-4 py-2 no-underline transition-all duration-200"
    style={{
      color: location.pathname === "/favorites" ? (isDark ? "#7EC8FF" : "#B3001B") : (isDark ? "#fff" : "#000"),
      border: `1px solid ${location.pathname === "/favorites" ? (isDark ? "#7EC8FF" : "#B3001B") : (isDark ? "#B3001B" : "#7EC8FF")}`,
      backgroundColor: location.pathname === "/favorites" ? (isDark ? "rgba(179, 0, 27, 0.1)" : "rgba(126, 200, 255, 0.1)") : "transparent"
    }}
  >
    <Heart className='h-4' /> Favorite
  </Link>
</div>
          </div>
          <div className="flex flex-row justify-between w-[22vw] h-10">
            <ThemeToggle isDark={isDark} setIsDark={setIsDark} />
            <Link to="/login"
              className="flex items-center rounded-2xl px-2 py-2 no-underline transition-all duration-200"
              style={{
                color: isDark ? "#fff" : "#000",
                border: `1px solid ${isDark ? "#B3001B" : "#7EC8FF"}`,
              }}>
              <FiUser style={{animation: "bounce 1s infinite"}} /> connect
            </Link>
            
            <button className="flex items-center rounded-2xl px-2 py-2 transition-all duration-200"
              style={{
                color: isDark ? "#fff" : "#000",
                border: `1px solid ${isDark ? "#B3001B" : "#7EC8FF"}`,
                backgroundColor: isDark ? "#000" : "#fff"
              }}>
              <AiOutlineShoppingCart className="m-1" />Total price: 0
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
