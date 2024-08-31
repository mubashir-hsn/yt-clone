import React from 'react'
import { GoHomeFill } from "react-icons/go";
import { Link } from 'react-router-dom';
const Sidelock = () => {
  return (
    <div className='h-[calc(100vh-4rem)] w-20 text-[10px] text-[#0f0f0f] sticky top-0'>

        <div className='mt-1 flex flex-col items-center justify-center cursor-pointer py-5 hover:bg-blue-gray-50 rounded-md'>
        <Link to='/'>
        <GoHomeFill size={'22px'} />
        <span>Home</span>
        </Link>
        </div>
        <div className='flex flex-col items-center justify-center cursor-pointer py-5 hover:bg-blue-gray-50 rounded-md'>
        <img src="/short.svg" className='w-[22px]' alt="" />
        <span>Shorts</span>
        </div>
        <div className='flex flex-col items-center justify-center cursor-pointer py-5 hover:bg-blue-gray-50 rounded-md'>
        <img src="/subs.svg" className='w-[22px]' alt="" />
        <span>Subscriptions</span>
        </div>
        <div className='flex flex-col items-center justify-center cursor-pointer py-5 hover:bg-blue-gray-50 rounded-md'>
        <img src="/you.svg" className='w-[22px]' alt="" />
        <span>You</span>
        </div>
    </div>
  )
}

export default Sidelock