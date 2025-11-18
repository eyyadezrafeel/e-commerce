import React from 'react'
import Logo from '../assets/Logo.png'
import { Link } from 'react-router-dom';

interface LastProps {
  isDark: boolean;
}

export default function Last({ isDark }: LastProps) {
  return (
  <div style={{
    backgroundColor: isDark ? "#000" : "#fff",
    display: "flex",
    gap: "40px",
    width: "100vw",
    minHeight: "100vh",
    justifyContent: "center",
    alignItems: "center"
  }}>
        <div style={{
          display: "flex",
          gap: "40px"
        }}>
        <div style={{
          display: "flex",
          flexDirection: "column",
          gap: "12px"
        }}>
            <h2 style={{
              color: isDark ? "#fff" : "#000",
              fontSize: "1.5rem"
            }}>About Car Care</h2>
            <p style={{
              color: isDark ? "#fff" : "#000",
              fontSize: "1.25rem"
            }}>About</p>
            <p style={{
              color: isDark ? "#fff" : "#000",
              fontSize: "1.25rem"
            }}>Careers</p>
            <p style={{
              color: isDark ? "#fff" : "#000",
              fontSize: "1.25rem"
            }}>Terms of sevice</p>
            <p style={{
              color: isDark ? "#fff" : "#000",
              fontSize: "1.25rem"
            }}>Privacy policy</p>
            <p style={{
              color: isDark ? "#fff" : "#000",
              fontSize: "1.25rem"
            }}>Return & Exchange</p>
            <p style={{
              color: isDark ? "#fff" : "#000",
              fontSize: "1.25rem"
            }}>International Store</p>
        </div>
        <div style={{
          display: "flex",
          flexDirection: "column",
          gap: "12px"
        }}>
            <h2 style={{
              color: isDark ? "#fff" : "#000",
              fontSize: "1.5rem"
            }}>Help & Support</h2>
            <p style={{
              color: isDark ? "#fff" : "#000",
              fontSize: "1.25rem"
            }}>Faq</p>
            <p style={{
              color: isDark ? "#fff" : "#000",
              fontSize: "1.25rem"
            }}>Contact us</p>
            <p style={{
              color: isDark ? "#fff" : "#000",
              fontSize: "1.25rem"
            }}>Track my order</p>
        </div>
        <div style={{
          display: "flex",
          flexDirection: "column",
          gap: "12px"
        }}>
            <h2 style={{
              color: isDark ? "#fff" : "#000",
              fontSize: "1.5rem"
            }}>Useful links</h2>
            <p style={{
              color: isDark ? "#fff" : "#000",
              fontSize: "1.25rem"
            }}>Rewards</p>
            <p style={{
              color: isDark ? "#fff" : "#000",
              fontSize: "1.25rem"
            }}>Gift Cards</p>
            <p style={{
              color: isDark ? "#fff" : "#000",
              fontSize: "1.25rem"
            }}>Blog Posts</p>
            <p style={{
              color: isDark ? "#fff" : "#000",
              fontSize: "1.25rem"
            }}>Faces of Car Care</p>


        </div>
  <h2 style={{
    color: isDark ? "#B3001B" : "#7EC8FF",
    fontSize: "1.5rem",
    cursor: "pointer"
  }}>
          <Link to="/CreateStore" style={{
            textDecoration: "none",
            color: isDark ? "#B3001B" : "#7EC8FF"
          }}>
          Click to be a store owner
          </Link>
          </h2>
        </div>
         <img style={{
           width: "50%",
           height: "50%",
           animation: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite"
         }}  src={Logo} alt="" />

    </div>
  )
}
