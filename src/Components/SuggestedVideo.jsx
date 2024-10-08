import { abbreviateNumber } from 'js-abbreviation-number'
import React from 'react'
import { BsFillCheckCircleFill } from 'react-icons/bs'
import Time from '../loader/Time'
import { Link } from 'react-router-dom'

const SuggestedVideo = ({video}) => {
  return (
    <div>
         <Link to={`/video/${video?.videoId}`}>
        <div className='flex flex-col lg:flex-row justify-start items-center mb-3'>
          {/* Video thumbnail  */}
          <div className=' relative h-24 md:h-20 xl:h-24 w-40 min-w-[168px] lg:w-32 lg:min-w-[128px] xl:min-w-[168px]'>
            <img className='h-full w-full md:rounded-xl md:hover:rounded-none duration-200' src={video?.thumbnails[0]?.url} alt="" />
            {video?.lengthSeconds && <Time time={video?.lengthSeconds} />}
          </div>
          {/* Video Context*/}
          <div className='flex items-start mt-3 ml-[8px] space-x-3'>
            <div>
              {/* Video title & User name */}
              <span className='text-sm font-bold line-clamp-2'>{video?.title}</span>

              <span className='flex items-center mt-1 text-[12px] text-gray-600'>
                {video?.author?.title}
                {video?.author?.badges[0]?.type === "VERIFIED_CHANNEL" && (<BsFillCheckCircleFill className='text-gray-600 ml-1 text-[12px]' />)}
              </span>
              {/* Video views & Published time */}
              <div className='flex text-gray-500 text-[12px]'>
                <span>
                  {`${abbreviateNumber(
                    video?.stats?.views, 2
                  )} views`}
                </span>
                <span className='flex items-center justify-center text-[24px] leading-none relative top-[-10px] mx-1'>
                  .
                </span>
                <span>{video?.publishedTimeText}</span>
              </div>
            </div>

          </div>
        </div>
      </Link>
    </div>
  )
}

export default SuggestedVideo