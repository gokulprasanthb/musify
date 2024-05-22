import React from 'react'
import { assets } from '../assets/assets'

const SideBar = () => {
  return (
    <div className='w-[25%] text-white flex-col p-2 gap-2 h-full hidden lg:flex'>
        <div className='bg-gray-950 h-[15%] flex flex-col justify-around rounded'>
            <div className='flex items-center gap-3 pl-8 cursor-pointer'>
                <img src={assets.home_icon} alt="home icon" className='w-7 h-7'/>
                <p className='font-bold'>Home</p>
            </div>
            <div className='flex items-center gap-3 pl-8 cursor-pointer'>
                <img src={assets.search_icon} alt="home icon" className='w-7 h-7'/>
                <p className='font-bold'>Search</p>
            </div>
        </div>

        <div className='bg-gray-950 rounded h-[85%]'>
            <div className='flex p-4 items-center justify-between'>
                <div className='flex items-center gap-3 px-5'>
                    <img src={assets.stack_icon} alt="library" className='w-7 h-7'/>
                    <p className='font-bold'>Your Library</p>
                </div>
                <div className='flex items-center gap-3'>
                    <img src={assets.arrow_icon} alt="arrowIcon" className='w-5'/>
                    <img src={assets.plus_icon} alt="plusIcon" className='w-5'/>
                </div>
            </div>
            <div className='p-4 bg-gray-800 m-2 font-semibold rounded flex flex-col items-start justify-start gap-1 pl-4'>
                <h1>Create your playlist</h1>
                <button className='bg-white px-4 py-2 text-[15px] text-black rounded-full mt-4'>Create Playlist</button>
            </div>
            <div className='p-4 bg-gray-800 m-2 font-semibold rounded flex flex-col items-start justify-start gap-1 pl-4 mt-3'>
                <h1>Find and Follow the Podcasts</h1>
                <p className='font-light'>keep updated on new episodes</p>
                <button className='bg-white px-4 py-2 text-[15px] text-black rounded-full mt-4'>Search Podcasts</button>
            </div>
        </div>
    </div>
  )
}

export default SideBar