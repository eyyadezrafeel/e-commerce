import React from 'react'

interface CreateStoreProps {
  isDark: boolean;
}

export default function CreateStore({ isDark }: CreateStoreProps) {
  
  if( true){
    return (
    
    <div style={{
      width: "100vw",
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: isDark ? "#000" : "#fff"
    }}>
        <div style={{
          border: `1px solid ${isDark ? "#B3001B" : "#7EC8FF"}`,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "40px",
          gap: "24px",
          borderRadius: "24px"
        }} >
            
        <h2 style={{
          color: isDark ? "#fff" : "#000"
        }}>Create your store</h2>
        <div style={{
          display: "flex",
          flexDirection: "row",
          gap: "16px"
        }}>
    <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "16px"
    }}>
    <input style={{
      border: `1px solid ${isDark ? "#B3001B" : "#7EC8FF"}`,
      width: "300px",
      padding: "8px",
      borderRadius: "24px",
      backgroundColor: isDark ? "#000" : "#fff",
      color: isDark ? "#fff" : "#000"
    }}
     type="text" placeholder='Enter store name' />
    <input style={{
      border: `1px solid ${isDark ? "#B3001B" : "#7EC8FF"}`,
      width: "300px",
      padding: "8px",
      borderRadius: "24px",
      backgroundColor: isDark ? "#000" : "#fff",
      color: isDark ? "#fff" : "#000"
    }}
     type="text" placeholder='Enter your store email' />
    <input style={{
      border: `1px solid ${isDark ? "#B3001B" : "#7EC8FF"}`,
      width: "300px",
      padding: "8px",
      borderRadius: "24px",
      backgroundColor: isDark ? "#000" : "#fff",
      color: isDark ? "#fff" : "#000"
    }}
     type="number" placeholder='Enter your phone number'/>
    </div>
      <textarea
  style={{
    width: "100%",
    padding: "12px",
    border: `1px solid ${isDark ? "#B3001B" : "#7EC8FF"}`,
    backgroundColor: isDark ? "#000" : "#fff",
    color: isDark ? "#fff" : "#000",
    borderRadius: "8px",
    fontSize: "1rem",
    fontFamily: "inherit"
  }}
  rows={6}
  placeholder="Write your description here..."
></textarea>

        </div>


    <button style={{
      border: `1px solid ${isDark ? "#B3001B" : "#7EC8FF"}`,
      color: isDark ? "#fff" : "#000",
      padding: "16px",
      borderRadius: "32px",
      backgroundColor: isDark ? "#000" : "#fff",
      cursor: "pointer"
    }}>Create Store</button>



        </div>
    </div>
    )}
    else{

        return(
            <div style={{
              width: "100vw",
              height: "100vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: isDark ? "#000" : "#fff"
            }}>


            <h2 style={{
              color: "#10b981",
              fontSize: "2.25rem"
            }}>You will resive a massege and an email</h2>


            </div>
        )
    }
}

