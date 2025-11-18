import React from 'react'
import { useCategorysProductsStore } from '../store/categorysproductsStore'
import Filter from '../itemspage/Filter';

interface ItemsProps {
  isDark: boolean;
}

export default function Items({ isDark }: ItemsProps) {
    const categorysproducts = useCategorysProductsStore((state) => state.categorysproducts);
  return (
    <div className="flex flex-row">
    <Filter isDark={isDark} />
    <div className="w-[80vw] grid grid-cols-3 gap-4 p-10 h-full mt-[120px]"
      style={{
        backgroundColor: isDark ? "#000" : "#fff"
      }} >

{categorysproducts.map((p) => ( 
  <div className="min-w-[20vw] max-w-[25vw] cursor-pointer rounded-lg flex flex-col justify-between shrink-0 hover:scale-105 transition-transform duration-200"
    style={{
      backgroundColor: isDark ? "#000" : "#fff",
      border: `1px solid ${isDark ? "#B3001B" : "#7EC8FF"}`,
      boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)"
    }} key={p.id}>
    <img className="w-full h-[60%] rounded-t-lg" src={p.img} alt="" />
    <h2 className="text-xl px-2 py-2"
      style={{
        color: isDark ? "#fff" : "#000"
      }}>{p.name}</h2>
    <p className="px-2 py-2"
      style={{
        color: isDark ? "#fff" : "#000"
      }}>{p.description}</p>
    <p className="px-2 py-2"
      style={{
        color: isDark ? "#fff" : "#000"
      }}>There's {p.quantity} left</p>
    <p className="text-lg px-2 py-2"
      style={{
        color: isDark ? "#fff" : "#000"
      }}>${p.price}</p>
  </div>
))}

    </div>
    </div>
  )
}
