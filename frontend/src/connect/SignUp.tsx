import React from 'react'

export default function SignUp() {
  return (
    <div className='h-[100vh] w-[100vw] flex justify-center items-center bg-[#000000]'>
        <div className='border border-[#B3001B] rounded-3xl flex flex-col justify-center items-center p-15 gap-6 ' >
            <h2 className='text-white text-4xl'>Sign Up</h2>
            <input className='border border-[#B3001B] w-[300px] p-2 rounded-3xl placeholder:text-white' type="text" placeholder='Enter user name' />
            <input className='border border-[#B3001B] w-[300px] p-2 rounded-3xl placeholder:text-white' type="text" placeholder='Enter your email' />
            <input className='border border-[#B3001B] w-[300px] p-2 rounded-3xl placeholder:text-white ' type="password" placeholder='Enter your password'  />
            <button className='border border-[#B3001B] text-white p-4 rounded-4xl'>Submit</button>
            <p className='text-white'> Already have an account?</p>
            <a className='text-[#B3001B]' href="">Login</a>


        </div>
    </div>
  )
}
