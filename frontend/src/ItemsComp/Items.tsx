import React from 'react'
import { useCategorysProductsStore } from '../store/categorysproductsStore'
import Filter from '../itemspage/Filter';

export default function Items() {
    const categorysproducts = useCategorysProductsStore((state) => state.categorysproducts);
  return (
    <div className='flex flex-row'>
    <Filter/>
    <div className='w-[80vw] bg-[#000000] grid grid-cols-3 gap-4 p-4 h-[100%]  ' >

{categorysproducts.map((p) => ( 
        <div className="min-w-[20vw] max-w-[25vw] cursor-pointer  bg-[#000000] border border-[#B3001B] shadow rounded-lg p-4 flex flex-col justify-between flex-shrink-0 hover:scale-105 transform transition" key={p.id}>
          <img className="w-[100%] h-[70%]" src={p.img} alt="" />
          <h2 className="text-xl text-white">{p.name}</h2>
          <p className="text-[#9F9D9D]">{p.description}</p>
          <p className='text-[#9D9D9D]'>There's {p.quantity} left</p>
          <p className="text-lg text-gray-300">${p.price}</p>
        </div>
      ))}


    </div>
    </div>
  )
}
