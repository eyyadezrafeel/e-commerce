import React from "react";
import { useProductStore } from "../store/productStore";

interface CardProps {
  isDark: boolean;
}

const Card = ({ isDark }: CardProps) => {
  const products = useProductStore((state) => state.products);

  return (

    <div className="flex flex-col items-center w-screen h-screen"
      style={{
        backgroundColor: isDark ? "#000" : "#fff"
      }}>
      <h1 className="text-5xl mt-10 mb-10"
        style={{
          color: isDark ? "#fff" : "#000"
        }}>Popular</h1>
      <div className="w-[90vw] overflow-x-auto px-6 py-6">
        <div className="flex gap-5">
      {products.map((p) => ( 
        <div className="min-w-[20vw] max-w-[25vw] cursor-pointer rounded-3xl flex flex-col shrink-0 hover:scale-105 transition-transform duration-200"
          style={{
            backgroundColor: isDark ? "#000" : "#fff",
            border: `1px solid ${isDark ? "#B3001B" : "#7EC8FF"}`,
            boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)"
          }} key={p.id}>
          
          <img className="w-full h-[70%] rounded-t-2xl" src={p.img} alt="" />
          <div className="flex flex-col justify-between p-4">
            <h2 className="text-xl"
              style={{
                color: isDark ? "#fff" : "#000"
              }}>{p.name}</h2>
            <p style={{
              color: isDark ? "#fff" : "#000"
            }}>{p.description}</p>
            <p className="text-lg"
              style={{
                color: isDark ? "#fff" : "#000"
              }}>${p.price}</p>
          </div>
        </div>
      ))}
      
      </div>
      </div>
      </div>
    
  );
};

export default Card;
