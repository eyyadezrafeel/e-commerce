import React from "react";
import { useProductStore } from "../store/productStore";


const Card = () => {
  const products = useProductStore((state) => state.products);

  return (

    <div className="flex flex-col items-center w-[100vw] h-[100vh] bg-[#000000]  ">
      <h1 className="text-6xl text-[#9F9D9D] my-10">Items</h1>
      <div className=" w-[90vw] overflow-x-auto px-6 py-6 scrollbar-hide " >
        <div className="flex space-x-5 ">
      {products.map((p) => ( 
        <div className="min-w-[20vw] max-w-[25vw] cursor-pointer  bg-[#000000] border border-[#B3001B] shadow rounded-lg p-4 flex flex-col justify-between flex-shrink-0 hover:scale-105 transform transition" key={p.id}>
          <img className="w-[100%] h-[70%]" src={p.img} alt="" />
          <h2 className="text-xl text-white">{p.name}</h2>
          <p className="text-[#9F9D9D]">{p.description}</p>
          <p className="text-lg text-gray-300">${p.price}</p>
        </div>
      ))}
      
      </div>
      </div>
      </div>
    
  );
};

export default Card;
