import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
        <div className='w-full flex justify-between items-center font-semibold '>
          <div className='flex items-center gap-2'>
              <img src={assets.arrow_left} alt="leftArrow" className='w-8 p-2 bg-gray-800 rounded-2xl cursor-pointer'/>
              <img src={assets.arrow_right} alt="leftArrow" className='w-8 p-2 bg-gray-800 rounded-2xl cursor-pointer'/>
          </div>
          <div className='flex items-center gap-4'> 
            <p className='bg-white text-black text-[15px] px-4 py-1 rounded-2xl hidden md:block cursor-pointer'>Explore premium</p>
            <p className='bg-gray-800 py-1 px-4 rounded-2xl text-[15px] cursor-pointer'>Install App</p>
            <p className='bg-yellow-500 text-black w-7 h-7 rounded-full flex items-center justify-center'>G</p>
          </div>
        </div>
        <div className='flex items-center gap-2 mt-4'>
          <p className='bg-white text-black px-4 py-1 rounded-2xl font-semibold cursor-pointer'>All</p>
          <p className='bg-gray-800 px-4 py-1 rounded-2xl font-semibold cursor-pointer'>Music</p>
          <p className='bg-gray-800 px-4 py-1 rounded-2xl font-semibold cursor-pointer'>Music</p>
        </div>
    </>
  ) 
}

export default Navbar