import React, { useState } from 'react'
import { CiSearch } from "react-icons/ci";
import { HiMicrophone } from "react-icons/hi2";
import { CiBellOn } from "react-icons/ci";
import { RiVideoUploadLine } from "react-icons/ri";
import Sidebar from './Sidebar';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [searchQuery, setsearchQuery] = useState("")
  const navigate = useNavigate();

  const searchHandler = (event)=>{
     if((event?.key ==='Enter') ||(event ==='searchButton') && searchQuery?.length>0){
       navigate(`/search/${searchQuery}`);
       setsearchQuery('');
     }
  }

  return (
    <div className=' h-16 flex items-center justify-between sticky top-0 z-10'>
      <div className='pl-5  gap-1 flex justify-center items-center'>
       <div><Sidebar/></div>
       <Link to='/'>
      <img className='w-28 cursor-pointer' src="/yt.svg" alt="Youtube" />
       </Link>
      </div>

      <div className='w-[50%] flex justify-center items-center'>
          <input className='w-[80%] px-4 py-2 rounded-l-full border border-gray-300 outline-none' 
          type="text" placeholder='Search'
          onChange={(e)=>setsearchQuery(e.target.value)}
          onKeyUp={searchHandler}
          value={searchQuery}
          />

        <Link className='bg-gray-100 py-2 rounded-r-full px-5 hover:bg-gray-200 cursor-pointer' onClick={()=>searchHandler("searchButton")}>
        <CiSearch size={'25px'}/>
        </Link>

        <HiMicrophone  size={'42px'} className='px-3 py-2 rounded-full bg-gray-100 hover:bg-gray-200 ml-7 cursor-pointer' />
      </div>

      <div className='pr-10 flex items-center gap-5'>
      {/* <img src="/react.svg" alt=""  className=' cursor-pointer'/> */}
      <RiVideoUploadLine className='cursor-pointer' size={'25px'} />
       <CiBellOn className='cursor-pointer' size={'25px'} />
      <img src="/11.png" alt="" className='w-10 h-[38px] cursor-pointer rounded-full' />
      </div>
    </div>
  )
}

export default Navbar