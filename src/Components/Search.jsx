import React, { useEffect, useState } from 'react'
import Navbar from './Navbar.jsx'
import Sidelock from './Sidelock.jsx'
import { useParams } from 'react-router-dom'
import { fetchData } from '../utills/rapidApi.js'
import SearchVideo from './SearchVideo.jsx'
const Search = () => {
  const [result, setresult] = useState()
  const{searchQuery} = useParams()

  useEffect(()=>{fetchSerchVideos();},[searchQuery])

  const fetchSerchVideos = ()=>{
    fetchData(`search/?q=${searchQuery}`).then(({contents})=>{
      setresult(contents);
    })
  }

  return (
    <div className='w-full fixed top-0 z-10 h-18 bg-white'>
        <Navbar/>
        <div className='flex flex-col md:flex-row gap-10'>
            <Sidelock/>
            <div className='grow mt-5 h-[calc(100vh-4.625rem)] overflow-hidden hover:overflow-y-scroll overflow-x-hidden'>
              <div className='grid grid-cols-1 gap-2 p-3 ml-5'>
                {
                  result?.map((item , index)=>{
                    if(item?.type !== 'video') return false;
                    return <SearchVideo key={index} video = {item?.video}/>
                  })
                }
              </div>
            </div>
        </div>
    </div>
  )
}

export default Search