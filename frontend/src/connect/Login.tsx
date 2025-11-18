import React from 'react'
import { Link } from 'react-router-dom'

interface LoginProps {
  isDark: boolean;
}

export default function Login({ isDark }: LoginProps) {
  return (
  <div className="h-screen w-screen flex justify-center items-center"
    style={{
      backgroundColor: isDark ? "#000" : "#fff"
    }}>
    <div className="rounded-3xl flex flex-col justify-center items-center p-16 gap-6"
      style={{
        border: `1px solid ${isDark ? "#B3001B" : "#7EC8FF"}`
      }} >
      <h2 className="text-4xl"
        style={{
          color: isDark ? "#fff" : "#000"
        }}>Login</h2>
      <input className="w-80 px-2 py-2 rounded-full outline-none"
        style={{
          border: `1px solid ${isDark ? "#B3001B" : "#7EC8FF"}`,
          backgroundColor: isDark ? "#000" : "#fff",
          color: isDark ? "#fff" : "#000"
        }} type="text" placeholder='Enter your email' />
      <input className="w-80 px-2 py-2 rounded-full outline-none"
        style={{
          border: `1px solid ${isDark ? "#B3001B" : "#7EC8FF"}`,
          backgroundColor: isDark ? "#000" : "#fff",
          color: isDark ? "#fff" : "#000"
        }} type="password" placeholder='Enter your password'  />
      <button className="px-4 py-4 rounded-full cursor-pointer transition-all duration-200"
        style={{
          border: `1px solid ${isDark ? "#B3001B" : "#7EC8FF"}`,
          color: isDark ? "#fff" : "#000",
          backgroundColor: isDark ? "#000" : "#fff"
        }}>Submit</button>
      <p style={{
        color: isDark ? "#fff" : "#000"
      }}> U don't have?</p>
      <Link to="/signup" className="no-underline hover:opacity-80 transition-opacity"
        style={{
          color: isDark ? "#B3001B" : "#7EC8FF"
        }}>Sign up</Link>
    </div>
    </div>
  )
}
