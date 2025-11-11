import React from 'react'

export default function CreateStore() {
  
  if( true){
    return (
    
    <div className='w-[100vw] h-[100vh] flex justify-center items-center bg-[#000000]'>
        <div className='border border-white flex flex-col justify-center items-center p-10 gap-6 rounded-3xl' >
            
        <h2 className='text-white'>Create your store</h2>
        <div className='flex flex-row gap-4'>
        <div className='flex flex-col gap-4'>
        <input className='border border-white w-[300px] p-2 rounded-3xl text-white placeholder:text-white'
         type="text" placeholder='Enter store name' />
        <input className='border border-white w-[300px] p-2 rounded-3xl text-white placeholder:text-white'
         type="text" placeholder='Enter your store email' />
        <input className='border border-white w-[300px] p-2 rounded-3xl text-white placeholder:text-white'
         type="number" placeholder='Enter your phone number'/>
        </div>
       <textarea
  className="w-full p-3 border text-white border-gray-300 rounded-lg placeholder:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
  rows="6"
  placeholder="Write your description here..."
></textarea>

        </div>


        <button className='border border-[#B3001B] text-white p-4 rounded-4xl'>Create Store</button>



        </div>
    </div>
    )}
    else{

        return(
            <div className='w-[100vw] h-[100vh] flex justify-center items-center bg-[#000000]'>


            <h2 className='text-emerald-500 text-4xl'>You will resive a massege and an email</h2>


            </div>
        )
    }
}

