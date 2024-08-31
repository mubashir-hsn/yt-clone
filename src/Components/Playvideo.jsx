import React, { useEffect,useState } from 'react'
import Navbar from './Navbar'
import { useParams } from 'react-router-dom'
import { fetchData } from '../utills/rapidApi.js'
import ReactPlayer from 'react-player'
import { BsFillCheckCircleFill } from 'react-icons/bs'
import { AiOutlineLike } from 'react-icons/ai'
import { abbreviateNumber } from 'js-abbreviation-number'
import SuggestedVideo from './SuggestedVideo.jsx'

const Playvideo = () => {

  const [video, setvideo] = useState()
  const [relatedVideo, setrelatedVideo] = useState()
  const { id } = useParams()

  useEffect(() => {
    fetchVideoDetails();
    relatedVideoData();
  }, [id])

  const fetchVideoDetails = () => {
    fetchData(`video/details/?id=${id}`).then((res) => {
      setvideo(res)
    })
  }

  const relatedVideoData = ()=>{
    fetchData(`video/related-contents/?id=${id}`).then((res) => {
      setrelatedVideo(res.contents);
    })
  }

  return (
    <>
      <div className='w-full fixed top-0 z-10 h-18 bg-white'>
        <Navbar />
      </div>
      <div className='flex justify-center h-[calc(100%-56px)] flex-col lg:flex-row mt-14'>
        <div className='w-full max-w-[1280px] flex flex-col lg:flex-row'>

          <div className='flex flex-col lg:w-[900px] pl-6 pr-3 py-3 lg:py-6'>
            {/* Playing video */}
            <div className='w-full md:w-[800px] h-[250px] md:h-[450px] lg:ml-0 lg:mr-0'>
              <ReactPlayer
                url={`https://www.youtube.com/watch?v=${id}`}
                playing={true}
                width="100%"
                height='100%'
                controls
              />
            </div>
            {/* Video Details */}
            <div className="font-bold text-sm md:text-xl mt-4 line-clamp-2">
              {video?.title}
            </div>
            <div className="flex justify-between flex-col md:flex-row mt-4">
              <div className="flex ">
                <div className="flex items-start">
                  <div className="flex h-11 w-11 rounded-full overflow-hidden">
                    <img
                      className="h-full w-full object-cover"
                      src={video?.author?.avatar[0]?.url}
                    />
                  </div>
                </div>
                <div className="flex space-x-5">
                  <div className="flex flex-col ml-3">
                    <div className="text-sm md:text-md font-semibold flex items-center">
                      {video?.author?.title}
                      {video?.author?.badges[0]?.type === "VERIFIED_CHANNEL" && (
                        <BsFillCheckCircleFill className="text-white/[0.5] text-[12px] ml-1" />
                      )}
                    </div>
                    <div className=" text-sm">
                      {video?.author?.stats?.subscribersText}
                    </div>
                  </div>
                  <span className="mt-1 text-center bg-red-500 px-3 pt-2 rounded-full text-white cursor-pointer hover:bg-red-700 duration-200 ">
                    Subscribe
                  </span>
                </div>
              </div>
              <div className="flex mt-4 md:mt-0">
                <div className="flex items-center justify-center h-11 px-6 rounded-3xl bg-white/[0.15]">
                  <AiOutlineLike className="text-xl mr-2" />
                  {`${abbreviateNumber(video?.stats?.likes, 2)} Likes`}
                </div>
                <div className="flex items-center justify-center h-11 px-6 rounded-3xl bg-white/[0.15] ml-4">
                  {`${abbreviateNumber(video?.stats?.views, 2)} Views`}
                </div>
              </div>
            </div>
            <div className="p-4 bg-gray-100 rounded-xl mt-4 text-sm">
              {video?.description}
            </div>
            <div className="flex gap-x-6 font-semibold rounded-xl mt-4 text-xl">
              {video?.stats?.comments} <p>Comments</p>
            </div>
          </div>

             <div className='flex flex-col mt-5 pr-4 h-[calc(100vh-4.625rem)] overflow-hidden hover:overflow-y-scroll overflow-x-hidden lg:w-[300px] xl:w-[400px]'>
              {
                relatedVideo?.map((item,index)=>{
                  if(item?.type !== 'video') return false;
                  return <SuggestedVideo key={index} video = {item?.video}/>
                })
              }
             </div>

        </div>
      </div>

    </>

  )
}

export default Playvideo