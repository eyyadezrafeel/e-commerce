import React from 'react'
import { Link } from 'react-router-dom'

interface SignUpProps {
  isDark: boolean;
}

export default function SignUp({ isDark }: SignUpProps) {
  return (
  <div style={{
    height: "100vh",
    width: "100vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: isDark ? "#000" : "#fff"
  }}>
  <div style={{
    border: `1px solid ${isDark ? "#B3001B" : "#7EC8FF"}`,
    borderRadius: "24px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "60px",
    gap: "24px"
  }} >
      <h2 style={{
        color: isDark ? "#fff" : "#000",
        fontSize: "2.25rem"
      }}>Sign Up</h2>
  <input style={{
    border: `1px solid ${isDark ? "#B3001B" : "#7EC8FF"}`,
    width: "300px",
    padding: "8px",
    borderRadius: "24px",
    backgroundColor: isDark ? "#000" : "#fff",
    color: isDark ? "#fff" : "#000"
  }} type="text" placeholder='Enter user name' />
  <input style={{
    border: `1px solid ${isDark ? "#B3001B" : "#7EC8FF"}`,
    width: "300px",
    padding: "8px",
    borderRadius: "24px",
    backgroundColor: isDark ? "#000" : "#fff",
    color: isDark ? "#fff" : "#000"
  }} type="text" placeholder='Enter your email' />
  <input style={{
    border: `1px solid ${isDark ? "#B3001B" : "#7EC8FF"}`,
    width: "300px",
    padding: "8px",
    borderRadius: "24px",
    backgroundColor: isDark ? "#000" : "#fff",
    color: isDark ? "#fff" : "#000"
  }} type="password" placeholder='Enter your password'  />
  <button style={{
    border: `1px solid ${isDark ? "#B3001B" : "#7EC8FF"}`,
    color: isDark ? "#fff" : "#000",
    padding: "16px",
    borderRadius: "32px",
    backgroundColor: isDark ? "#000" : "#fff",
    cursor: "pointer"
  }}>Submit</button>
      <p style={{
        color: isDark ? "#fff" : "#000"
      }}> Already have an account?</p>
  <Link to="/login" style={{
    color: isDark ? "#B3001B" : "#7EC8FF",
    textDecoration: "none"
  }}>Login</Link>
          


        </div>
    </div>
  )
}
